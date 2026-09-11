import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { router } from "expo-router";
import Animated, { SharedValue, interpolate, useAnimatedStyle, Extrapolate } from "react-native-reanimated";
import { HeroEvent } from "../../constants/home-data";
import { gfColors } from "../../constants/gf-theme";

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
    const center = -index * snapInterval;
    const inputRange = [center - snapInterval, center, center + snapInterval];

    const scale = interpolate(scrollX.value, inputRange, [0.9, 1, 0.9], Extrapolate.CLAMP);
    const opacity = interpolate(scrollX.value, inputRange, [0.55, 1, 0.55], Extrapolate.CLAMP);
    const rotate = interpolate(scrollX.value, inputRange, [12, 0, -12], Extrapolate.CLAMP);

    return { transform: [{ translateX: scrollX.value }, { scale }, { rotate: `${rotate}deg` }], opacity };
  });

  return (
    <Pressable onPress={() => router.push(`/concert/${event.id}`)}>
      <Animated.View style={[styles.group, { width: cardWidth }, animatedStyle]}>
        <View style={[styles.card, { width: cardWidth, height: cardHeight }]}>
          {/* Poster dari assets/images */}
          <Image source={event.image} style={StyleSheet.absoluteFill} contentFit="cover" />
          <View style={[StyleSheet.absoluteFill, { backgroundColor: "rgba(0,0,0,0.28)" }]} />

          <View style={styles.info}>
            <Text style={styles.date}>{event.date}</Text>
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.venue}>{event.venue}</Text>
          </View>
        </View>

        <View style={styles.caption}>
          {event.subtitle ? <Text style={styles.captionMuted}>{event.subtitle} </Text> : null}
          <Text style={styles.captionTitle}>{event.title}</Text>
          {event.tour ? <Text style={styles.captionTour}> [{event.tour}]</Text> : null}
        </View>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  group: { alignItems: "center" },
  card: {
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowOpacity: 0.18,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
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
  caption: { flexDirection: "row", marginTop: 9, paddingHorizontal: 4 },
  captionMuted: { fontSize: 12, color: "#5A6572", fontWeight: "600" },
  captionTitle: { fontSize: 12, color: "#1B222D", fontWeight: "800" },
  captionTour: { fontSize: 12, color: gfColors.teal, fontWeight: "700" },
});