import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { gfColors } from "../../constants/gf-theme";
import { BenefitGroup } from "../../constants/seat-map-data";
import SeatMapBulletItem from "./seat-map-bullet-item";

type SeatMapBenefitGroupProps = {
  group: BenefitGroup;
};

export default function SeatMapBenefitGroup({ group }: SeatMapBenefitGroupProps) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{group.title}</Text>
      <View style={styles.list}>
        {group.items.map((item) => (
          <SeatMapBulletItem key={item} text={item} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: 18,
  },
  title: {
    fontSize: 13.5,
    fontWeight: "700",
    color: gfColors.text,
  },
  list: {
    marginTop: 8,
  },
});
