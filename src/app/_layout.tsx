import React, { useEffect, useRef, useState } from "react";
import { Stack, useRouter, useRootNavigationState } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import AnimatedSplashScreen from "../components/animated-splash-screen";
import { SavedTicketsProvider } from "../context/saved-tickets-context";
import { LanguageProvider } from "../context/language-context";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);
  const router = useRouter();
  const navigationState = useRootNavigationState();
  const didRedirect = useRef(false);

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    if (!navigationState?.key) return;
    if (!showSplash && !didRedirect.current) {
      didRedirect.current = true;
      router.replace("/auth/login");
    }
  }, [navigationState?.key, showSplash]);

  return (
    <LanguageProvider>
      <SavedTicketsProvider>
        <Stack screenOptions={{ headerShown: false }} />
        {showSplash && <AnimatedSplashScreen onFinish={() => setShowSplash(false)} />}
      </SavedTicketsProvider>
    </LanguageProvider>
  );
}