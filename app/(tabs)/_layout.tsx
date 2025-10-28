import { Tabs, router } from 'expo-router';
import React, { useContext, useEffect } from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { AuthContext } from '@/Providers/AuthProvider';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { isAuthenticated, didFetch } = useContext(AuthContext);

  // Navigate to login screen if not authenticated
  useEffect(() => {
    if (didFetch && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, didFetch]);

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
