import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { getConcertDetailById } from "@/constants/concert-detail-data";
import {
  DETAIL_PAYMENT_FALLBACK_EVENT,
  PAYMENT_CUSTOMER,
} from "@/constants/detail-payment-data";
import { calcPaymentSummary, PAYMENT_FEES } from "@/constants/payment-data";
import usePaymentTimer from "@/hooks/use-payment-timer";
import { PaymentTimerBar } from "@/components/payment";
import {
  DetailPaymentBottomBar,
  DetailPaymentBrandFooter,
  DetailPaymentMethodCard,
  DetailPaymentSummary,
  DetailPaymentTicketCard,
} from "@/components/detail-payment";

export default function DetailPaymentScreen() {
  const { id, qty, price, category, timer } = useLocalSearchParams<{
    id: string;
    qty: string;
    price: string;
    category: string;
    timer: string;
  }>();

  const concert = getConcertDetailById(id);
  const ticketQty = Math.max(1, Number(qty) || 1);
  const basePrice = Math.max(0, Number(price) || 0);
  const ticketCategory = typeof category === "string" && category ? category : "FESTIVAL";
  const remainingSeconds = Number(timer);
  const { localTax, adminFee, total } = calcPaymentSummary(basePrice);
  const { formatted } = usePaymentTimer(
    Number.isFinite(remainingSeconds) && remainingSeconds > 0 ? remainingSeconds : undefined
  );

  const targetId = Array.isArray(id) ? id[0] : id;

  const handlePay = () => {
    router.push({
      pathname: "/boarding-pass/[id]",
      params: { id: targetId ?? "h1", qty: String(ticketQty), price: String(total) },
    } as any);
  };

  const event = concert
    ? {
        title: concert.title,
        date: concert.date,
        time: concert.timeRange,
        address: concert.address,
        image: concert.image,
      }
    : DETAIL_PAYMENT_FALLBACK_EVENT;

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      >
        <PaymentTimerBar time={formatted} />

        <View style={styles.body}>
          <DetailPaymentTicketCard
            eventTitle={event.title}
            eventDate={event.date}
            eventTime={event.time}
            eventAddress={event.address}
            image={event.image}
            category={ticketCategory}
            qty={ticketQty}
            price={basePrice}
            customer={PAYMENT_CUSTOMER}
          />

          <DetailPaymentMethodCard />

          <View style={styles.sectionDivider} />

          <DetailPaymentSummary
            basePrice={basePrice}
            localTax={localTax}
            adminFee={adminFee}
            protection={PAYMENT_FEES.protection}
            platform={PAYMENT_FEES.platform}
            total={total}
          />

          <DetailPaymentBrandFooter />
        </View>
      </ScrollView>

      <DetailPaymentBottomBar qty={ticketQty} total={total} onPay={handlePay} />
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
    paddingBottom: 8,
  },
  sectionDivider: {
    height: 1,
    marginTop: 16,
    backgroundColor: "#EEF0F3",
  },
});
