import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useTranslation } from "@/context/language-context";

type Props = {
  title: string;
  onSkip?: () => void;
};

export default function OnboardingHeader({ title, onSkip }: Props) {
  const { t } = useTranslation();

  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{title}</Text>
      <Pressable
        onPress={onSkip}
        disabled={!onSkip}
        hitSlop={8}
        accessibilityRole="button"
        accessibilityLabel={t("onboarding.skip")}
        style={({ pressed }) => [styles.skipBtn, pressed && styles.pressed]}
      >
        <Text style={styles.skipText}>{t("onboarding.skip")}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 22,
    paddingTop: 8,
  },
  title: { fontSize: 26, fontWeight: "800", color: "#FFFFFF", letterSpacing: 0.2 },
  skipBtn: { paddingVertical: 6 },
  skipText: { fontSize: 14, fontWeight: "600", color: "rgba(255,255,255,0.72)" },
  pressed: { opacity: 0.7 },
});
