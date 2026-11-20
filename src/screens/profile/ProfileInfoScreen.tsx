import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { useTranslation } from "@/context/language-context";
import { OnboardingBackground } from "@/components/onboarding";
import { gfColors } from "@/constants/gf-theme";

const contentKeys = {
  help: ["profile.helpCenter", "profile.helpCenterBody"],
  about: ["profile.about", "profile.aboutBody"],
  terms: ["profile.terms", "profile.termsBody"],
  privacy: ["profile.privacy", "profile.privacyBody"],
} as const;

type ContentKey = keyof typeof contentKeys;

export default function ProfileInfoScreen() {
  const { t } = useTranslation();
  const { type } = useLocalSearchParams<{ type?: string }>();
  const contentType: ContentKey = type && type in contentKeys ? (type as ContentKey) : "help";
  const [titleKey, bodyKey] = contentKeys[contentType];

  return (
    <View style={styles.root}>
      <OnboardingBackground />
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.back} accessibilityRole="button">
            <Text style={styles.backText}>‹</Text>
          </Pressable>
          <Text style={styles.title}>{t(titleKey)}</Text>
          <View style={styles.spacer} />
        </View>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{t(titleKey)}</Text>
            <Text style={styles.body}>{t(bodyKey)}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: gfColors.bg },
  safe: { flex: 1 },
  header: { flexDirection: "row", alignItems: "center", paddingHorizontal: 18, paddingVertical: 12 },
  back: { width: 40, height: 40, alignItems: "center", justifyContent: "center" },
  backText: { fontSize: 36, lineHeight: 38, color: gfColors.brandBlueDark },
  title: { flex: 1, textAlign: "center", fontSize: 19, fontWeight: "800", color: gfColors.brandBlueDark },
  spacer: { width: 40 },
  content: { padding: 20 },
  card: { backgroundColor: "rgba(255,255,255,0.94)", borderRadius: 24, padding: 24, shadowColor: gfColors.brandBlueDark, shadowOpacity: 0.1, shadowRadius: 20, elevation: 4 },
  cardTitle: { fontSize: 22, fontWeight: "800", color: gfColors.brandBlueDark, marginBottom: 16 },
  body: { fontSize: 16, lineHeight: 26, color: gfColors.text },
});
