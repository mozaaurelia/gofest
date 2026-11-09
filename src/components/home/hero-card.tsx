import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { router } from "expo-router";
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { HeroEvent } from "../../constants/home-data";

type HeroCardProps = {
  event: HeroEvent;
  index: number;
  scrollX: SharedValue<number>;
  snapInterval: number;
  cardWidth: number;
};

const CARD_ASPECT = 1.31;
const SIDE_ROTATE = 10;
const SIDE_SCALE = 0.93;
const SIDE_OPACITY = 0.9;

export default function HeroCard({ event, index, scrollX, snapInterval, cardWidth }: HeroCardProps) {
  const cardHeight = cardWidth * CARD_ASPECT;

  const cardStyle = useAnimatedStyle(() => {
    const center = -index * snapInterval;
    const inputRange = [center - snapInterval, center, center + snapInterval];

    const scale = interpolate(scrollX.value, inputRange, [SIDE_SCALE, 1, SIDE_SCALE], Extrapolate.CLAMP);
    const rotate = interpolate(scrollX.value, inputRange, [SIDE_ROTATE, 0, -SIDE_ROTATE], Extrapolate.CLAMP);
    const opacity = interpolate(scrollX.value, inputRange, [SIDE_OPACITY, 1, SIDE_OPACITY], Extrapolate.CLAMP);

    return {
      opacity,
      transform: [{ translateX: scrollX.value }, { scale }, { rotate: `${rotate}deg` }],
    };
  });

  const captionStyle = useAnimatedStyle(() => {
    const center = -index * snapInterval;
    const inputRange = [center - snapInterval * 0.55, center, center + snapInterval * 0.55];
    return {
      opacity: interpolate(scrollX.value, inputRange, [0, 1, 0], Extrapolate.CLAMP),
    };
  });

  return (
    <Pressable
      style={{ width: cardWidth }}
      accessibilityRole="button"
      accessibilityLabel={event.title}
      onPress={() => router.push(`/concert/${event.id}`)}
    >
      <Animated.View style={[styles.group, { width: cardWidth }, cardStyle]}>
        <View style={[styles.frame, { width: cardWidth, height: cardHeight }]}>
          <View style={styles.posterClip}>
            <Image source={event.image} style={StyleSheet.absoluteFill} contentFit="cover" transition={220} />
          </View>
        </View>

        <Animated.View style={[styles.captionWrap, captionStyle]}>
          <Text style={styles.caption} numberOfLines={2}>
            {event.title}
          </Text>
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  group: { alignItems: "center" },
  frame: {
    borderRadius: 28,
    padding: 6,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowOpacity: 0.26,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 12,
  },
  posterClip: {
    flex: 1,
    borderRadius: 22,
    overflow: "hidden",
    backgroundColor: "#101014",
  },
  captionWrap: { marginTop: 14, width: "100%", paddingHorizontal: 4 },
  caption: {
    textAlign: "center",
    fontSize: 20,
    lineHeight: 25,
    fontWeight: "800",
    color: "#232327",
  },
});
