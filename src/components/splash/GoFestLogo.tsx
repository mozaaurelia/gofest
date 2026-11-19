import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Circle, ClipPath, Defs, G, LinearGradient, Path, Rect, Stop } from "react-native-svg";

type Props = {
  size?: number;
};

export default function GoFestLogo({ size = 96 }: Props) {
  return (
    <View style={[styles.wrap, { width: size, height: size }]}>
      <Svg viewBox="0 0 120 120" width={size} height={size} fill="none">
        <Defs>
          <LinearGradient id="goFestCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#1263E4" />
            <Stop offset="55%" stopColor="#2374F0" />
            <Stop offset="100%" stopColor="#3B82F6" />
          </LinearGradient>
          <ClipPath id="goFestCardClip">
            <Rect x="20" y="10" width="82" height="98" rx="30" />
          </ClipPath>
        </Defs>

        <G transform="rotate(-10 60 60)">
          {/* kartu tiket biru */}
          <Rect x="20" y="10" width="82" height="98" rx="30" fill="url(#goFestCardGrad)" />

          {/* lipatan biru muda di kanan bawah */}
          <G clipPath="url(#goFestCardClip)">
            <Path d="M 0 96 C 30 102 60 92 92 58 L 110 120 L 0 120 Z" fill="#4A8CF7" />
            <Path d="M -5 120 C 25 108 55 98 105 62 L 120 120 Z" fill="#6AA5FA" opacity={0.35} />
          </G>

          {/* sobekan tiket di sisi kiri */}
          <Circle cx="21" cy="59" r="9" fill="#FFFFFF" />

          {/* huruf G putih */}
          <Path
            d="M 69.9 41.5 A 21 21 0 1 0 81 60 L 57 60"
            stroke="#FFFFFF"
            strokeWidth={13}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: "center",
    justifyContent: "center",
  },
});
