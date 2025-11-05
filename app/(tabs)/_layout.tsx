import { Tabs, router } from 'expo-router';
import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { ActiveCardContext } from '@/Providers/ActiveCardProvider';
import { AuthContext } from '@/Providers/AuthProvider';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme ?? 'light';
  const { isAuthenticated, didFetch } = useContext(AuthContext);
  const { isLoading: isCardLoading } = useContext(ActiveCardContext);

  // Navigate to login screen if not authenticated
  useEffect(() => {
    if (didFetch && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, didFetch]);

  // Show loading screen while cards are loading (only for authenticated users)
  if (isAuthenticated && isCardLoading) {
    return (
      <ThemedView style={styles.loadingContainer}>
        <View style={styles.loadingContent}>
          <ActivityIndicator size="large" color={Colors[theme].tint} />
          <ThemedText style={styles.loadingText}>Loading your cards...</ThemedText>
          <ThemedText style={styles.loadingSubtext}>
            Please wait while we prepare your dashboard
          </ThemedText>
        </View>
      </ThemedView>
    );
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        // Hide tab bar when not authenticated
        tabBarStyle: isAuthenticated ? undefined : { display: 'none' },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.circle" color={color} />,
        }}
      />

    </Tabs>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  loadingContent: {
    alignItems: 'center',
    gap: 16,
  },
  loadingText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  loadingSubtext: {
    fontSize: 14,
    opacity: 0.7,
    textAlign: 'center',
    maxWidth: 280,
  },
});
