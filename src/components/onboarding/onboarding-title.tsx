import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { gfColors } from "@/constants/gf-theme";

type Props = {
  title: string;
  subtitle?: string;
  variant?: "dark" | "light";
};

export default function OnboardingTitle({ title, subtitle, variant = "dark" }: Props) {
  const isLight = variant === "light";

  return (
    <View style={styles.wrap}>
      <Text style={[styles.title, isLight && styles.titleLight]}>{title}</Text>
      {subtitle ? <Text style={[styles.subtitle, isLight && styles.subtitleLight]}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: "center", paddingHorizontal: 26 },
  title: { fontSize: 26, lineHeight: 33, fontWeight: "800", color: "#FFFFFF", textAlign: "center", letterSpacing: 0.2 },
  titleLight: { color: gfColors.text },
  subtitle: { fontSize: 14, lineHeight: 21, color: "rgba(255,255,255,0.72)", textAlign: "center", marginTop: 10 },
  subtitleLight: { color: gfColors.textMuted },
});
