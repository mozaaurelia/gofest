import React from "react";
import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { formatRupiah } from "@/constants/ticket-sale-data";
import type { PaymentCustomer } from "@/constants/detail-payment-data";
import { CustomerIcon, TicketCheckIcon } from "./detail-payment-icons";

type Props = {
  eventTitle: string;
  eventDate: string;
  eventTime: string;
  eventAddress: string;
  image?: ImageSourcePropType;
  category: string;
  qty: number;
  price: number;
  customer: PaymentCustomer;
};

function CustomerField({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <Text style={styles.fieldValue}>{value}</Text>
    </View>
  );
}

export default function DetailPaymentTicketCard({
  eventTitle,
  eventDate,
  eventTime,
  eventAddress,
  image,
  category,
  qty,
  price,
  customer,
}: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.eventRow}>
        {image ? (
          <Image source={image} style={styles.thumb} contentFit="cover" transition={180} />
        ) : (
          <View style={[styles.thumb, styles.thumbFallback]}>
            <Text style={styles.thumbFallbackText}>{eventTitle.slice(0, 1).toUpperCase()}</Text>
          </View>
        )}

        <View style={styles.eventInfo}>
          <Text style={styles.eventTitle}>{eventTitle}</Text>
          <Text style={styles.eventMeta}>
            {eventDate} • {eventTime}
          </Text>
          <Text style={styles.eventMeta}>{eventAddress}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.ticketRow}>
        <TicketCheckIcon size={36} />
        <View style={styles.ticketInfo}>
          <Text style={styles.ticketCategory}>{category}</Text>
          <Text style={styles.ticketPrice}>
            {qty} ticket x {formatRupiah(price)}
          </Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.customerSection}>
        <View style={styles.customerHeader}>
          <CustomerIcon size={28} />
          <Text style={styles.customerTitle}>Data Pelanggan</Text>
        </View>

        <CustomerField label="Nama Lengkap" value={customer.name} />
        <CustomerField label="Email" value={customer.email} />
        <CustomerField label="No. Handphone" value={customer.phone} />
        <CustomerField label="Nomor Identitas (KTP/Passport,dll)" value={customer.identity} />
        <CustomerField label="Tanggal Lahir" value={customer.birthDate} />
        <CustomerField label="Jenis Kelamin" value={customer.gender} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginTop: 24,
    borderWidth: 1,
    borderColor: "#DDE3EA",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
  },
  eventRow: {
    flexDirection: "row",
    gap: 12,
    padding: 16,
  },
  thumb: {
    width: 64,
    height: 64,
    borderRadius: 6,
    backgroundColor: "#EEF0F3",
  },
  thumbFallback: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DCE7FF",
  },
  thumbFallbackText: {
    fontSize: 24,
    fontWeight: "900",
    color: "#0B5CFF",
  },
  eventInfo: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 17.5,
    fontWeight: "800",
    lineHeight: 23,
    color: "#111827",
  },
  eventMeta: {
    marginTop: 6,
    fontSize: 15.5,
    lineHeight: 22,
    color: "#374151",
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
  },
  ticketRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  ticketInfo: {
    flex: 1,
  },
  ticketCategory: {
    fontSize: 16.5,
    color: "#111827",
  },
  ticketPrice: {
    marginTop: 3,
    fontSize: 15,
    color: "#9CA3AF",
  },
  customerSection: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 6,
  },
  customerHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 16,
  },
  customerTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#111827",
  },
  field: {
    marginBottom: 14,
  },
  fieldLabel: {
    fontSize: 15,
    color: "#9CA3AF",
  },
  fieldValue: {
    marginTop: 4,
    fontSize: 16.5,
    color: "#1F2937",
  },
});
