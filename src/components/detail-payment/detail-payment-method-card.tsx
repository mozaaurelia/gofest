import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PAYMENT_METHODS } from "@/constants/payment-data";
import { QRIS_DESCRIPTION } from "@/constants/detail-payment-data";
import { MethodIcon } from "@/components/payment/payment-icons";

type Props = {
  paymentMethodId?: string;
};

const paymentOptions = PAYMENT_METHODS.flatMap((method) =>
  method.options.map((option) => ({ ...option, methodKey: method.key }))
);

export default function DetailPaymentMethodCard({ paymentMethodId }: Props) {
  const selectedMethod = paymentOptions.find((option) => option.id === paymentMethodId) ?? {
    id: "credit-debit",
    label: "Credit / Debit Card",
    methodKey: "creditCard",
  };
  const description =
    selectedMethod.id === "qris"
      ? QRIS_DESCRIPTION
      : `Selesaikan pembayaran menggunakan ${selectedMethod.label} yang kamu pilih.`;

  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Metode Pembayaran</Text>

      <View style={styles.card}>
        <View style={styles.header}>
          <MethodIcon name={selectedMethod.methodKey} size={38} />
          <Text style={styles.headerLabel}>{selectedMethod.label}</Text>
        </View>

        <View style={styles.divider} />

        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginHorizontal: 16,
    marginTop: 18,
  },
  title: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "800",
    color: "#0F2540",
  },
  card: {
    borderWidth: 1,
    borderColor: "#DDE3EA",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  headerLabel: {
    fontSize: 16,
    fontWeight: "800",
    color: "#111827",
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
  },
  description: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 13.5,
    lineHeight: 20,
    color: "#374151",
  },
});
