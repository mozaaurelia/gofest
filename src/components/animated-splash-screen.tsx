import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  withSequence,
  Easing,
  runOnJS,
} from "react-native-reanimated";
import TicketIcon from "./ticket-icon";

type AnimatedSplashScreenProps = {
  onFinish: () => void;
};

const EASE_OUT = Easing.out(Easing.cubic);

export default function AnimatedSplashScreen({ onFinish }: AnimatedSplashScreenProps) {
  const bgOpacity = useSharedValue(0);
  const logoScale = useSharedValue(0.5);
  const logoOpacity = useSharedValue(0);
  const wordmarkOpacity = useSharedValue(0);
  const wordmarkTranslateY = useSharedValue(8);
  const exitOpacity = useSharedValue(1);
  const exitScale = useSharedValue(1);

  useEffect(() => {
    // 0-300ms: background fade in
    bgOpacity.value = withTiming(1, { duration: 300, easing: Easing.linear });

    // 300-900ms: logo scale kecil -> normal, ease-out
    // 900-1400ms: settle dengan subtle overshoot (1 -> 1.03 -> 1), BUKAN bounce
    logoOpacity.value = withDelay(300, withTiming(1, { duration: 250, easing: EASE_OUT }));
    logoScale.value = withDelay(
      300,
      withSequence(
        withTiming(1, { duration: 600, easing: EASE_OUT }), // 300-900ms: kecil -> normal
        withTiming(1.03, { duration: 250, easing: Easing.out(Easing.quad) }), // overshoot halus
        withTiming(1, { duration: 250, easing: Easing.inOut(Easing.quad) }) // settle balik
      )
    );

    // Wordmark muncul pas fase settle, kelar sebelum hold branding moment (900-1400ms)
    wordmarkOpacity.value = withDelay(950, withTiming(1, { duration: 350, easing: EASE_OUT }));
    wordmarkTranslateY.value = withDelay(950, withTiming(0, { duration: 350, easing: EASE_OUT }));

    // 1900-2200ms: fade + scale-out, lalu onFinish
    exitOpacity.value = withDelay(
      1900,
      withTiming(0, { duration: 300, easing: Easing.in(Easing.cubic) }, (finished) => {
        if (finished) runOnJS(onFinish)();
      })
    );
    exitScale.value = withDelay(1900, withTiming(0.94, { duration: 300, easing: Easing.in(Easing.cubic) }));
  }, []);

  const containerStyle = useAnimatedStyle(() => ({
    opacity: bgOpacity.value * exitOpacity.value,
  }));

  const logoStyle = useAnimatedStyle(() => ({
    opacity: logoOpacity.value,
    transform: [{ scale: logoScale.value * exitScale.value }],
  }));

  const wordmarkStyle = useAnimatedStyle(() => ({
    opacity: wordmarkOpacity.value,
    transform: [{ translateY: wordmarkTranslateY.value }, { scale: exitScale.value }],
  }));

  return (
    <Animated.View style={[styles.container, containerStyle]}>
      <Animated.View style={logoStyle}>
        <TicketIcon size={64} />
      </Animated.View>
      <Animated.Text style={[styles.wordmark, wordmarkStyle]}>Go fest!</Animated.Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B222D",
    alignItems: "center",
    justifyContent: "center",
  },
  wordmark: {
    marginTop: 20,
    fontSize: 26,
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: 0.2,
  },
});