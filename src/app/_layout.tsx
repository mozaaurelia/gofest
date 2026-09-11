import React, { useEffect, useState } from "react";
import { Stack, useRouter, useRootNavigationState } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import AnimatedSplashScreen from "../components/animated-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);
  const router = useRouter();
  const navigationState = useRootNavigationState();

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    if (!navigationState?.key) return;
    if (!showSplash) {
      router.replace("/auth/login");
    }
  }, [navigationState?.key, showSplash]);

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      {showSplash && <AnimatedSplashScreen onFinish={() => setShowSplash(false)} />}
    </>
  );
}