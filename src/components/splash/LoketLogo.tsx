import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

type Props = {
  size?: number;
};

export default function LoketLogo({ size = 88 }: Props) {
  // viewBox 0 0 100 100, logo silver rounded square with L cutout + speech tail
  return (
    <View style={{ width: size, height: size, alignItems: "center", justifyContent: "center" }}>
      <Svg viewBox="0 0 100 100" width={size} height={size}>
        <Defs>
          <LinearGradient id="loketSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#EEF1F6" />
            <Stop offset="38%" stopColor="#D8DEE9" />
            <Stop offset="72%" stopColor="#C2CADB" />
            <Stop offset="100%" stopColor="#B8C2D6" />
          </LinearGradient>
        </Defs>

        {/* outer rounded square - silver */}
        <Path
          d="M14 18 C14 11.5 18.2 7.2 24.8 7.2 H44.6 L44.6 30.2 L60.2 30.2 L60.2 7.2 H75.2 C81.8 7.2 86 11.5 86 18 V75.2 C86 81.8 81.8 86 75.2 86 H24.8 C18.2 86 14 81.8 14 75.2 V18 Z"
          fill="url(#loketSilver)"
        />

        {/* speech tail - sharp point, same silver */}
        <Path d="M44.6 1 L44.6 26 L53.5 12 Z" fill="url(#loketSilver)" />

        {/* L cutout - navy hole */}
        <Path
          d="M33.2 18.5 V68.8 H69 V55.2 H46.8 V18.5 H33.2 Z"
          fill="#1B222D"
          opacity={1}
        />
        {/* inner L inner edge highlight subtle */}
        <Path
          d="M33.2 18.5 V68.8 H69 V55.2 H46.8 V18.5 H33.2 Z"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={0.6}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({});
