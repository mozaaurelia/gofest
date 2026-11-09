import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { gfColors } from "@/constants/gf-theme";
import { useTranslation } from "@/context/language-context";
import BoardingPassBarcode from "./boarding-pass-barcode";

type Props = {
  code?: string;
  aircraft?: string;
  fromCode?: string;
  fromCity?: string;
  toCode?: string;
  toCity?: string;
  boardingTime?: string;
  departure?: string;
  arrival?: string;
  date?: string;
  clazz?: string;
  passenger?: string;
  terminal?: string;
  gate?: string;
  seat?: string;
};

export default function BoardingPassCard({
  code = "AB 4723211",
  aircraft = "gofest",
  fromCode = "CDG",
  fromCity = "Paris, France",
  toCode = "JFK",
  toCity = "New York, USA",
  boardingTime = "02:20 AM",
  departure = "03:00 AM",
  arrival = "11:15 AM",
  date = "March 12, Tue",
  clazz = "Economy",
  passenger = "John Sandler",
  terminal = "1",
  gate = "37",
  seat = "1C",
}: Props) {
  const { t } = useTranslation();
  return (
    <View style={styles.card}>
      {/* notches kiri kanan seperti contoh */}
      <View style={[styles.notch, styles.notchLeft]} />
      <View style={[styles.notch, styles.notchRight]} />

      <View style={styles.inner}>
        {/* top: code + aircraft */}
        <View style={styles.topRow}>
          <Text style={styles.code}>{code}</Text>
          <Text style={styles.aircraft}>{aircraft}</Text>
        </View>

        {/* route */}
        <View style={styles.routeRow}>
          <View style={styles.routeSide}>
            <Text style={styles.routeCode}>{fromCode}</Text>
            <Text style={styles.routeCity}>{fromCity}</Text>
          </View>
          <View style={styles.routeSideAlignRight}>
            <Text style={[styles.routeCode, styles.textRight]}>{toCode}</Text>
            <Text style={[styles.routeCity, styles.textRight]}>{toCity}</Text>
          </View>
        </View>

        {/* 3 columns */}
        <View style={styles.threeCol}>
          <View style={styles.col}>
            <Text style={styles.label}>{t("boarding.boardingTime")}</Text>
            <Text style={styles.value}>{boardingTime}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>{t("boarding.departure")}</Text>
            <Text style={styles.value}>{departure}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>{t("boarding.arrival")}</Text>
            <Text style={styles.value}>{arrival}</Text>
          </View>
        </View>

        {/* date / class */}
        <View style={styles.twoCol}>
          <View style={styles.col2}>
            <Text style={styles.label}>{t("boarding.date")}</Text>
            <Text style={styles.valueSmall}>{date}</Text>
          </View>
          <View style={styles.col2}>
            <Text style={styles.label}>{t("boarding.class")}</Text>
            <Text style={styles.valueSmall}>{clazz}</Text>
          </View>
        </View>

        {/* passenger */}
        <View style={styles.passengerBlock}>
          <Text style={styles.label}>{t("boarding.passenger")}</Text>
          <Text style={styles.passengerName}>{passenger}</Text>
        </View>

        {/* dashed line + barcode */}
        <View style={styles.dashedWrap}>
          <View style={styles.dashedLine} />
        </View>
        <BoardingPassBarcode />

        {/* footer terminal gate seat */}
        <View style={styles.footerRow}>
          <View style={styles.footerCol}>
            <Text style={styles.footerLabel}>{t("boarding.terminal")}</Text>
            <Text style={styles.footerValue}>{terminal}</Text>
          </View>
          <View style={styles.footerCol}>
            <Text style={styles.footerLabel}>{t("boarding.gate")}</Text>
            <Text style={styles.footerValue}>{gate}</Text>
          </View>
          <View style={styles.footerCol}>
            <Text style={styles.footerLabel}>{t("boarding.seat")}</Text>
            <Text style={styles.footerValue}>{seat}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    overflow: "hidden",
    marginHorizontal: 16,
    // shadow biar ngangkat dari background terang
    shadowColor: "#1A2E4D",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.24,
    shadowRadius: 16,
    elevation: 8,
    position: "relative",
  },
  notch: {
    position: "absolute",
    top: "68%",
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: gfColors.bg,
    zIndex: 2,
  },
  notchLeft: { left: -11 },
  notchRight: { right: -11 },
  inner: { paddingHorizontal: 20, paddingTop: 18, paddingBottom: 18 },
  topRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  code: { fontSize: 11, color: gfColors.textMuted, fontWeight: "600", letterSpacing: 0.4 },
  aircraft: { fontSize: 11, color: gfColors.textMuted, fontWeight: "700", letterSpacing: 0.3 },
  routeRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 18 },
  routeSide: { flex: 1 },
  routeSideAlignRight: { flex: 1, alignItems: "flex-end" },
  routeCode: { fontSize: 28, fontWeight: "800", color: gfColors.text, letterSpacing: 0.5 },
  routeCity: { fontSize: 11, color: gfColors.textMuted, marginTop: 2 },
  textRight: { textAlign: "right" },
  threeCol: { flexDirection: "row", justifyContent: "space-between", marginTop: 18, gap: 8 },
  col: { flex: 1 },
  twoCol: { flexDirection: "row", gap: 16, marginTop: 14 },
  col2: { flex: 1 },
  label: { fontSize: 11, color: gfColors.textMuted, fontWeight: "500" },
  value: { fontSize: 13, fontWeight: "800", color: gfColors.text, marginTop: 4 },
  valueSmall: { fontSize: 13, fontWeight: "700", color: gfColors.text, marginTop: 4 },
  passengerBlock: { marginTop: 14 },
  passengerName: { fontSize: 18, fontWeight: "800", color: gfColors.text, marginTop: 4 },
  dashedWrap: { marginTop: 18, marginBottom: 14, alignItems: "center" },
  dashedLine: {
    width: "100%",
    borderTopWidth: 1,
    borderColor: "#E2E5EA",
    borderStyle: "dashed",
  },
  footerRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 14 },
  footerCol: { flex: 1, alignItems: "center" },
  footerLabel: { fontSize: 11, color: gfColors.textMuted, fontWeight: "500" },
  footerValue: { fontSize: 22, fontWeight: "800", color: gfColors.text, marginTop: 4 },
});
