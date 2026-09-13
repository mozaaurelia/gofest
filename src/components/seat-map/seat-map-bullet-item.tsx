import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { gfColors } from "../../constants/gf-theme";

type SeatMapBulletItemProps = {
  text: string;
};

export default function SeatMapBulletItem({ text }: SeatMapBulletItemProps) {
  return (
    <View style={styles.row}>
      <View style={styles.dot} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    paddingVertical: 3,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: gfColors.text,
    marginTop: 7,
  },
  text: {
    flex: 1,
    fontSize: 13.5,
    lineHeight: 20,
    color: "#4B5563",
  },
});
