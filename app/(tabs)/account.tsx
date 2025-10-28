import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

import { AuthContext } from '@/Providers/AuthProvider';
import { router } from 'expo-router';
import { useContext, useState } from 'react';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';

export default function AccountScreen() {
  const [loading, setLoading] = useState(false);

  const { setSession, isAuthenticated, session } = useContext(AuthContext);

  const handleLogout = async () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            setLoading(true);
            try {
              // Clear the session
              setSession(null);
              // Navigate to home screen
              router.replace('/(tabs)');
            } catch (error) {
              console.error('Logout error:', error);
              Alert.alert('Error', 'An error occurred during logout. Please try again.');
            } finally {
              setLoading(false);
            }
          },
        },
      ]
    );
  };

  // Show login prompt if not authenticated
  if (!isAuthenticated) {
    return (
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
        headerImage={
          <IconSymbol
            size={310}
            color="#808080"
            name="person.circle"
            style={styles.headerImage}
          />
        }>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title" style={{ fontFamily: Fonts.rounded }}>
            Authentication Required
          </ThemedText>
        </ThemedView>
        <ThemedText>
          Please log in to access your account.
        </ThemedText>
      </ParallaxScrollView>
    );
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="person.circle.fill"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Account
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.userInfo}>
        <ThemedText type="subtitle" style={styles.welcomeText}>
          Welcome back!
        </ThemedText>
        <ThemedText style={styles.emailText}>
          {session?.identity?.traits?.email || 'User'}
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.actionsContainer}>
        <TouchableOpacity
          style={[
            styles.logoutButton,
            {
              backgroundColor: '#ff4444',
              opacity: loading ? 0.6 : 1,
            },
          ]}
          onPress={handleLogout}
          disabled={loading}
          activeOpacity={0.8}>
          {loading ? (
            <ThemedView style={{ backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <ThemedText
                style={[
                  styles.buttonText,
                  { color: '#fff' },
                ]}>
                Logging Out...
              </ThemedText>
            </ThemedView>
          ) : (
            <ThemedText
              style={[
                styles.buttonText,
                { color: '#fff' },
              ]}>
              Logout
            </ThemedText>
          )}
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 24,
  },
  userInfo: {
    marginBottom: 32,
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  welcomeText: {
    marginBottom: 8,
  },
  emailText: {
    fontSize: 16,
    opacity: 0.8,
  },
  actionsContainer: {
    gap: 16,
  },
  logoutButton: {
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
});
