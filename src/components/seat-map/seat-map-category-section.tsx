import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { gfColors } from "../../constants/gf-theme";
import { SEAT_CATEGORIES, SEAT_MAP_COPY } from "../../constants/seat-map-data";
import SeatMapBulletItem from "./seat-map-bullet-item";

export default function SeatMapCategorySection() {
  return (
    <View style={styles.wrap}>
      <Text style={styles.heading}>{SEAT_MAP_COPY.categoryTitle}</Text>
      <Text style={styles.sub}>{SEAT_MAP_COPY.categorySubtitle}</Text>

      <View style={styles.list}>
        {SEAT_CATEGORIES.map((cat) => (
          <SeatMapBulletItem key={cat.label} text={cat.label} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 4,
    backgroundColor: gfColors.bg,
  },
  heading: {
    fontSize: 14,
    fontWeight: "800",
    color: gfColors.text,
  },
  sub: {
    fontSize: 13,
    color: "#6B7683",
    marginTop: 6,
    lineHeight: 18,
  },
  list: {
    marginTop: 10,
  },
});
