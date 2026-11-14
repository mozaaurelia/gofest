import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import {
  OnboardingBackground,
  OnboardingCta,
  OnboardingFooter,
  OnboardingLiveEventIllustration,
  OnboardingMerchIllustration,
  OnboardingPaymentIllustration,
  OnboardingTitle,
  OnboardingVipIllustration,
} from "@/components/onboarding";
import { useTranslation } from "@/context/language-context";

type OnboardingStep = 1 | 2 | 3 | 4;

const TOTAL_STEPS = 4;

export default function OnboardingScreen() {
  const [step, setStep] = useState<OnboardingStep>(1);
  const { t } = useTranslation();

  return (
    <View style={styles.root}>
      <OnboardingBackground />

      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        {step === 1 && (
          <>
            <View style={styles.illustWrap}>
              <OnboardingMerchIllustration />
            </View>
            <OnboardingTitle
              title={t("onboarding.merch.title")}
              subtitle={t("onboarding.merch.subtitle")}
              variant="light"
            />
            <OnboardingFooter currentStep={1} totalSteps={TOTAL_STEPS} onNext={() => setStep(2)} variant="light" />
          </>
        )}

        {step === 2 && (
          <>
            <View style={styles.illustWrap}>
              <OnboardingPaymentIllustration />
            </View>
            <OnboardingTitle
              title={t("onboarding.payment.title")}
              subtitle={t("onboarding.payment.subtitle")}
              variant="light"
            />
            <OnboardingFooter
              currentStep={2}
              totalSteps={TOTAL_STEPS}
              onBack={() => setStep(1)}
              onNext={() => setStep(3)}
              variant="light"
            />
          </>
        )}

        {step === 3 && (
          <>
            <View style={styles.illustWrap}>
              <OnboardingLiveEventIllustration />
            </View>
            <OnboardingTitle
              title={t("onboarding.live.title")}
              subtitle={t("onboarding.live.subtitle")}
              variant="light"
            />
            <OnboardingFooter
              currentStep={3}
              totalSteps={TOTAL_STEPS}
              onBack={() => setStep(2)}
              onNext={() => setStep(4)}
              variant="light"
            />
          </>
        )}

        {step === 4 && (
          <>
            <View style={styles.illustWrap}>
              <OnboardingVipIllustration />
            </View>
            <OnboardingTitle
              title={t("onboarding.vip.title")}
              subtitle={t("onboarding.vip.subtitle")}
              variant="light"
            />
            <OnboardingCta
              primaryLabel={t("onboarding.vip.register")}
              onPrimaryPress={() => router.replace("/auth/register" as any)}
              secondaryLabel={t("onboarding.vip.explore")}
              onSecondaryPress={() => router.replace("/(tabs)" as any)}
              variant="light"
            />
          </>
        )}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#F4F9F8" },
  safe: { flex: 1 },
  illustWrap: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 12 },
});
