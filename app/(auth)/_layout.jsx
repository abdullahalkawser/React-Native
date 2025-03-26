
import { Stack } from 'expo-router';

import { StatusBar } from 'expo-status-bar';




export default function AuthLayout() {



  return (

      <><Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack><StatusBar style="auto" /></>

  );
}
