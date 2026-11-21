import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useTranslation } from "@/context/language-context";
import BoardingPassBarcode from "./boarding-pass-barcode";

type Props = {
  eventTitle: string;
  venue: string;
  date: string;
  category: string;
  quantity: number | null;
  passenger: string;
};

export default function BoardingPassCard({
  eventTitle,
  venue,
  date,
  category,
  quantity,
  passenger,
}: Props) {
  const { t } = useTranslation();
  return (
    <View style={styles.card}>
      <View style={styles.topBand}>
        <Text style={styles.category} numberOfLines={2}>{category}</Text>
        <Svg viewBox="0 0 24 24" width={24} height={24} fill="none">
          <Path d="M4.5 7.5h15v9h-15z" stroke="#7D350C" strokeWidth={1.8} strokeLinejoin="round" />
          <Path d="M8 10h8M8 14h5" stroke="#7D350C" strokeWidth={1.8} strokeLinecap="round" />
          <Path d="M7 4.5v3M17 16.5v3" stroke="#7D350C" strokeWidth={1.8} strokeLinecap="round" />
        </Svg>
      </View>
      <View style={styles.eventSection}>
        <Text style={styles.eventTitle} numberOfLines={2}>{eventTitle}</Text>
        <View style={styles.venuePill}>
          <Text style={styles.venue} numberOfLines={2}>{venue || t("boarding.eventUnavailable")}</Text>
        </View>
      </View>

      <View style={styles.dashedLine} />

      <View style={styles.detailsRow}>
        <View style={styles.detail}>
          <Text style={styles.label}>{t("boarding.date")}</Text>
          <Text style={styles.value} numberOfLines={2}>{date || "—"}</Text>
        </View>
        <View style={styles.detailDivider} />
        <View style={styles.detail}>
          <Text style={styles.label}>{t("boarding.ticketQty")}</Text>
          <Text style={styles.value}>{quantity ?? "—"}</Text>
        </View>
      </View>

      <View style={styles.dashedLine} />

      <View style={styles.ticketSection}>
        <Text style={styles.ticketLabel}>{t("boarding.passenger")}</Text>
        <Text style={styles.passenger}>{passenger}</Text>
        <BoardingPassBarcode />
        <Text style={styles.entryNote}>{t("boarding.entryNote")}</Text>
      </View>

      <View style={styles.bottomBand}>
        <View style={styles.bottomLabel}>
          <Svg viewBox="0 0 24 24" width={17} height={17} fill="none">
            <Path d="M12 3.5 19 6v5.5c0 4.1-2.8 7.3-7 9-4.2-1.7-7-4.9-7-9V6l7-2.5Z" stroke="#7D350C" strokeWidth={1.8} strokeLinejoin="round" />
            <Path d="m9 11.5 2 2 4-4" stroke="#7D350C" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
          <Text style={styles.bottomText}>{t("boarding.footer")}</Text>
        </View>
        <Text style={styles.brand}>goFest!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    overflow: "hidden",
    marginHorizontal: 16,
    shadowColor: "#6A341B",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.18,
    shadowRadius: 14,
    elevation: 6,
  },
  topBand: {
    minHeight: 58,
    paddingHorizontal: 20,
    paddingVertical: 13,
    backgroundColor: "#F87528",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  category: { flex: 1, marginRight: 12, color: "#7D350C", fontSize: 16, fontWeight: "800" },
  eventSection: { alignItems: "center", paddingHorizontal: 18, paddingTop: 24, paddingBottom: 20 },
  eventTitle: { color: "#171717", fontSize: 21, fontWeight: "900", textAlign: "center" },
  venuePill: {
    maxWidth: "100%",
    marginTop: 14,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 18,
    backgroundColor: "#F3F4F6",
  },
  venue: { color: "#4B5563", fontSize: 13, fontWeight: "600", textAlign: "center" },
  dashedLine: {
    marginHorizontal: 18,
    borderTopWidth: 1,
    borderColor: "#E5E7EB",
    borderStyle: "dashed",
  },
  detailsRow: { minHeight: 92, flexDirection: "row", alignItems: "center", paddingVertical: 14 },
  detail: { flex: 1, alignItems: "center", paddingHorizontal: 10 },
  detailDivider: { width: 1, height: 56, backgroundColor: "#E5E7EB" },
  label: { color: "#9CA3AF", fontSize: 12, fontWeight: "600", textTransform: "uppercase" },
  value: { marginTop: 6, color: "#171717", fontSize: 17, fontWeight: "800", textAlign: "center" },
  ticketSection: { alignItems: "center", paddingHorizontal: 16, paddingTop: 18, paddingBottom: 16 },
  ticketLabel: { color: "#9CA3AF", fontSize: 12, fontWeight: "600", textTransform: "uppercase" },
  passenger: { marginTop: 4, color: "#171717", fontSize: 16, fontWeight: "800", textAlign: "center" },
  entryNote: { marginTop: 10, color: "#9CA3AF", fontSize: 12, textAlign: "center" },
  bottomBand: {
    minHeight: 50,
    paddingHorizontal: 16,
    backgroundColor: "#F87528",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomLabel: { flexDirection: "row", alignItems: "center", gap: 6 },
  bottomText: { color: "#7D350C", fontSize: 12, fontWeight: "800" },
  brand: { color: "#7D350C", fontSize: 15, fontWeight: "900", letterSpacing: 0.5 },
});
