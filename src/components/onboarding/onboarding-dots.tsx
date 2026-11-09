import React from "react";
import { StyleSheet, View } from "react-native";
import { gfColors } from "@/constants/gf-theme";

type Props = {
  total: number;
  activeStep: number;
  variant?: "dark" | "light";
};

export default function OnboardingDots({ total, activeStep, variant = "dark" }: Props) {
  const isLight = variant === "light";

  return (
    <View style={styles.wrap} accessibilityRole="progressbar" accessibilityValue={{ min: 1, max: total, now: activeStep }}>
      {Array.from({ length: total }, (_, index) => {
        const isActive = index === activeStep - 1;
        return (
          <View
            key={index}
            style={[
              styles.dot,
              isLight && styles.dotLight,
              isActive && styles.dotActive,
              isActive && isLight && styles.dotActiveLight,
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: "rgba(255,255,255,0.32)" },
  dotLight: { backgroundColor: "rgba(27,34,45,0.18)" },
  dotActive: { width: 8, height: 8, borderRadius: 4, backgroundColor: gfColors.lime },
  dotActiveLight: { backgroundColor: gfColors.teal },
});
