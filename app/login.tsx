import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { AuthContext } from '@/Providers/AuthProvider';
import { ProjectContext } from '@/Providers/ProjectProvider';
import type { LoginFlow, UpdateLoginFlowBody } from '@ory/client';
import { Link, router } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [flow, setFlow] = useState<LoginFlow | null>(null);
  const colorScheme = useColorScheme();
  const theme = colorScheme ?? 'light';

  const { setSession, isAuthenticated } = useContext(AuthContext);
  const { sdk } = useContext(ProjectContext);

  // Initialize the login flow when component mounts (only if not authenticated)
  useEffect(() => {
    if (!isAuthenticated) {
      initializeLoginFlow();
    }
  }, [isAuthenticated]);

  const initializeLoginFlow = async () => {
    try {
      const { data } = await sdk.createNativeLoginFlow();
      setFlow(data);
    } catch (error) {
      console.error('Failed to initialize login flow:', error);
      Alert.alert('Error', 'Failed to initialize login. Please try again.');
    }
  };

  const handleLogin = async () => {
    if (!flow) {
      Alert.alert('Error', 'Login flow not initialized. Please refresh.');
      return;
    }

    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    setLoading(true);

    try {
      // Submit the login credentials
      const { data } = await sdk.updateLoginFlow({
        flow: flow.id,
        updateLoginFlowBody: {
          method: 'password',
          password: password,
          identifier: email,
        } as UpdateLoginFlowBody,
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

      // Navigate to home screen
      router.replace('/(tabs)');

    } catch (error: any) {
      console.error('Login error:', error);

      // Handle specific Ory errors
      if (error.response?.data?.ui?.messages) {
        const messages = error.response.data.ui.messages;
        const errorMessage = messages.map((m: any) => m.text).join('\n');
        Alert.alert('Login Failed', errorMessage);
      } else if (error.response?.status === 400) {
        Alert.alert('Login Failed', 'Invalid email or password.');
      } else {
        Alert.alert('Error', 'An error occurred during login. Please try again.');
      }

      // Reinitialize the flow after error
      initializeLoginFlow();
    } finally {
      setLoading(false);
    }
  };



  // Redirect to tabs if authenticated (logout is now handled in account page)
  if (isAuthenticated) {
    router.replace('/(tabs)');
    return null;
  }

  // Show login UI if not authenticated
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
              Welcome Back
            </ThemedText>
            <ThemedText style={styles.subtitle}>
              Sign in to continue
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.form}>
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
                placeholder="Enter your password"
                placeholderTextColor={theme === 'dark' ? '#666' : '#999'}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
                autoComplete="password"
                autoCorrect={false}
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
              onPress={handleLogin}
              disabled={loading}
              activeOpacity={0.8}>
              {loading ? (
                <ThemedView style={{ backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                  <ThemedText
                    style={[
                      styles.buttonText,
                      { color: theme === 'dark' ? '#000' : '#fff' },
                    ]}>
                    Signing In...
                  </ThemedText>
                </ThemedView>
              ) : (
                <ThemedText
                  style={[
                    styles.buttonText,
                    { color: theme === 'dark' ? '#000' : '#fff' },
                  ]}>
                  Sign In
                </ThemedText>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.forgotPassword}
              onPress={() => console.log('Forgot password pressed')}>
              <ThemedText style={styles.forgotPasswordText}>
                Forgot Password?
              </ThemedText>
            </TouchableOpacity>

            <Link href="/register" asChild>
              <TouchableOpacity style={styles.registerLink}>
                <ThemedText style={styles.registerText}>
                  Don't have an account? <ThemedText style={[styles.registerText, { color: Colors[theme].tint }]}>Register</ThemedText>
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
  forgotPassword: {
    alignItems: 'center',
    marginTop: 8,
  },
  forgotPasswordText: {
    fontSize: 14,
    opacity: 0.7,
  },
  registerLink: {
    alignItems: 'center',
    marginTop: 16,
  },
  registerText: {
    fontSize: 14,
    opacity: 0.8,
  },
});

