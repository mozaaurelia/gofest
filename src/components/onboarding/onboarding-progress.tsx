import React from "react";
import { StyleSheet, View } from "react-native";

type Props = { step: 1 | 2 | 3; variant?: "light" | "dark" };

export default function OnboardingProgress({ step, variant = "light" }: Props) {
  const isDark = variant === "dark";
  const activeStyle = isDark ? styles.activeDark : styles.active;

  return (
    <View style={[styles.wrap, isDark && styles.wrapDark]}>
      <View style={[styles.bar, isDark && styles.barDark, step >= 1 && activeStyle]} />
      <View style={[styles.bar, isDark && styles.barDark, step >= 2 && activeStyle]} />
      <View style={[styles.bar, isDark && styles.barDark, step >= 3 && activeStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, flexDirection: "row", gap: 8, paddingHorizontal: 16, marginTop: 8 },
  wrapDark: { flex: 1 },
  bar: { flex: 1, height: 3, borderRadius: 2, backgroundColor: "rgba(0,0,0,0.08)" },
  barDark: { backgroundColor: "rgba(255,255,255,0.18)" },
  active: { backgroundColor: "#1E2E58" },
  activeDark: { backgroundColor: "#FFFFFF" },
});
