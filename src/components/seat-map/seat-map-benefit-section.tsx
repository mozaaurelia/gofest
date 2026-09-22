import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { gfColors } from "../../constants/gf-theme";
import { SEAT_BENEFITS } from "../../constants/seat-map-data";
import { useTranslation } from "@/context/language-context";
import SeatMapBenefitGroup from "./seat-map-benefit-group";

export default function SeatMapBenefitSection() {
  const { t } = useTranslation();
  return (
    <View style={styles.wrap}>
      <Text style={styles.heading}>{t("seatmap.benefitTitle")}</Text>

      {SEAT_BENEFITS.map((group) => (
        <SeatMapBenefitGroup key={group.title} group={group} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 24,
    backgroundColor: gfColors.bg,
  },
  heading: {
    fontSize: 14,
    fontWeight: "800",
    color: gfColors.text,
    lineHeight: 20,
  },
});
