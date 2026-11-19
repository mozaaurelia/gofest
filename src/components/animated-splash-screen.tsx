import React from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import GoFestLogo from "./splash/GoFestLogo";
import GoFestWordmark from "./splash/GoFestWordmark";
import GoFestSplashBackground from "./splash/GoFestSplashBackground";
import { useGoFestSplashAnimation } from "./splash/useGoFestSplashAnimation";

type AnimatedSplashScreenProps = {
  onFinish: () => void;
};

export default function AnimatedSplashScreen({ onFinish }: AnimatedSplashScreenProps) {
  const { width } = useWindowDimensions();
  const { bgOpacity, logoOpacity, logoScale, wordmarkOpacity, wordmarkTranslateY, exitOpacity, exitScale } =
    useGoFestSplashAnimation(onFinish);

  const markSize = Math.min(96, Math.max(64, width * 0.25));
  const wordmarkSize = Math.round(markSize * 0.72);
  const gap = Math.round(markSize * 0.18);

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
    <Animated.View style={[styles.root, containerStyle]}>
      <GoFestSplashBackground>
        <View style={[styles.lockup, { gap }]}>
          <Animated.View style={logoStyle}>
            <GoFestLogo size={markSize} />
          </Animated.View>

          <Animated.View style={wordmarkStyle}>
            <GoFestWordmark size={wordmarkSize} />
          </Animated.View>
        </View>
      </GoFestSplashBackground>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  root: {
    ...StyleSheet.absoluteFill,
    zIndex: 999,
    elevation: 999,
  },
  lockup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
});
