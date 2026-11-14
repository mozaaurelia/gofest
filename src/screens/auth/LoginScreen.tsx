import React, { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";
import TicketIcon from "@/components/ticket-icon";
import AuthGlowBg from "@/components/auth/auth-glow-bg";
import AuthInput from "@/components/auth/auth-input";
import AuthButton from "@/components/auth/auth-button";
import AuthSwitchLink from "@/components/auth/auth-switch-link";
import { gfColors } from "@/constants/gf-theme";
import { useTranslation } from "@/context/language-context";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { t } = useTranslation();

  const canSubmit =
    email.includes("@") &&
    email.trim() !== "" &&
    password.trim().length >= 5 &&
    /[a-zA-Z0-9]/.test(password);

  return (
    <SafeAreaView style={styles.safe}>
      <AuthGlowBg />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeInDown.duration(500).delay(50)} style={styles.logoRow}>
          <TicketIcon size={30} />
          <Text style={styles.wordmark}>goFest!</Text>
        </Animated.View>

        <Animated.Text entering={FadeInDown.duration(500).delay(120)} style={styles.title}>
          {t("auth.welcomeBack")}
        </Animated.Text>
        <Animated.Text entering={FadeInDown.duration(500).delay(180)} style={styles.subtitle}>
          {t("auth.loginSubtitle")}
        </Animated.Text>

        <Animated.View entering={FadeInDown.duration(500).delay(260)} style={styles.form}>
          <AuthInput
            label={t("auth.email")}
            icon="mail"
            placeholder={t("auth.emailPlaceholder")}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <AuthInput
            label={t("auth.password")}
            icon="lock"
            isPassword
            placeholder={t("auth.passwordPlaceholder")}
            value={password}
            onChangeText={setPassword}
          />

          <Text style={styles.forgot}>{t("auth.forgot")}</Text>

          <AuthButton label={t("auth.signIn")} onPress={() => router.replace("/(tabs)" as any)} disabled={!canSubmit} />
        </Animated.View>

        <Animated.View entering={FadeInDown.duration(500).delay(340)}>
          <AuthSwitchLink question={t("auth.noAccount")} actionLabel={t("auth.registerHere")} href="/auth/register" />
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: gfColors.bg },
  content: { flexGrow: 1, justifyContent: "center", paddingHorizontal: 28, paddingVertical: 40 },
  logoRow: { flexDirection: "row", alignItems: "center", gap: 8, alignSelf: "center", marginBottom: 28 },
  wordmark: { fontSize: 20, fontWeight: "800", color: gfColors.text },
  title: { fontSize: 24, fontWeight: "800", color: gfColors.text, textAlign: "center" },
  subtitle: { fontSize: 13, color: gfColors.textMuted, textAlign: "center", marginTop: 6, marginBottom: 28 },
  form: {},
  forgot: { alignSelf: "flex-end", fontSize: 12, fontWeight: "600", color: gfColors.teal, marginBottom: 20, marginTop: -4 },
});
