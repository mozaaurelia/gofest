import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { calcPaymentSummary, PAYMENT_FEES } from "@/constants/payment-data";
import usePaymentTimer from "@/hooks/use-payment-timer";
import {
  PaymentBottomBar,
  PaymentBrandFooter,
  PaymentDetailSection,
  PaymentMethodSection,
  PaymentPromoBanner,
  PaymentPromoSection,
  PaymentProtectionCard,
  PaymentStepper,
  PaymentTimerBar,
} from "@/components/payment";

export default function PaymentScreen() {
  const { id, qty, price, category } = useLocalSearchParams<{
    id: string;
    qty: string;
    price: string;
    category: string;
  }>();

  const ticketQty = Math.max(1, Number(qty) || 1);
  const basePrice = Math.max(0, Number(price) || 0);
  const ticketCategory = typeof category === "string" && category ? category : "FESTIVAL";
  const { localTax, adminFee, total } = calcPaymentSummary(basePrice);
  const { formatted } = usePaymentTimer();

  const targetId = Array.isArray(id) ? id[0] : id;

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
      return;
    }
    router.replace("/");
  };

  const handlePay = () => {
    router.push({
      pathname: "/boarding-pass/[id]",
      params: { id: targetId ?? "h1", qty: String(ticketQty), price: String(total) },
    } as any);
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]}
      >
        <PaymentStepper />
        <PaymentTimerBar time={formatted} />

        <View style={styles.body}>
          <PaymentPromoSection />
          <PaymentMethodSection />
          <PaymentPromoBanner />
          <PaymentDetailSection
            category={ticketCategory}
            qty={ticketQty}
            basePrice={basePrice}
            localTax={localTax}
            adminFee={adminFee}
            protection={PAYMENT_FEES.protection}
            platform={PAYMENT_FEES.platform}
            total={total}
          />
          <PaymentProtectionCard />
          <PaymentBrandFooter />
        </View>
      </ScrollView>

      <PaymentBottomBar qty={ticketQty} total={total} onBack={handleBack} onPay={handlePay} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scroll: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
  body: {
    paddingBottom: 28,
  },
});
