import React from "react";
import { View } from "react-native";
import Svg, { Circle, Path, Rect } from "react-native-svg";

export function MozaAvatarCircle({ size = 80 }: { size?: number }) {
  return (
    <View style={{ width: size, height: size, borderRadius: size / 2, overflow: "hidden", backgroundColor: "#FFF7ED" }}>
      <Svg viewBox="0 0 80 80" width={size} height={size}>
        <Rect x={0} y={0} width={80} height={80} rx={40} fill="#FB923C" />
        <Path d="M24 12 L32 2 L40 12 Z" fill="#FB923C" />
        <Path d="M48 12 L56 2 L64 12 Z" fill="#FB923C" />
        <Circle cx={28} cy={38} r={14} fill="#FFFFFF" />
        <Circle cx={52} cy={38} r={14} fill="#FFFFFF" />
        <Circle cx={28} cy={42} r={4} fill="#111827" />
        <Circle cx={52} cy={42} r={4} fill="#111827" />
        <Circle cx={26} cy={38} r={1.8} fill="#FFFFFF" />
        <Circle cx={50} cy={38} r={1.8} fill="#FFFFFF" />
        <Path d="M30 56 Q40 62 50 56" stroke="#111827" strokeWidth={2} fill="none" strokeLinecap="round" />
      </Svg>
    </View>
  );
}
