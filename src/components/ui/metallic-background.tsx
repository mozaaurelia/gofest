import React, { useEffect } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { useAnimatedStyle, useSharedValue, interpolate, withRepeat, withTiming, Easing } from "react-native-reanimated";

// Base silk-metal: abu-putih terang dominan, 5-stop brushed dengan kontras specular jelas
const METALLIC_BASE = ["#F2F3F4", "#FFFFFF", "#DADCE0", "#FFFFFF", "#ECEEF0"] as const;
const METALLIC_BASE_STOPS = [0, 0.24, 0.48, 0.72, 1] as const;
const SILK_HORIZONTAL = ["rgba(255,255,255,0)", "rgba(255,255,255,0.92)", "rgba(255,255,255,0)"] as const;
const SILK_VERTICAL = ["rgba(255,255,255,0)", "rgba(255,255,255,0.52)", "rgba(255,255,255,0)"] as const;
const SWEEP_GRADIENT = ["rgba(255,255,255,0)", "rgba(255,255,255,0.88)", "rgba(255,255,255,0)"] as const;

type Props = {
  /** Optional extra style for root absolute fill wrapper */
  style?: any;
};

export default function MetallicBackground({ style }: Props) {
  const { width } = useWindowDimensions();
  const shimmer = useSharedValue(0);

  useEffect(() => {
    shimmer.value = withRepeat(withTiming(1, { duration: 2200, easing: Easing.inOut(Easing.ease) }), -1, true);
  }, []);

  const sweepStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: interpolate(shimmer.value, [0, 1], [-width * 0.9, width * 0.9]) },
      { skewX: "-14deg" },
    ],
    opacity: interpolate(shimmer.value, [0, 0.5, 1], [0.55, 1, 0.55]),
  }));

  const sweepStyle2 = useAnimatedStyle(() => ({
    transform: [
      { translateX: interpolate(shimmer.value, [0, 1], [width * 0.7, -width * 0.7]) },
      { skewX: "-14deg" },
    ],
    opacity: interpolate(shimmer.value, [0, 0.5, 1], [0.35, 0.65, 0.35]),
  }));

  const pulseStyle = useAnimatedStyle(() => ({
    opacity: interpolate(shimmer.value, [0, 1], [0.42, 0.68]),
  }));

  return (
    <View style={[StyleSheet.absoluteFill, style]} pointerEvents="none">
      {/* Layer 1 - base metalik silk diagonal */}
      <LinearGradient
        colors={METALLIC_BASE}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={METALLIC_BASE_STOPS as any}
        style={StyleSheet.absoluteFill}
      />

      {/* Layer 2 - silk sheen horizontal breathing */}
      <Animated.View style={[StyleSheet.absoluteFill, pulseStyle]}>
        <LinearGradient
          colors={SILK_HORIZONTAL}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          locations={[0, 0.46, 1]}
          style={StyleSheet.absoluteFill}
        />
      </Animated.View>

      {/* Layer 2b - brushed vertical */}
      <LinearGradient
        colors={SILK_VERTICAL}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        locations={[0, 0.5, 1]}
        style={[StyleSheet.absoluteFill, { opacity: 0.28 }]}
      />

      {/* Layer 3 - sweep shine diagonal hidup */}
      <Animated.View style={[styles.sweepWrap, sweepStyle]}>
        <LinearGradient
          colors={SWEEP_GRADIENT}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          locations={[0, 0.5, 1]}
          style={StyleSheet.absoluteFill}
        />
      </Animated.View>

      {/* Layer 3b - sweep kedua offset */}
      <Animated.View style={[styles.sweepWrapNarrow, sweepStyle2]}>
        <LinearGradient
          colors={["rgba(255,255,255,0)", "rgba(255,255,255,0.62)", "rgba(255,255,255,0)"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={StyleSheet.absoluteFill}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  sweepWrap: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: "62%",
  },
  sweepWrapNarrow: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    width: "42%",
  },
});
