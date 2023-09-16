import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { SplashScreen, Stack } from 'expo-router';
import React from 'react';

import "../dist/output.css";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(index)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
//SplashScreen.preventAutoHideAsync();

export default function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="index"/>
    </Stack>
  );
}
