import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { gfColors } from "@/constants/gf-theme";
import { useTranslation } from "@/context/language-context";
import OnboardingDots from "./onboarding-dots";

type Props = {
  currentStep: number;
  totalSteps: number;
  onBack?: () => void;
  onNext: () => void;
  variant?: "dark" | "light";
};

export default function OnboardingFooter({ currentStep, totalSteps, onBack, onNext, variant = "dark" }: Props) {
  const { t } = useTranslation();
  const backDisabled = !onBack;
  const isLight = variant === "light";

  return (
    <View style={styles.wrap}>
      <Pressable
        onPress={onBack}
        disabled={backDisabled}
        accessibilityRole="button"
        accessibilityLabel={t("onboarding.back")}
        accessibilityState={{ disabled: backDisabled }}
        style={({ pressed }) => [
          styles.backBtn,
          isLight && styles.backBtnLight,
          backDisabled && styles.backBtnDisabled,
          pressed && styles.pressed,
        ]}
      >
        <Text style={[styles.backText, isLight && styles.backTextLight]}>{t("onboarding.back")}</Text>
      </Pressable>

      <View style={styles.dots}>
        <OnboardingDots total={totalSteps} activeStep={currentStep} variant={variant} />
      </View>

      <Pressable onPress={onNext} accessibilityRole="button" accessibilityLabel={t("onboarding.next")}>
        {({ pressed }) => (
          <LinearGradient
            colors={[gfColors.brandBlueLight, gfColors.brandBlue]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.nextBtn, pressed && styles.pressed]}
          >
            <Text style={styles.nextText}>{t("onboarding.next")}</Text>
          </LinearGradient>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 20,
  },
  backBtn: {
    minWidth: 108,
    height: 44,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "rgba(255,255,255,0.55)",
    alignItems: "center",
    justifyContent: "center",
  },
  backBtnLight: { borderColor: "rgba(255,255,255,0.85)", backgroundColor: "rgba(255,255,255,0.32)" },
  backBtnDisabled: { opacity: 0.4 },
  backText: { fontSize: 12, fontWeight: "700", letterSpacing: 1, color: "#FFFFFF", textTransform: "uppercase" },
  backTextLight: { color: "#0F1B2E" },
  dots: { flex: 1, alignItems: "center" },
  nextBtn: {
    minWidth: 108,
    height: 44,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: gfColors.brandBlue,
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  nextText: { fontSize: 12, fontWeight: "800", letterSpacing: 1, color: "#FFFFFF", textTransform: "uppercase" },
  pressed: { opacity: 0.85 },
});
