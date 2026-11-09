import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { formatRupiah } from "@/constants/ticket-sale-data";

type Props = {
  category: string;
  qty: number;
  basePrice: number;
  localTax: number;
  adminFee: number;
  protection: number;
  platform: number;
  total: number;
};

function DetailRow({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <View style={styles.row}>
      <View style={styles.labelWrap}>
        <Text style={styles.label}>{label}</Text>
        {note ? <Text style={styles.note}>{note}</Text> : null}
      </View>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

export default function PaymentDetailSection({
  category,
  qty,
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

      <DetailRow label={`${category} (x${qty})`} value={formatRupiah(basePrice)} />
      <DetailRow label="Local Tax" value={formatRupiah(localTax)} />
      <DetailRow label="Biaya Admin" value={formatRupiah(adminFee)} />
      <DetailRow
        label="Proteksi Pembeli Tiket"
        note="(Tidak dapat dikembalikan)"
        value={formatRupiah(protection)}
      />
      <DetailRow label="Biaya Platform" note="(Tidak dapat dikembalikan)" value={formatRupiah(platform)} />

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
    marginTop: 26,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    color: "#0F2540",
    marginBottom: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
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
