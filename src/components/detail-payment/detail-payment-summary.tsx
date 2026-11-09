import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { formatRupiah } from "@/constants/ticket-sale-data";

type Props = {
  basePrice: number;
  localTax: number;
  adminFee: number;
  protection: number;
  platform: number;
  total: number;
};

function SummaryRow({ label, value, note }: { label: string; value: number; note?: string }) {
  return (
    <View style={styles.row}>
      <View style={styles.labelWrap}>
        <Text style={styles.label}>{label}</Text>
        {note ? <Text style={styles.note}>{note}</Text> : null}
      </View>
      <Text style={styles.value}>{formatRupiah(value)}</Text>
    </View>
  );
}

export default function DetailPaymentSummary({
  basePrice,
  localTax,
  adminFee,
  protection,
  platform,
  total,
}: Props) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Detail Pembayaran</Text>

      <SummaryRow label="Harga tiket" value={basePrice} />
      <SummaryRow label="Local Tax" value={localTax} />
      <SummaryRow label="Biaya Admin" value={adminFee} />
      <SummaryRow
        label="Proteksi Pembeli Tiket"
        note="(Tidak dapat dikembalikan)"
        value={protection}
      />
      <SummaryRow label="Biaya Platform" note="(Tidak dapat dikembalikan)" value={platform} />

      <View style={styles.dashed} />

      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Total Keseluruhan</Text>
        <Text style={styles.totalValue}>{formatRupiah(total)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    marginBottom: 14,
    fontSize: 20,
    fontWeight: "800",
    color: "#0F2540",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    paddingVertical: 5,
  },
  labelWrap: {
    flex: 1,
  },
  label: {
    fontSize: 15.5,
    color: "#374151",
  },
  note: {
    marginTop: 1,
    fontSize: 13,
    color: "#6B7280",
  },
  value: {
    fontSize: 15.5,
    fontWeight: "600",
    color: "#111827",
    textAlign: "right",
  },
  dashed: {
    marginTop: 14,
    borderTopWidth: 1,
    borderTopColor: "#DDE3EA",
    borderStyle: "dashed",
  },
  totalRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
  },
  totalLabel: {
    fontSize: 19,
    fontWeight: "800",
    color: "#111827",
  },
  totalValue: {
    fontSize: 19,
    fontWeight: "900",
    color: "#111827",
  },
});
