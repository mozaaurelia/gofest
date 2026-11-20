import React from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import AuthLogo from "./auth/auth-logo";
import GoFestSplashBackground from "./splash/GoFestSplashBackground";
import { useGoFestSplashAnimation } from "./splash/useGoFestSplashAnimation";

type AnimatedSplashScreenProps = {
  onFinish: () => void;
};

export default function AnimatedSplashScreen({ onFinish }: AnimatedSplashScreenProps) {
  const { width } = useWindowDimensions();
  const { bgOpacity, logoOpacity, logoScale, exitOpacity, exitScale } = useGoFestSplashAnimation(onFinish);

  const logoWidth = Math.min(270, Math.max(180, width * 0.62));

  const containerStyle = useAnimatedStyle(() => ({
    opacity: bgOpacity.value * exitOpacity.value,
  }));

  const logoStyle = useAnimatedStyle(() => ({
    opacity: logoOpacity.value,
    transform: [{ scale: logoScale.value * exitScale.value }],
  }));

  return (
    <Animated.View style={[styles.root, containerStyle]}>
      <GoFestSplashBackground>
        <View style={styles.lockup}>
          <Animated.View style={logoStyle}>
            <AuthLogo width={logoWidth} />
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
