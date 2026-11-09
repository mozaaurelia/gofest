import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { gfColors } from "@/constants/gf-theme";

type Props = {
  primaryLabel: string;
  onPrimaryPress: () => void;
  secondaryLabel: string;
  onSecondaryPress: () => void;
};

export default function OnboardingCta({ primaryLabel, onPrimaryPress, secondaryLabel, onSecondaryPress }: Props) {
  return (
    <View style={styles.wrap}>
      <Pressable onPress={onPrimaryPress} accessibilityRole="button" accessibilityLabel={primaryLabel}>
        {({ pressed }) => (
          <LinearGradient
            colors={[gfColors.teal, gfColors.lime]}
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
        <Text style={styles.secondaryText}>{secondaryLabel}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingHorizontal: 20, paddingTop: 18, paddingBottom: 12, gap: 4 },
  primaryBtn: { height: 52, borderRadius: 14, alignItems: "center", justifyContent: "center" },
  primaryText: { fontSize: 15, fontWeight: "700", color: "#10151D" },
  secondaryBtn: { paddingVertical: 14, alignItems: "center" },
  secondaryText: { fontSize: 14, fontWeight: "600", color: "rgba(255,255,255,0.85)" },
  pressed: { opacity: 0.85 },
});
