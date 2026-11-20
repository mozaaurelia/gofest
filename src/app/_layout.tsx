import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import AnimatedSplashScreen from "../components/animated-splash-screen";
import { AuthProvider, useAuth } from "../context/auth-context";
import { SavedTicketsProvider } from "../context/saved-tickets-context";
import { LanguageProvider } from "../context/language-context";
import { ProfileAvatarProvider } from "../context/profile-avatar-context";
import { ProfileNameProvider } from "../context/profile-name-context";

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: "auth/login",
};

function RootNavigator() {
  const { isAuthenticated } = useAuth();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />

      <Stack.Protected guard={!isAuthenticated}>
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="auth/login" />
        <Stack.Screen name="auth/register" />
      </Stack.Protected>

      <Stack.Protected guard={isAuthenticated}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="menu" />
        <Stack.Screen name="calendar" />
        <Stack.Screen name="concert/[id]" />
        <Stack.Screen name="payment/[id]" />
        <Stack.Screen name="detail-payment/[id]" />
        <Stack.Screen name="seat-map/[id]" />
        <Stack.Screen name="event-guide/[id]" />
        <Stack.Screen name="wristband/[id]" />
        <Stack.Screen name="boarding-pass/[id]" />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <LanguageProvider>
      <SavedTicketsProvider>
        <ProfileAvatarProvider>
          <ProfileNameProvider>
            <AuthProvider>
              <RootNavigator />
              {showSplash ? <AnimatedSplashScreen onFinish={() => setShowSplash(false)} /> : null}
            </AuthProvider>
          </ProfileNameProvider>
        </ProfileAvatarProvider>
      </SavedTicketsProvider>
    </LanguageProvider>
  );
}
