import React from "react";
import { StyleSheet } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import GoFestLogo from "./splash/GoFestLogo";
import GoFestWordmark from "./splash/GoFestWordmark";
import GoFestSplashBackground from "./splash/GoFestSplashBackground";
import { useGoFestSplashAnimation } from "./splash/useGoFestSplashAnimation";

type AnimatedSplashScreenProps = {
  onFinish: () => void;
};

export default function AnimatedSplashScreen({ onFinish }: AnimatedSplashScreenProps) {
  const { bgOpacity, logoOpacity, logoScale, wordmarkOpacity, wordmarkTranslateY, exitOpacity, exitScale } =
    useGoFestSplashAnimation(onFinish);

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
        <Animated.View style={[styles.logoWrap, logoStyle]}>
          <GoFestLogo size={78} />
        </Animated.View>

        <Animated.View style={[styles.wordmarkWrap, wordmarkStyle]}>
          <GoFestWordmark size={36} />
        </Animated.View>
      </GoFestSplashBackground>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  root: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 999,
    elevation: 999,
  },
  logoWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  wordmarkWrap: {
    marginTop: 18,
    alignItems: "center",
  },
});
