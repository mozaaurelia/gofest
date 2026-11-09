import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ChevronRightIcon } from "./payment-icons";
import { formatRupiah } from "@/constants/ticket-sale-data";

type Props = {
  qty: number;
  total: number;
  onBack: () => void;
  onPay: () => void;
};

export default function PaymentBottomBar({ qty, total, onBack, onPay }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrap, { paddingBottom: Math.max(insets.bottom, 10) + 8 }]}>
      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Total Keseluruhan ({qty} ticket)</Text>
        <Text style={styles.totalValue}>{formatRupiah(total)}</Text>
      </View>

      <View style={styles.actions}>
        <Pressable
          onPress={onBack}
          accessibilityRole="button"
          accessibilityLabel="Kembali"
          style={({ pressed }) => [styles.backBtn, pressed && styles.pressed]}
        >
          <View style={styles.backIcon}>
            <ChevronRightIcon size={22} color="#111827" />
          </View>
        </Pressable>

        <Pressable
          onPress={onPay}
          accessibilityRole="button"
          accessibilityLabel="Bayar Sekarang"
          style={({ pressed }) => [styles.payBtn, pressed && styles.pressed]}
        >
          <Text style={styles.payText}>Bayar Sekarang</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#EEF0F3",
    paddingHorizontal: 16,
    paddingTop: 12,
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
    fontSize: 17,
    fontWeight: "900",
    color: "#111827",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 12,
  },
  backBtn: {
    width: 56,
    height: 56,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#DDE3EA",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {
    transform: [{ rotate: "180deg" }],
  },
  payBtn: {
    flex: 1,
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
