import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import Animated, { SharedValue, interpolate, useAnimatedStyle, Extrapolate } from "react-native-reanimated";
import { HeroEvent } from "../../constants/home-data";

type HeroCardProps = {
  event: HeroEvent;
  index: number;
  scrollX: SharedValue<number>;
  snapInterval: number;
  cardWidth: number;
};

export default function HeroCard({ event, index, scrollX, snapInterval, cardWidth }: HeroCardProps) {
  const cardHeight = cardWidth * 1.2; // height lebih pendek biar sedang

  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [(index - 1) * snapInterval, index * snapInterval, (index + 1) * snapInterval];

    const scale = interpolate(scrollX.value, inputRange, [0.9, 1, 0.9], Extrapolate.CLAMP);
    const opacity = interpolate(scrollX.value, inputRange, [0.55, 1, 0.55], Extrapolate.CLAMP);

    return { transform: [{ scale }], opacity };
  });

  return (
    <View style={{ width: snapInterval, alignItems: "center" }}>
      <Animated.View style={[styles.card, { width: cardWidth, height: cardHeight }, animatedStyle]}>
        {/* Poster dari assets/images */}
        <Image source={event.image} style={StyleSheet.absoluteFill} contentFit="cover" />
        <View style={[StyleSheet.absoluteFill, { backgroundColor: "rgba(0,0,0,0.28)" }]} />

        <View style={styles.info}>
          <Text style={styles.date}>{event.date}</Text>
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.venue}>{event.venue}</Text>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "rgba(255,255,255,0.85)",
  },
  info: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 14,
    backgroundColor: "rgba(0,0,0,0.25)",
  },
  date: { fontSize: 9, fontWeight: "700", color: "#FFFFFF", opacity: 0.85, letterSpacing: 0.5 },
  title: { fontSize: 15, fontWeight: "800", color: "#FFFFFF", marginTop: 3 },
  venue: { fontSize: 10.5, color: "#FFFFFF", opacity: 0.85, marginTop: 2 },
});