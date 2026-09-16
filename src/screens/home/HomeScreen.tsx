import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeroCarousel from "@/components/home/hero-carousel";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <HeroCarousel />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
});
