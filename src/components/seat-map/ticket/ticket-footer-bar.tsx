import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { formatRupiah } from "@/constants/ticket-sale-data";
import { useTranslation } from "@/context/language-context";

type Props = {
  totalQty: number;
  totalPrice: number;
  onPress: () => void;
};

export default function TicketFooterBar({ totalQty, totalPrice, onPress }: Props) {
  const { t } = useTranslation();
  return (
    <View style={styles.wrap}>
      <View style={styles.left}>
        <Text style={styles.qty}>
          {t("ticket.qty")} ({totalQty} {t("ticket.ticket")})
        </Text>
        <Text style={styles.price}>{formatRupiah(totalPrice)}</Text>
      </View>
      <Pressable onPress={onPress} style={({ pressed }) => [styles.btn, pressed && { opacity: 0.9 }]}>
        <Text style={styles.btnText}>{t("ticket.orderNow")}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E2E5EA",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 8,
  },
  left: { gap: 2 },
  qty: { fontSize: 12, color: "#9CA3AF", fontWeight: "500" },
  price: { fontSize: 16, fontWeight: "800", color: "#111827" },
  btn: {
    backgroundColor: "#2FA8C0",
    paddingHorizontal: 26,
    height: 44,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 160,
  },
  btnText: { color: "#FFFFFF", fontSize: 14, fontWeight: "700" },
});
