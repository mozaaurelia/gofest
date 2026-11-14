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

// Palet diturunkan dari gradasi tombol NEXT (teal -> lime), dibuat pastel
// dan transparan di atas dasar terang agar tetap clean dan elegan.
const SHEEN = ["rgba(255,255,255,0)", "rgba(255,255,255,0.7)", "rgba(255,255,255,0)"] as const;
const BRUSHED = ["rgba(255,255,255,0)", "rgba(255,255,255,0.55)", "rgba(255,255,255,0)"] as const;

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
            <Stop offset="0" stopColor="#FBFDFC" />
            <Stop offset="0.5" stopColor="#F4F9F8" />
            <Stop offset="1" stopColor="#F8FBF1" />
          </LinearGradient>

          <RadialGradient id="onboardingTeal" cx={0.5} cy={0.5} r={0.5}>
            <Stop offset="0" stopColor="#9BD6E0" stopOpacity={0.55} />
            <Stop offset="1" stopColor="#9BD6E0" stopOpacity={0} />
          </RadialGradient>

          <RadialGradient id="onboardingLime" cx={0.5} cy={0.5} r={0.5}>
            <Stop offset="0" stopColor="#D6EDB8" stopOpacity={0.55} />
            <Stop offset="1" stopColor="#D6EDB8" stopOpacity={0} />
          </RadialGradient>

          <RadialGradient id="onboardingAqua" cx={0.5} cy={0.5} r={0.5}>
            <Stop offset="0" stopColor="#BDE9F1" stopOpacity={0.45} />
            <Stop offset="1" stopColor="#BDE9F1" stopOpacity={0} />
          </RadialGradient>

          <RadialGradient id="onboardingMint" cx={0.5} cy={0.5} r={0.5}>
            <Stop offset="0" stopColor="#C6EAD3" stopOpacity={0.45} />
            <Stop offset="1" stopColor="#C6EAD3" stopOpacity={0} />
          </RadialGradient>
        </Defs>

        <Rect width="100%" height="100%" fill="url(#onboardingBase)" />
        <Rect x={-width * 0.32} y={-height * 0.08} width={width * 0.95} height={height * 0.5} fill="url(#onboardingTeal)" />
        <Rect x={width * 0.38} y={-height * 0.06} width={width * 0.9} height={height * 0.46} fill="url(#onboardingLime)" />
        <Rect x={width * 0.3} y={height * 0.54} width={width * 0.9} height={height * 0.55} fill="url(#onboardingAqua)" />
        <Rect x={-width * 0.25} y={height * 0.66} width={width * 0.8} height={height * 0.44} fill="url(#onboardingMint)" />
      </Svg>

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
