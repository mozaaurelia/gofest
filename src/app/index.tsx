import { Redirect } from "expo-router";
import { useAuth } from "@/context/auth-context";
import { hasSeenOnboarding } from "@/services/auth";

export default function Index() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return <Redirect href="/(tabs)" />;
  if (!hasSeenOnboarding()) return <Redirect href="/onboarding" />;
  return <Redirect href="/auth/login" />;
}
