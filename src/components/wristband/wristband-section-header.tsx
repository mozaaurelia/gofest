import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { gfColors } from "@/constants/gf-theme";
import Svg, { Rect, Circle } from "react-native-svg";

type Props = {
  title?: string;
};

function WristbandIllustration() {
  // small wristband icon like in reference (colorful stripes)
  return (
    <Svg viewBox="0 0 28 18" width={28} height={18}>
      <Rect x={2} y={7} width={24} height={6} rx={3} fill="#E2E5EA" stroke="#D1D5DB" strokeWidth={0.8} />
      <Rect x={4} y={7.5} width={3} height={5} rx={1} fill="#2FA8C0" />
      <Rect x={7.8} y={7.5} width={3} height={5} rx={1} fill="#FACC15" />
      <Rect x={11.6} y={7.5} width={3} height={5} rx={1} fill="#F43F5E" />
      <Rect x={15.4} y={7.5} width={3} height={5} rx={1} fill="#8B5CF6" />
      <Rect x={19.2} y={7.5} width={3} height={5} rx={1} fill="#22C55E" />
      <Circle cx={24} cy={10} r={1.2} fill="#FFFBEB" stroke="#9CA3AF" strokeWidth={0.5} />
    </Svg>
  );
}

export default function WristbandSectionHeader({ title = "Wristband Redemption" }: Props) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      <WristbandIllustration />
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
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 16,
    fontWeight: "800",
    color: gfColors.text,
  },
});
