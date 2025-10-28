import AuthProvider from '@/Providers/AuthProvider';
import ProjectProvider from '@/Providers/ProjectProvider';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient()

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <ProjectProvider>

            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen
                name="login"
                options={{
                  headerShown: false,
                  presentation: 'modal',
                  gestureEnabled: false,
                }}
              />
              <Stack.Screen name="register" options={{ title: 'Create Account' }} />
              <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
            </Stack>
          </ProjectProvider>
          <StatusBar style="auto" />
        </ThemeProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}
