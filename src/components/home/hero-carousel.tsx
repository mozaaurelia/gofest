import React, { useState } from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  runOnJS,
  interpolateColor,
  withTiming,
} from "react-native-reanimated";
import { HERO_EVENTS } from "../../constants/home-data";
import HeroCard from "./hero-card";
import HomeNavbar from "./home-navbar";
import { gfColors } from "../../constants/gf-theme";

const CARD_WIDTH_RATIO = 0.72; // card aktif = 72% lebar layar
const ITEM_SPACING = 12;

export default function HeroCarousel() {
  const { width } = useWindowDimensions();
  const cardWidth = width * CARD_WIDTH_RATIO;
  const snapInterval = cardWidth + ITEM_SPACING;
  const sidePadding = (width - cardWidth) / 2;

  const count = HERO_EVENTS.length;
  const [activeIndex, setActiveIndex] = useState(0);

  const translateX = useSharedValue(0);
  const startX = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onStart(() => {
      startX.value = translateX.value;
    })
    .onUpdate((e) => {
      translateX.value = startX.value + e.translationX;
    })
    .onEnd((e) => {
      const threshold = snapInterval * 0.3;
      let next = Math.round(-translateX.value / snapInterval);
      const movedFar = Math.abs(e.translationX) > threshold;
      const swipedFast = Math.abs(e.velocityX) > 500;
      if (movedFar || swipedFast) {
        next = e.translationX < 0 || e.velocityX < 0 ? next + 1 : next - 1;
      }
      next = Math.max(0, Math.min(next, count - 1));
      translateX.value = withTiming(-next * snapInterval, { duration: 260 });
      runOnJS(setActiveIndex)(next);
    });

  const bgStyle = useAnimatedStyle(() => {
    const inputRange = HERO_EVENTS.map((_, i) => -i * snapInterval);
    const outputRange = HERO_EVENTS.map((e) => e.bgColor);
    return { backgroundColor: interpolateColor(translateX.value, inputRange, outputRange) };
  });

  return (
    <GestureHandlerRootView style={styles.flex} collapsable={false}>
      <Animated.View style={[styles.container, bgStyle]}>
        <LinearGradient
          colors={["rgba(255,255,255,0.07)", "rgba(0,0,0,0.32)"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={StyleSheet.absoluteFill}
          pointerEvents="none"
        />
        <HomeNavbar />

        <GestureDetector gesture={panGesture}>
          <Animated.View style={styles.carouselWrap}>
            {HERO_EVENTS.map((item, index) => (
              <Animated.View
                key={item.id}
                style={{ position: "absolute", left: sidePadding + index * snapInterval, width: snapInterval, alignItems: "center" }}
              >
                <HeroCard event={item} index={index} scrollX={translateX} snapInterval={snapInterval} cardWidth={cardWidth} />
              </Animated.View>
            ))}
          </Animated.View>
        </GestureDetector>

        <View style={styles.dots}>
          {HERO_EVENTS.map((_, i) => (
            <View key={i} style={[styles.dot, i === activeIndex && styles.dotActive]} />
          ))}
        </View>

        <Text style={styles.hint}>Geser buat lihat event lain</Text>
        <View style={styles.infoPill}>
          <Text style={styles.infoPillText}>
            Event baru tersedia! <Text style={styles.infoPillLink}>Lihat Info Tiket</Text>
          </Text>
        </View>
      </Animated.View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: { flex: 1 },
  carouselWrap: { flex: 1, overflow: "hidden" },
  dots: { flexDirection: "row", justifyContent: "center", gap: 6, marginBottom: 8 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: "rgba(255,255,255,0.25)" },
  dotActive: { width: 18, backgroundColor: gfColors.lime },
  hint: { textAlign: "center", fontSize: 11.5, color: gfColors.textMuted, marginTop: 4 },
  infoPill: {
    marginHorizontal: 24,
    marginTop: 14,
    marginBottom: 24,
    backgroundColor: gfColors.surface,
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: "center",
  },
  infoPillText: { fontSize: 12, color: gfColors.textMuted },
  infoPillLink: { color: gfColors.teal, fontWeight: "700" },
});