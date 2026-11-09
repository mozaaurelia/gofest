import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
import {
  OnboardingActions,
  OnboardingFooter,
  OnboardingHeader,
  OnboardingMerchIllustration,
  OnboardingPaymentIllustration,
  OnboardingTitle,
  OnboardingTransferIllustration,
  OnboardingWave,
  OnboardingProgress,
} from "@/components/onboarding";
import { useTranslation } from "@/context/language-context";

type OnboardingStep = 1 | 2 | 3;

function OnboardingBackButton({ onPress }: { onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.backBtn, pressed && styles.pressed]} hitSlop={8} accessibilityLabel="Back" accessibilityRole="button">
      <Svg viewBox="0 0 24 24" width={20} height={20} fill="none">
        <Path d="M19 12H5M11 18l-6-6 6-6" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    </Pressable>
  );
}

export default function OnboardingScreen() {
  const [step, setStep] = useState<OnboardingStep>(1);
  const { t } = useTranslation();

  if (step === 1) {
    return (
      <View style={styles.rootDark}>
        <SafeAreaView style={styles.safeDark} edges={["top", "bottom"]}>
          <View style={styles.merchIllustWrap}>
            <OnboardingMerchIllustration />
          </View>
          <OnboardingTitle
            title={t("onboarding.merch.title")}
            subtitle={t("onboarding.merch.subtitle")}
          />
          <OnboardingFooter currentStep={1} totalSteps={3} onNext={() => setStep(2)} />
        </SafeAreaView>
      </View>
    );
  }

  if (step === 2) {
    return (
      <View style={styles.rootDark}>
        <SafeAreaView style={styles.safeDark} edges={["top", "bottom"]}>
          <OnboardingHeader title="TIX Concert" onSkip={() => setStep(3)} />
          <View style={styles.paymentIllustWrap}>
            <OnboardingPaymentIllustration />
          </View>
          <OnboardingTitle
            title={t("onboarding.payment.title")}
            subtitle={t("onboarding.payment.subtitle")}
          />
          <OnboardingFooter
            currentStep={2}
            totalSteps={3}
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
          />
        </SafeAreaView>
      </View>
    );
  }

  return (
    <View style={styles.rootDark}>
      <SafeAreaView style={styles.safeDark} edges={["top"]}>
        <View style={styles.topRow}>
          <OnboardingBackButton onPress={() => setStep(2)} />
          <OnboardingProgress step={3} variant="dark" />
          <View style={styles.topSpacer} />
        </View>
        <View style={styles.finalTitleWrap}>
          <Text style={styles.joinTitle}>Your Tickets,</Text>
          <Text style={styles.joinTitle}>Your Moments</Text>
          <Text style={styles.finalSub}>Keep every Go Fest experience close at hand.</Text>
        </View>
        <View style={styles.finalIllustWrap}>
          <OnboardingTransferIllustration />
        </View>
      </SafeAreaView>
      <OnboardingWave />
      <View style={styles.bottomDark}>
        <OnboardingActions />
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  merchIllustWrap: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 12, paddingTop: 8 },
  paymentIllustWrap: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 12 },
  pressed: { opacity: 0.85 },
  rootDark: { flex: 1, backgroundColor: "#232E58" },
  safeDark: { flex: 1, backgroundColor: "#232E58" },
  topRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingRight: 4 },
  backBtn: { width: 40, height: 40, alignItems: "center", justifyContent: "center" },
  topSpacer: { width: 56 },
  joinTitle: { fontSize: 28, fontWeight: "800", color: "#FFFFFF", textAlign: "center" },
  finalTitleWrap: { alignItems: "center", gap: 6, marginTop: 18, paddingHorizontal: 24 },
  finalSub: { fontSize: 12, color: "rgba(255,255,255,0.72)", textAlign: "center", lineHeight: 18, marginTop: 8 },
  finalIllustWrap: { flex: 1, justifyContent: "center", paddingHorizontal: 16, marginTop: 8 },
  bottomDark: { backgroundColor: "#FFFFFF", paddingBottom: 8 },
  homeIndicator: { alignSelf: "center", width: 120, height: 4, borderRadius: 2, backgroundColor: "#111827", marginTop: 12, marginBottom: 4 },
});
