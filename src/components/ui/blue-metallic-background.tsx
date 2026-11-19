import React, { useEffect } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import MetallicBackground from "./metallic-background";

// Biru metalik: dasar silk-metal abu-putih ditint biru brand Gofest,
// dengan kilau sweep yang bergerak seperti background halaman lain.
const BLUE_TINT = ["rgba(8,50,140,0.62)", "rgba(76,145,246,0.34)", "rgba(8,50,140,0.6)"] as const;
const BLUE_GLOW = ["rgba(120,175,255,0.2)", "rgba(120,175,255,0.42)", "rgba(120,175,255,0.2)"] as const;
const SWEEP = ["rgba(255,255,255,0)", "rgba(255,255,255,0.5)", "rgba(255,255,255,0)"] as const;

export default function BlueMetallicBackground() {
  const { width } = useWindowDimensions();
  const shimmer = useSharedValue(0);

  useEffect(() => {
    shimmer.value = withRepeat(withTiming(1, { duration: 3200, easing: Easing.inOut(Easing.ease) }), -1, true);
  }, [shimmer]);

  const sweepStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: interpolate(shimmer.value, [0, 1], [-width * 0.9, width * 0.9]) },
      { skewX: "-14deg" },
    ],
    opacity: interpolate(shimmer.value, [0, 0.5, 1], [0.35, 0.7, 0.35]),
  }));

  return (
    <View style={[StyleSheet.absoluteFill, styles.root]} pointerEvents="none">
      <MetallicBackground />
      <LinearGradient
        colors={BLUE_TINT}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.5, 1]}
        style={StyleSheet.absoluteFill}
      />
      <LinearGradient
        colors={BLUE_GLOW}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        locations={[0, 0.45, 1]}
        style={[StyleSheet.absoluteFill, styles.glow]}
      />
      <Animated.View style={[styles.sweepWrap, sweepStyle]}>
        <LinearGradient
          colors={SWEEP}
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
    backgroundColor: "#8FB8F5",
    overflow: "hidden",
  },
  glow: {
    opacity: 0.9,
  },
  sweepWrap: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: "55%",
  },
});
