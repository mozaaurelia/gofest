import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import Svg, { Defs, LinearGradient, RadialGradient, Rect, Stop } from "react-native-svg";

export default function MenuBackground() {
  const { width, height } = useWindowDimensions();

  return (
    <Svg width={width} height={height} style={StyleSheet.absoluteFill} pointerEvents="none">
      <Defs>
        <LinearGradient id="base" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#F4F3F4" />
          <Stop offset="0.48" stopColor="#E9EAED" />
          <Stop offset="1" stopColor="#F6F6F7" />
        </LinearGradient>

        <RadialGradient id="pinkGlow" cx={0.5} cy={0.5} r={0.5}>
          <Stop offset="0" stopColor="#F2B8C2" stopOpacity={0.75} />
          <Stop offset="1" stopColor="#F2B8C2" stopOpacity={0} />
        </RadialGradient>

        <RadialGradient id="yellowGlow" cx={0.5} cy={0.5} r={0.5}>
          <Stop offset="0" stopColor="#F3D06B" stopOpacity={0.55} />
          <Stop offset="1" stopColor="#F3D06B" stopOpacity={0} />
        </RadialGradient>

        <RadialGradient id="blueGlow" cx={0.5} cy={0.5} r={0.5}>
          <Stop offset="0" stopColor="#A8C8DC" stopOpacity={0.5} />
          <Stop offset="1" stopColor="#A8C8DC" stopOpacity={0} />
        </RadialGradient>

        <RadialGradient id="warmGlow" cx={0.5} cy={0.5} r={0.5}>
          <Stop offset="0" stopColor="#D9BCA9" stopOpacity={0.4} />
          <Stop offset="1" stopColor="#D9BCA9" stopOpacity={0} />
        </RadialGradient>
      </Defs>

      <Rect width="100%" height="100%" fill="url(#base)" />
      <Rect x={-width * 0.32} y={-height * 0.08} width={width * 0.95} height={height * 0.48} fill="url(#pinkGlow)" />
      <Rect x={width * 0.38} y={-height * 0.06} width={width * 0.9} height={height * 0.44} fill="url(#yellowGlow)" />
      <Rect x={width * 0.3} y={height * 0.55} width={width * 0.9} height={height * 0.55} fill="url(#blueGlow)" />
      <Rect x={-width * 0.25} y={height * 0.68} width={width * 0.8} height={height * 0.4} fill="url(#warmGlow)" />
    </Svg>
  );
}
