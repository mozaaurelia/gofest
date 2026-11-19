import React, { useEffect } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";
import Svg, { Defs, LinearGradient, RadialGradient, Rect, Stop } from "react-native-svg";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

// Palet biru metalik brand Gofest, dibuat pastel dan transparan di atas
// dasar terang agar tetap clean, tipis, dan elegan seperti versi sebelumnya.
const SHEEN = ["rgba(255,255,255,0)", "rgba(255,255,255,0.72)", "rgba(255,255,255,0)"] as const;
const BRUSHED = ["rgba(255,255,255,0)", "rgba(255,255,255,0.5)", "rgba(255,255,255,0)"] as const;
const BLUE_METAL = ["rgba(18,99,228,0.07)", "rgba(255,255,255,0)", "rgba(143,184,245,0.12)"] as const;

export default function OnboardingBackground() {
  const { width, height } = useWindowDimensions();
  const shimmer = useSharedValue(0);

  useEffect(() => {
    shimmer.value = withRepeat(withTiming(1, { duration: 7200, easing: Easing.inOut(Easing.ease) }), -1, true);
  }, [shimmer]);

  const sweepStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: interpolate(shimmer.value, [0, 1], [-width * 0.9, width * 0.9]) },
      { skewX: "-16deg" },
    ],
    opacity: interpolate(shimmer.value, [0, 0.5, 1], [0.2, 0.5, 0.2]),
  }));

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <Svg width={width} height={height} style={StyleSheet.absoluteFill}>
        <Defs>
          <LinearGradient id="onboardingBase" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#F7FBFF" />
            <Stop offset="0.5" stopColor="#EDF5FF" />
            <Stop offset="1" stopColor="#F3F9FF" />
          </LinearGradient>

          <RadialGradient id="onboardingBlue" cx={0.5} cy={0.5} r={0.5}>
            <Stop offset="0" stopColor="#5A9BFF" stopOpacity={0.26} />
            <Stop offset="1" stopColor="#5A9BFF" stopOpacity={0} />
          </RadialGradient>

          <RadialGradient id="onboardingSky" cx={0.5} cy={0.5} r={0.5}>
            <Stop offset="0" stopColor="#8FB8F5" stopOpacity={0.34} />
            <Stop offset="1" stopColor="#8FB8F5" stopOpacity={0} />
          </RadialGradient>

          <RadialGradient id="onboardingIce" cx={0.5} cy={0.5} r={0.5}>
            <Stop offset="0" stopColor="#BBDCFF" stopOpacity={0.36} />
            <Stop offset="1" stopColor="#BBDCFF" stopOpacity={0} />
          </RadialGradient>

          <RadialGradient id="onboardingDeep" cx={0.5} cy={0.5} r={0.5}>
            <Stop offset="0" stopColor="#3B82F6" stopOpacity={0.2} />
            <Stop offset="1" stopColor="#3B82F6" stopOpacity={0} />
          </RadialGradient>
        </Defs>

        <Rect width="100%" height="100%" fill="url(#onboardingBase)" />
        <Rect x={-width * 0.32} y={-height * 0.08} width={width * 0.95} height={height * 0.5} fill="url(#onboardingBlue)" />
        <Rect x={width * 0.38} y={-height * 0.06} width={width * 0.9} height={height * 0.46} fill="url(#onboardingSky)" />
        <Rect x={width * 0.3} y={height * 0.54} width={width * 0.9} height={height * 0.55} fill="url(#onboardingIce)" />
        <Rect x={-width * 0.25} y={height * 0.66} width={width * 0.8} height={height * 0.44} fill="url(#onboardingDeep)" />
      </Svg>

      {/* Tint biru metalik tipis */}
      <ExpoLinearGradient
        colors={BLUE_METAL}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.55, 1]}
        style={StyleSheet.absoluteFill}
      />

      {/* Silk metal diagonal statis */}
      <ExpoLinearGradient
        colors={BRUSHED}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.5, 1]}
        style={[StyleSheet.absoluteFill, styles.brushed]}
      />

      {/* Kilau sweep diagonal yang bergerak perlahan */}
      <Animated.View style={[styles.sweepWrap, sweepStyle]}>
        <ExpoLinearGradient
          colors={SHEEN}
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
  brushed: {
    opacity: 0.6,
  },
  sweepWrap: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: "45%",
  },
});
