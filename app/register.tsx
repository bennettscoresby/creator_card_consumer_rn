import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { marqetaService } from '@/helpers/marqeta-service';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { AuthContext } from '@/Providers/AuthProvider';
import { ProjectContext } from '@/Providers/ProjectProvider';
import type { RegistrationFlow, UpdateRegistrationFlowBody } from '@ory/client';
import { Link, router } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function RegisterScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address1, setAddress1] = useState('');
  const [city, setCity] = useState('');
  const [stateProvince, setStateProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');

  const [loading, setLoading] = useState(false);
  const [flow, setFlow] = useState<RegistrationFlow | null>(null);
  const colorScheme = useColorScheme();
  const theme = colorScheme ?? 'light';

  const { setSession, isAuthenticated } = useContext(AuthContext);
  const { sdk } = useContext(ProjectContext);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/(tabs)');
    }
  }, [isAuthenticated]);

  // Initialize the registration flow when component mounts
  useEffect(() => {
    if (!isAuthenticated) {
      initializeRegistrationFlow();
    }
  }, [isAuthenticated]);

  const initializeRegistrationFlow = async () => {
    try {
      const { data } = await sdk.createNativeRegistrationFlow();
      console.log('Registration flow initialized:', data);
      console.log('Flow ID:', data.id);
      console.log('Flow expires at:', data.expires_at);
      setFlow(data);
    } catch (error: any) {
      console.error('Failed to initialize registration flow:', error);
      console.error('Init flow error response:', error.response?.data);
      Alert.alert('Error', 'Failed to initialize registration. Please try again.');
    }
  };

  const handleRegister = async () => {
    if (!flow) {
      Alert.alert('Error', 'Registration flow not initialized. Please refresh.');
      return;
    }

    // Check if flow has expired and reinitialize if needed
    const now = new Date();
    const expiresAt = new Date(flow.expires_at);
    if (now >= expiresAt) {
      console.log('Registration flow expired, reinitializing...');
      await initializeRegistrationFlow();
      if (!flow) {
        Alert.alert('Error', 'Failed to reinitialize registration flow.');
        return;
      }
    }

    if (!firstName || !lastName || !email || !password || !confirmPassword ||
      !address1 || !city || !stateProvince || !postalCode || !country ||
      !birthDate || !phone) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    // Validate country code format if provided
    if (country && !/^[A-Z]{2}$/.test(country)) {
      Alert.alert('Error', 'Country must be a 2-letter ISO code (e.g., US, CA, GB).');
      return;
    }



    // Validate phone number format if provided
    if (phone && !/^\+?[0-9]{7,15}$/.test(phone)) {
      Alert.alert('Error', 'Phone number must be 7-15 digits, optionally starting with +.');
      return;
    }

    // Validate birth date format if provided
    if (birthDate && !/^\d{4}-\d{2}-\d{2}$/.test(birthDate)) {
      Alert.alert('Error', 'Birth date must be in YYYY-MM-DD format.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    if (password.length < 8) {
      Alert.alert('Error', 'Password must be at least 8 characters long.');
      return;
    }

    setLoading(true);

    try {
      // Create user in Marqeta first
      console.log('Creating Marqeta user...');
      const marqetaUser = await marqetaService.createUser({
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        address1: address1,
        city: city,
        state: stateProvince,
        postal_code: postalCode,
        country: country.toUpperCase(),
        birth_date: birthDate,
      });

      const marquetaToken = marqetaUser.token;
      console.log('Marqeta user created with token:', marquetaToken);

      // Submit the registration credentials with Marqeta token included
      const traits: any = {
        email: email,
        first_name: firstName,
        last_name: lastName,
        address1: address1,
        city: city,
        state: stateProvince,
        postal_code: postalCode,
        country: country.toUpperCase(),
        birth_date: birthDate,
        phone: phone,
        marqeta_token: marquetaToken, // Include Marqeta token in initial registration
      };

      const registrationBody = {
        method: 'password',
        password: password,
        traits: traits,
      } as UpdateRegistrationFlowBody;

      console.log('Sending registration request:', {
        flowId: flow.id,
        body: registrationBody
      });
      console.log('Flow object before registration:', flow);
      console.log('Current time:', new Date().toISOString());
      console.log('Flow expires at:', flow.expires_at);

      const { data } = await sdk.updateRegistrationFlow({
        flow: flow.id,
        updateRegistrationFlowBody: registrationBody,
      });

      // Extract the session token from the response
      const sessionToken = data.session_token;
      const session = data.session;

      if (!sessionToken || !session) {
        throw new Error('No session token received');
      }

      // Store the session using AuthContext
      setSession({
        session_token: sessionToken,
        session: session,
      });

      console.log('Registration completed successfully!');



      // Dismiss the registration modal to reveal the authenticated dashboard
      router.dismissAll();

    } catch (error: any) {
      console.error('Registration error:', error);
      console.error('Registration error response:', error.response?.data);
      console.error('Registration error status:', error.response?.status);
      console.error('Registration error config:', error.config);
      console.error('Registration error stack:', error.stack);

      // Handle specific Ory errors
      if (error.response?.data?.ui?.messages) {
        const messages = error.response.data.ui.messages;
        const errorMessage = messages.map((m: any) => m.text).join('\n');
        Alert.alert('Registration Failed', errorMessage);
      } else if (error.response?.data?.ui?.nodes) {
        // Check for field-specific errors
        const nodes = error.response.data.ui.nodes;
        const fieldErrors = nodes
          .filter((node: any) => node.messages && node.messages.length > 0)
          .map((node: any) => node.messages.map((m: any) => m.text).join(', '))
          .join('\n');

        if (fieldErrors) {
          Alert.alert('Registration Failed', fieldErrors);
        } else {
          Alert.alert('Registration Failed', 'Please check your information and try again.');
        }
      } else if (error.response?.status === 400) {
        const errorMsg = error.response?.data?.error?.message || 'Please check your information and try again.';
        Alert.alert('Registration Failed', errorMsg);
      } else {
        Alert.alert('Error', 'An error occurred during registration. Please try again.');
      }

      // Reinitialize the flow after error
      initializeRegistrationFlow();
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled">
        <ThemedView style={styles.content}>
          <ThemedView style={styles.header}>
            <ThemedText type="title" style={styles.title}>
              Create Account
            </ThemedText>
            <ThemedText style={styles.subtitle}>
              Sign up to get started
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.form}>
            <ThemedView style={styles.inputContainer}>
              <ThemedText type="defaultSemiBold" style={styles.label}>
                First Name
              </ThemedText>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f5f5f5',
                    color: Colors[theme].text,
                    borderColor: theme === 'dark' ? '#333' : '#ddd',
                  },
                ]}
                placeholder="Enter your first name"
                placeholderTextColor={theme === 'dark' ? '#666' : '#999'}
                value={firstName}
                onChangeText={setFirstName}
                autoCapitalize="words"
                autoComplete="given-name"
                autoCorrect={false}
              />
            </ThemedView>

            <ThemedView style={styles.inputContainer}>
              <ThemedText type="defaultSemiBold" style={styles.label}>
                Last Name
              </ThemedText>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f5f5f5',
                    color: Colors[theme].text,
                    borderColor: theme === 'dark' ? '#333' : '#ddd',
                  },
                ]}
                placeholder="Enter your last name"
                placeholderTextColor={theme === 'dark' ? '#666' : '#999'}
                value={lastName}
                onChangeText={setLastName}
                autoCapitalize="words"
                autoComplete="family-name"
                autoCorrect={false}
              />
            </ThemedView>

            <ThemedView style={styles.inputContainer}>
              <ThemedText type="defaultSemiBold" style={styles.label}>
                Email
              </ThemedText>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f5f5f5',
                    color: Colors[theme].text,
                    borderColor: theme === 'dark' ? '#333' : '#ddd',
                  },
                ]}
                placeholder="Enter your email"
                placeholderTextColor={theme === 'dark' ? '#666' : '#999'}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
              />
            </ThemedView>

            <ThemedView style={styles.inputContainer}>
              <ThemedText type="defaultSemiBold" style={styles.label}>
                Password
              </ThemedText>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f5f5f5',
                    color: Colors[theme].text,
                    borderColor: theme === 'dark' ? '#333' : '#ddd',
                  },
                ]}
                placeholder="Enter your password (min 8 characters)"
                placeholderTextColor={theme === 'dark' ? '#666' : '#999'}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
                autoComplete="new-password"
                autoCorrect={false}
              />
            </ThemedView>

            <ThemedView style={styles.inputContainer}>
              <ThemedText type="defaultSemiBold" style={styles.label}>
                Confirm Password
              </ThemedText>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f5f5f5',
                    color: Colors[theme].text,
                    borderColor: theme === 'dark' ? '#333' : '#ddd',
                  },
                ]}
                placeholder="Confirm your password"
                placeholderTextColor={theme === 'dark' ? '#666' : '#999'}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                autoCapitalize="none"
                autoComplete="new-password"
                autoCorrect={false}
              />
            </ThemedView>

            <ThemedView style={styles.inputContainer}>
              <ThemedText type="defaultSemiBold" style={styles.label}>
                Phone Number
              </ThemedText>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f5f5f5',
                    color: Colors[theme].text,
                    borderColor: theme === 'dark' ? '#333' : '#ddd',
                  },
                ]}
                placeholder="e.g., +1234567890"
                placeholderTextColor={theme === 'dark' ? '#666' : '#999'}
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                autoComplete="tel"
                autoCorrect={false}
              />
            </ThemedView>

            <ThemedView style={styles.inputContainer}>
              <ThemedText type="defaultSemiBold" style={styles.label}>
                Birth Date (YYYY-MM-DD)
              </ThemedText>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f5f5f5',
                    color: Colors[theme].text,
                    borderColor: theme === 'dark' ? '#333' : '#ddd',
                  },
                ]}
                placeholder="e.g., 1990-01-15"
                placeholderTextColor={theme === 'dark' ? '#666' : '#999'}
                value={birthDate}
                onChangeText={setBirthDate}
                autoComplete="birthdate-full"
                autoCorrect={false}
              />
            </ThemedView>

            <ThemedView style={styles.sectionHeader}>
              <ThemedText type="subtitle" style={styles.sectionTitle}>
                Address Information
              </ThemedText>
            </ThemedView>

            <ThemedView style={styles.inputContainer}>
              <ThemedText type="defaultSemiBold" style={styles.label}>
                Address Line 1
              </ThemedText>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f5f5f5',
                    color: Colors[theme].text,
                    borderColor: theme === 'dark' ? '#333' : '#ddd',
                  },
                ]}
                placeholder="Enter your address"
                placeholderTextColor={theme === 'dark' ? '#666' : '#999'}
                value={address1}
                onChangeText={setAddress1}
                autoCapitalize="words"
                autoComplete="street-address"
                autoCorrect={false}
              />
            </ThemedView>

            <ThemedView style={styles.inputContainer}>
              <ThemedText type="defaultSemiBold" style={styles.label}>
                City
              </ThemedText>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f5f5f5',
                    color: Colors[theme].text,
                    borderColor: theme === 'dark' ? '#333' : '#ddd',
                  },
                ]}
                placeholder="Enter your city"
                placeholderTextColor={theme === 'dark' ? '#666' : '#999'}
                value={city}
                onChangeText={setCity}
                autoCapitalize="words"
                autoComplete="address-line2"
                autoCorrect={false}
              />
            </ThemedView>

            <ThemedView style={styles.inputContainer}>
              <ThemedText type="defaultSemiBold" style={styles.label}>
                State/Province
              </ThemedText>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f5f5f5',
                    color: Colors[theme].text,
                    borderColor: theme === 'dark' ? '#333' : '#ddd',
                  },
                ]}
                placeholder="Enter your state or province"
                placeholderTextColor={theme === 'dark' ? '#666' : '#999'}
                value={stateProvince}
                onChangeText={setStateProvince}
                autoCapitalize="words"
                autoCorrect={false}
              />
            </ThemedView>

            <ThemedView style={styles.inputContainer}>
              <ThemedText type="defaultSemiBold" style={styles.label}>
                Postal Code
              </ThemedText>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f5f5f5',
                    color: Colors[theme].text,
                    borderColor: theme === 'dark' ? '#333' : '#ddd',
                  },
                ]}
                placeholder="Enter your postal code"
                placeholderTextColor={theme === 'dark' ? '#666' : '#999'}
                value={postalCode}
                onChangeText={setPostalCode}
                autoCapitalize="characters"
                autoComplete="postal-code"
                autoCorrect={false}
              />
            </ThemedView>

            <ThemedView style={styles.inputContainer}>
              <ThemedText type="defaultSemiBold" style={styles.label}>
                Country (2-letter code)
              </ThemedText>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f5f5f5',
                    color: Colors[theme].text,
                    borderColor: theme === 'dark' ? '#333' : '#ddd',
                  },
                ]}
                placeholder="e.g., US, CA, GB"
                placeholderTextColor={theme === 'dark' ? '#666' : '#999'}
                value={country}
                onChangeText={setCountry}
                autoCapitalize="characters"
                autoComplete="country"
                autoCorrect={false}
                maxLength={2}
              />
            </ThemedView>





            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: Colors[theme].tint,
                  opacity: loading ? 0.6 : 1,
                },
              ]}
              onPress={handleRegister}
              disabled={loading}
              activeOpacity={0.8}>
              {loading ? (
                <ThemedView style={{ backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                  <ThemedText
                    style={[
                      styles.buttonText,
                      { color: theme === 'dark' ? '#000' : '#fff' },
                    ]}>
                    Creating Account...
                  </ThemedText>
                </ThemedView>
              ) : (
                <ThemedText
                  style={[
                    styles.buttonText,
                    { color: theme === 'dark' ? '#000' : '#fff' },
                  ]}>
                  Create Account
                </ThemedText>
              )}
            </TouchableOpacity>

            <Link href="/(tabs)/login" asChild>
              <TouchableOpacity style={styles.loginLink}>
                <ThemedText style={styles.loginText}>
                  Already have an account? <ThemedText style={[styles.loginText, { color: Colors[theme].tint }]}>Sign In</ThemedText>
                </ThemedText>
              </TouchableOpacity>
            </Link>
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  header: {
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
  },
  form: {
    gap: 20,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    marginBottom: 4,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  button: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  loginLink: {
    alignItems: 'center',
    marginTop: 16,
  },
  loginText: {
    fontSize: 14,
    opacity: 0.8,
  },
  sectionHeader: {
    marginTop: 24,
    marginBottom: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(128, 128, 128, 0.2)',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    opacity: 0.9,
  },
});
