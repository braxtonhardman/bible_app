import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync(); // keep splash visible initially

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Lato': require('../assets/fonts/Lato-Regular.ttf'),
    'Roboto': require('../assets/fonts/Roboto-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      // Add a delay before hiding the splash
      const timer = setTimeout(() => {
        SplashScreen.hideAsync();
      }, 3000); // 3000ms = 3 seconds

      return () => clearTimeout(timer); // cleanup
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null; // stay on splash screen
  }

  return <Stack />;
}