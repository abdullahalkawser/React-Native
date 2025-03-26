
import { Stack } from 'expo-router';

import { StatusBar } from 'expo-status-bar';




export default function AuthLayout() {



  return (

      <><Stack>
      <Stack.Screen name="signin" options={{ headerShown: false }} />
      <Stack.Screen name="signUp" options={{ headerShown: false }} />

    </Stack><StatusBar style="auto" /></>

  );
}
