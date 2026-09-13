import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { gfColors } from "../../constants/gf-theme";
import { SEAT_BENEFITS, SEAT_MAP_COPY } from "../../constants/seat-map-data";
import SeatMapBenefitGroup from "./seat-map-benefit-group";

export default function SeatMapBenefitSection() {
  return (
    <View style={styles.wrap}>
      <Text style={styles.heading}>{SEAT_MAP_COPY.benefitTitle}</Text>

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
