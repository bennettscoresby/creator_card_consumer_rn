import { Tabs } from 'expo-router';
import React, { useContext } from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { AuthContext } from '@/Providers/AuthProvider';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
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
          // Hide the tab when user is not authenticated
          href: isAuthenticated ? '/explore' : null,
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title: isAuthenticated ? 'Logout' : 'Login',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name={isAuthenticated ? 'rectangle.portrait.and.arrow.right' : 'person.circle'} color={color} />,
        }}
      />
    </Tabs>
  );
}
