import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen"

import "@/global.css"
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf")
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded])

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
