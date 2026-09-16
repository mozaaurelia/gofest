import React from "react";
import { StyleSheet } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import LoketLogo from "./splash/LoketLogo";
import LoketWordmark from "./splash/LoketWordmark";
import SplashBackground from "./splash/SplashBackground";
import { useLoketSplashAnimation } from "./splash/useLoketSplashAnimation";

type AnimatedSplashScreenProps = {
  onFinish: () => void;
};

export default function AnimatedSplashScreen({ onFinish }: AnimatedSplashScreenProps) {
  const { bgOpacity, logoOpacity, logoScale, wordmarkOpacity, wordmarkTranslateY, exitOpacity, exitScale } =
    useLoketSplashAnimation(onFinish);

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
      <SplashBackground>
        <Animated.View style={[styles.logoWrap, logoStyle]}>
          <LoketLogo size={104} />
        </Animated.View>

        <Animated.View style={[styles.wordmarkWrap, wordmarkStyle]}>
          <LoketWordmark size={22} />
        </Animated.View>
      </SplashBackground>
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
