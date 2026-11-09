import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { formatRupiah } from "@/constants/ticket-sale-data";

type Props = {
  qty: number;
  total: number;
  onPay: () => void;
};

export default function DetailPaymentBottomBar({ qty, total, onPay }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrap, { paddingBottom: Math.max(insets.bottom, 10) + 8 }]}>
      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Total Keseluruhan ({qty} ticket)</Text>
        <Text style={styles.totalValue}>{formatRupiah(total)}</Text>
      </View>

      <Pressable
        onPress={onPay}
        accessibilityRole="button"
        accessibilityLabel="Bayar Sekarang"
        style={({ pressed }) => [styles.payBtn, pressed && styles.pressed]}
      >
        <Text style={styles.payText}>Bayar Sekarang</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#EEF0F3",
    paddingHorizontal: 16,
    paddingTop: 14,
  },
  totalRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  totalLabel: {
    fontSize: 13.5,
    color: "#6B7280",
  },
  totalValue: {
    fontSize: 18,
    fontWeight: "900",
    color: "#111827",
  },
  payBtn: {
    marginTop: 12,
    height: 56,
    borderRadius: 12,
    backgroundColor: "#0B5CFF",
    alignItems: "center",
    justifyContent: "center",
  },
  payText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  pressed: {
    opacity: 0.85,
  },
});
