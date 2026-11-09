import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import AnimatedSplashScreen from "../components/animated-splash-screen";
import { SavedTicketsProvider } from "../context/saved-tickets-context";
import { LanguageProvider } from "../context/language-context";
import { ProfileAvatarProvider } from "../context/profile-avatar-context";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <LanguageProvider>
      <SavedTicketsProvider>
        <ProfileAvatarProvider>
          <Stack screenOptions={{ headerShown: false }} />
          {showSplash ? <AnimatedSplashScreen onFinish={() => setShowSplash(false)} /> : null}
        </ProfileAvatarProvider>
      </SavedTicketsProvider>
    </LanguageProvider>
  );
}
