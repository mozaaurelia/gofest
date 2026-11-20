import React from "react";
import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { formatRupiah } from "@/constants/ticket-sale-data";
import type { PaymentCustomer } from "@/constants/detail-payment-data";
import { gfColors } from "@/constants/gf-theme";
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
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#DDE3EA",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
  },
  eventRow: {
    flexDirection: "row",
    gap: 10,
    padding: 12,
  },
  thumb: {
    width: 58,
    height: 58,
    borderRadius: 6,
    backgroundColor: "#EEF0F3",
  },
  thumbFallback: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DCE7FF",
  },
  thumbFallbackText: {
    fontSize: 20,
    fontWeight: "900",
    color: gfColors.brandBlue,
  },
  eventInfo: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 15,
    fontWeight: "800",
    lineHeight: 20,
    color: "#111827",
  },
  eventMeta: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 18,
    color: "#374151",
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
  },
  ticketRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  ticketInfo: {
    flex: 1,
  },
  ticketCategory: {
    fontSize: 15,
    color: "#111827",
  },
  ticketPrice: {
    marginTop: 3,
    fontSize: 13.5,
    color: "#9CA3AF",
  },
  customerSection: {
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 4,
  },
  customerHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },
  customerTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#111827",
  },
  field: {
    marginBottom: 10,
  },
  fieldLabel: {
    fontSize: 12.5,
    color: "#9CA3AF",
  },
  fieldValue: {
    marginTop: 3,
    fontSize: 14.5,
    color: "#1F2937",
  },
});
