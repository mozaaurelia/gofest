import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { gfColors } from "@/constants/gf-theme";

type Props = {
  primaryLabel: string;
  onPrimaryPress: () => void;
  secondaryLabel: string;
  onSecondaryPress: () => void;
  variant?: "dark" | "light";
};

export default function OnboardingCta({
  primaryLabel,
  onPrimaryPress,
  secondaryLabel,
  onSecondaryPress,
  variant = "dark",
}: Props) {
  const isLight = variant === "light";

  return (
    <View style={styles.wrap}>
      <Pressable onPress={onPrimaryPress} accessibilityRole="button" accessibilityLabel={primaryLabel}>
        {({ pressed }) => (
          <LinearGradient
            colors={[gfColors.brandBlueLight, gfColors.brandBlue]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.primaryBtn, pressed && styles.pressed]}
          >
            <Text style={styles.primaryText}>{primaryLabel}</Text>
          </LinearGradient>
        )}
      </Pressable>

      <Pressable
        onPress={onSecondaryPress}
        accessibilityRole="button"
        accessibilityLabel={secondaryLabel}
        style={({ pressed }) => [styles.secondaryBtn, pressed && styles.pressed]}
      >
        <Text style={[styles.secondaryText, isLight && styles.secondaryTextLight]}>{secondaryLabel}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingHorizontal: 20, paddingTop: 18, paddingBottom: 12, gap: 4 },
  primaryBtn: {
    height: 52,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: gfColors.brandBlue,
    shadowOpacity: 0.35,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
    elevation: 6,
  },
  primaryText: { fontSize: 15, fontWeight: "700", color: "#FFFFFF" },
  secondaryBtn: { paddingVertical: 14, alignItems: "center" },
  secondaryText: { fontSize: 14, fontWeight: "600", color: "rgba(255,255,255,0.85)" },
  secondaryTextLight: { color: "rgba(15,27,46,0.72)" },
  pressed: { opacity: 0.85 },
});
