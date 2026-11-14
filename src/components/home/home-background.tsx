import React, { useEffect } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import MetallicBackground from "../ui/metallic-background";

// Pertahankan dasar slate/cool gray-blue homepage, lalu tambahkan aura pastel
// dan silk sheen seperti gradasi halus di halaman menu.
const SCRIM_COLOR = "#6E7076";
const SCRIM_OPACITY = 0.48;
const BRUSHED_SHEEN = ["rgba(255,255,255,0)", "rgba(255,255,255,0.16)", "rgba(255,255,255,0)"] as const;
const SWEEP_SHEEN = ["rgba(255,255,255,0)", "rgba(255,255,255,0.24)", "rgba(255,255,255,0)"] as const;

export default function HomeBackground() {
  const { width, height } = useWindowDimensions();
  const shimmer = useSharedValue(0);

  useEffect(() => {
    shimmer.value = withRepeat(withTiming(1, { duration: 6800, easing: Easing.inOut(Easing.ease) }), -1, true);
  }, [shimmer]);

  const sweepStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: interpolate(shimmer.value, [0, 1], [-width * 0.85, width * 0.85]) },
      { skewX: "-16deg" },
    ],
    opacity: interpolate(shimmer.value, [0, 0.5, 1], [0.3, 0.7, 0.3]),
  }));

  return (
    <View style={[StyleSheet.absoluteFill, styles.root]} pointerEvents="none">
      {/* Dasar metalik + scrim slate yang sudah dipakai homepage */}
      <MetallicBackground />
      <View style={[StyleSheet.absoluteFill, styles.scrim]} />

      {/* Aura iridescent lembut, mengikuti komposisi glow halaman menu */}
      <Svg width={width} height={height} style={StyleSheet.absoluteFill}>
        <Defs>
          <RadialGradient id="homeBlush" cx={0.5} cy={0.5} r={0.5}>
            <Stop offset="0" stopColor="#F2B8C2" stopOpacity={0.34} />
            <Stop offset="1" stopColor="#F2B8C2" stopOpacity={0} />
          </RadialGradient>

          <RadialGradient id="homeGold" cx={0.5} cy={0.5} r={0.5}>
            <Stop offset="0" stopColor="#F3D06B" stopOpacity={0.2} />
            <Stop offset="1" stopColor="#F3D06B" stopOpacity={0} />
          </RadialGradient>

          <RadialGradient id="homeIris" cx={0.5} cy={0.5} r={0.5}>
            <Stop offset="0" stopColor="#C5B8EC" stopOpacity={0.28} />
            <Stop offset="1" stopColor="#C5B8EC" stopOpacity={0} />
          </RadialGradient>

          <RadialGradient id="homeBlue" cx={0.5} cy={0.5} r={0.5}>
            <Stop offset="0" stopColor="#A8C8DC" stopOpacity={0.38} />
            <Stop offset="1" stopColor="#A8C8DC" stopOpacity={0} />
          </RadialGradient>

          <RadialGradient id="homeWarm" cx={0.5} cy={0.5} r={0.5}>
            <Stop offset="0" stopColor="#D9BCA9" stopOpacity={0.24} />
            <Stop offset="1" stopColor="#D9BCA9" stopOpacity={0} />
          </RadialGradient>
        </Defs>

        <Rect x={-width * 0.34} y={-height * 0.1} width={width * 0.95} height={height * 0.5} fill="url(#homeBlush)" />
        <Rect x={width * 0.38} y={-height * 0.08} width={width * 0.9} height={height * 0.46} fill="url(#homeGold)" />
        <Rect x={-width * 0.08} y={height * 0.18} width={width * 0.85} height={height * 0.52} fill="url(#homeIris)" />
        <Rect x={width * 0.28} y={height * 0.54} width={width * 0.95} height={height * 0.55} fill="url(#homeBlue)" />
        <Rect x={-width * 0.26} y={height * 0.66} width={width * 0.85} height={height * 0.44} fill="url(#homeWarm)" />
      </Svg>

      {/* Silk metal diagonal statis */}
      <ExpoLinearGradient
        colors={BRUSHED_SHEEN}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.48, 1]}
        style={[StyleSheet.absoluteFill, styles.brushed]}
      />

      {/* Kilau sweep diagonal yang bergerak perlahan */}
      <Animated.View style={[styles.sweepWrap, sweepStyle]}>
        <ExpoLinearGradient
          colors={SWEEP_SHEEN}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          locations={[0, 0.5, 1]}
          style={StyleSheet.absoluteFill}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    overflow: "hidden",
  },
  scrim: {
    backgroundColor: SCRIM_COLOR,
    opacity: SCRIM_OPACITY,
  },
  brushed: {
    opacity: 0.55,
  },
  sweepWrap: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: "42%",
  },
});
