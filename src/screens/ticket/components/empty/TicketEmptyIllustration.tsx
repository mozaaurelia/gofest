import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Circle, Ellipse, G, Path, Rect } from "react-native-svg";
import { gfColors } from "@/constants/gf-theme";
import GoFestMascot from "@/components/brand/gofest-mascot";

type Props = {
  width?: number;
  height?: number;
};

export default function TicketEmptyIllustration({ width = 340, height = 260 }: Props) {
  const mascotWidth = Math.min(width * 0.56, height * 0.76);

  return (
    <View style={[styles.wrap, { width, height }]}>
      <Svg width={width} height={height} viewBox="0 0 340 250" style={styles.backdrop}>
        <Ellipse cx={170} cy={132} rx={100} ry={105} fill="#FFFFFF" opacity={0.38} />
        <Ellipse cx={170} cy={240} rx={72} ry={8} fill={gfColors.brandBlueDark} opacity={0.16} />
        <Circle cx={72} cy={106} r={4} fill={gfColors.brandBlueLight} opacity={0.65} />
        <Circle cx={290} cy={127} r={3} fill={gfColors.brandBlueLight} opacity={0.55} />
        <G transform="rotate(-12 283 60)" opacity={0.9}>
          <Rect
            x={257}
            y={42}
            width={52}
            height={36}
            rx={7}
            fill="#FFFFFF"
            fillOpacity={0.8}
            stroke={gfColors.brandBlueLight}
            strokeWidth={2}
            strokeDasharray="4 4"
          />
          <Path
            d="M274 52 L292 68 M292 52 L274 68"
            stroke={gfColors.brandBlueLight}
            strokeWidth={2.5}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <GoFestMascot mood="sad" width={mascotWidth} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
  },
});
