import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import {
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

  if (step === 1) {
    return (
      <View style={styles.rootLight}>
        <SafeAreaView style={styles.safeLight} edges={["top", "bottom"]}>
          <View style={styles.illustWrap}>
            <OnboardingMerchIllustration />
          </View>
          <OnboardingTitle
            title={t("onboarding.merch.title")}
            subtitle={t("onboarding.merch.subtitle")}
            variant="light"
          />
          <OnboardingFooter currentStep={1} totalSteps={TOTAL_STEPS} onNext={() => setStep(2)} variant="light" />
        </SafeAreaView>
      </View>
    );
  }

  if (step === 2) {
    return (
      <View style={styles.rootDark}>
        <SafeAreaView style={styles.safeDark} edges={["top", "bottom"]}>
          <View style={styles.illustWrap}>
            <OnboardingPaymentIllustration />
          </View>
          <OnboardingTitle
            title={t("onboarding.payment.title")}
            subtitle={t("onboarding.payment.subtitle")}
          />
          <OnboardingFooter
            currentStep={2}
            totalSteps={TOTAL_STEPS}
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
          />
        </SafeAreaView>
      </View>
    );
  }

  if (step === 3) {
    return (
      <View style={styles.rootDark}>
        <SafeAreaView style={styles.safeDark} edges={["top", "bottom"]}>
          <View style={styles.illustWrap}>
            <OnboardingLiveEventIllustration />
          </View>
          <OnboardingTitle
            title={t("onboarding.live.title")}
            subtitle={t("onboarding.live.subtitle")}
          />
          <OnboardingFooter
            currentStep={3}
            totalSteps={TOTAL_STEPS}
            onBack={() => setStep(2)}
            onNext={() => setStep(4)}
          />
        </SafeAreaView>
      </View>
    );
  }

  return (
    <View style={styles.rootDark}>
      <SafeAreaView style={styles.safeDark} edges={["top", "bottom"]}>
        <View style={styles.illustWrap}>
          <OnboardingVipIllustration />
        </View>
        <OnboardingTitle
          title={t("onboarding.vip.title")}
          subtitle={t("onboarding.vip.subtitle")}
        />
        <OnboardingCta
          primaryLabel={t("onboarding.vip.register")}
          onPrimaryPress={() => router.replace("/auth/register" as any)}
          secondaryLabel={t("onboarding.vip.explore")}
          onSecondaryPress={() => router.replace("/(tabs)" as any)}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  rootDark: { flex: 1, backgroundColor: "#232E58" },
  safeDark: { flex: 1, backgroundColor: "#232E58" },
  rootLight: { flex: 1, backgroundColor: "#FFFFFF" },
  safeLight: { flex: 1, backgroundColor: "#FFFFFF" },
  illustWrap: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 12 },
});
