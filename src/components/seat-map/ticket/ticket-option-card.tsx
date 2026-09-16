import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { TicketSaleItem, formatRupiah } from "@/constants/ticket-sale-data";
import TicketQtyPicker from "./ticket-qty-picker";

type Props = {
  item: TicketSaleItem;
  qty: number;
  onChangeQty: (v: number) => void;
};

function Dot() {
  return <View style={styles.dot} />;
}

export default function TicketOptionCard({ item, qty, onChangeQty }: Props) {
  return (
    <View style={styles.card}>
      {/* notches left/right */}
      <View style={styles.notchLeft} />
      <View style={styles.notchRight} />

      <View style={styles.top}>
        <Text style={styles.category}>{item.category}</Text>

        <View style={styles.bullets}>
          {item.features.map((f, i) => (
            <View key={i} style={styles.bulletRow}>
              <Dot />
              <Text style={styles.bulletText}>{f}</Text>
            </View>
          ))}
        </View>

        <View style={styles.deadlineRow}>
          <Svg viewBox="0 0 24 24" width={14} height={14} fill="none">
            <Path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" fill="#2FA8C0" />
            <Path d="M12 7v5l3 2" stroke="#FFFFFF" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
          <Text style={styles.deadline}>{item.deadline}</Text>
        </View>
      </View>

      <View style={styles.dashed} />

      <View style={styles.bottom}>
        <Text style={styles.price}>{formatRupiah(item.price)}</Text>
        <TicketQtyPicker value={qty} onChange={onChangeQty} max={6} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E5EA",
    borderRadius: 12,
    overflow: "hidden",
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 14,
    position: "relative",
  },
  notchLeft: {
    position: "absolute",
    left: -10,
    top: "56%",
    marginTop: -10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#F0F2F4",
    borderWidth: 1,
    borderColor: "#E2E5EA",
  },
  notchRight: {
    position: "absolute",
    right: -10,
    top: "56%",
    marginTop: -10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#F0F2F4",
    borderWidth: 1,
    borderColor: "#E2E5EA",
  },
  top: { gap: 8 },
  category: { fontSize: 14, fontWeight: "700", color: "#111827" },
  bullets: { gap: 4, marginTop: 2 },
  bulletRow: { flexDirection: "row", alignItems: "flex-start", gap: 8 },
  dot: { width: 5, height: 5, borderRadius: 3, backgroundColor: "#111827", marginTop: 7 },
  bulletText: { flex: 1, fontSize: 13, color: "#374151", lineHeight: 18 },
  deadlineRow: { flexDirection: "row", alignItems: "center", gap: 6, marginTop: 4 },
  deadline: { fontSize: 12, color: "#2FA8C0", fontWeight: "500" },
  dashed: {
    marginTop: 14,
    borderTopWidth: 1,
    borderColor: "#E2E5EA",
    borderStyle: "dashed",
  },
  bottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 14,
  },
  price: { fontSize: 15, fontWeight: "800", color: "#111827" },
});
