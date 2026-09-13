import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";
import { gfColors } from "../../constants/gf-theme";

type SeatMapSectionHeaderProps = {
  title: string;
};

export default function SeatMapSectionHeader({ title }: SeatMapSectionHeaderProps) {
  return (
    <View style={styles.row}>
      <View style={styles.left}>
        <View style={styles.bar} />
        <Text style={styles.title}>{title}</Text>
      </View>

      <Svg viewBox="0 0 24 24" width={22} height={22} fill="none">
        <Path
          d="M12 21s-6.5-5.9-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.1-6.5 11-6.5 11Z"
          stroke="#2563EB"
          strokeWidth={1.8}
          fill="#2563EB"
          fillOpacity={0.9}
        />
        <Circle cx="12" cy="10" r="2.2" fill="#FFFFFF" />
        <Circle cx="12" cy="10" r="2.2" stroke="#FFFFFF" strokeWidth={1} />
        <Path d="M12 19c1.2 1.2 2.5 1.8 3.8 1.2l-1-2.5" stroke="#F59E0B" strokeWidth={1.6} strokeLinecap="round" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: gfColors.bg,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  bar: {
    width: 4,
    height: 22,
    borderRadius: 99,
    backgroundColor: "#1D4ED8",
  },
  title: {
    fontSize: 16,
    fontWeight: "800",
    color: gfColors.text,
  },
});
