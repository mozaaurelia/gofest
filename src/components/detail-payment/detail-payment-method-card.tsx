import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { QRIS_DESCRIPTION } from "@/constants/detail-payment-data";
import { QrisMark } from "./detail-payment-icons";

export default function DetailPaymentMethodCard() {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Metode Pembayaran</Text>

      <View style={styles.card}>
        <View style={styles.header}>
          <QrisMark size={46} />
          <Text style={styles.headerLabel}>QRIS</Text>
        </View>

        <View style={styles.divider} />

        <Text style={styles.description}>{QRIS_DESCRIPTION}</Text>
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
