/* eslint-disable react-hooks/immutability -- Reanimated shared values are mutated by design */
import React, { useState } from "react";
import { Platform, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import type { PointerEvent } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  Easing,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { router } from "expo-router";
import { HERO_EVENTS } from "../../constants/home-data";
import { useTranslation } from "@/context/language-context";
import MetallicBackground from "../ui/metallic-background";
import CarouselDots from "./carousel-dots";
import HeroCard from "./hero-card";
import HomeNavbar from "./home-navbar";
import NewEventBanner from "./new-event-banner";

const CARD_WIDTH_RATIO = 0.55;
const CARD_MAX_WIDTH = 300;
const CARD_ASPECT = 1.31;
const CARD_GAP_RATIO = 0.17;
const DIM_COLOR = "#6E7076";
const DIM_OPACITY = 0.48;
const TINT_OPACITY = 0.18;

export default function HeroCarousel() {
  const { width } = useWindowDimensions();
  const { t } = useTranslation();

  const count = HERO_EVENTS.length;
  const cardWidth = Math.min(width * CARD_WIDTH_RATIO, CARD_MAX_WIDTH);
  const snapInterval = cardWidth * (1 + CARD_GAP_RATIO);
  const sidePadding = (width - cardWidth) / 2;
  const cardHeight = cardWidth * CARD_ASPECT;
  const carouselHeight = cardHeight + 92;

  const [activeIndex, setActiveIndex] = useState(0);
  const translateX = useSharedValue(0);
  const startX = useSharedValue(0);
  const parallaxX = useSharedValue(0);

  // Web: card strip ikut posisi kursor tanpa perlu drag
  const webPointerProps =
    Platform.OS === "web"
      ? {
          onPointerMove: (e: PointerEvent) => {
            const progress = Math.max(-1, Math.min(1, (e.nativeEvent.clientX - width / 2) / (width / 2)));
            parallaxX.value = withTiming(progress * snapInterval * 0.25, {
              duration: 220,
              easing: Easing.out(Easing.cubic),
            });
          },
          onPointerLeave: () => {
            parallaxX.value = withTiming(0, { duration: 420, easing: Easing.out(Easing.cubic) });
          },
          // scroll wheel untuk ganti card
          onWheel: (e: any) => {
            const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
            if (Math.abs(delta) < 10) return;
            const dir = delta > 0 ? 1 : -1;
            const next = Math.max(0, Math.min(count - 1, activeIndex + dir));
            if (next !== activeIndex) {
              translateX.value = withSpring(-next * snapInterval, {
                damping: 26,
                stiffness: 190,
                mass: 0.85,
              });
              setActiveIndex(next);
            }
          },
        } as any
      : {};

  const parallaxStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: parallaxX.value }],
  }));

  // Warna metalik mengikuti aksen poster aktif
  const tintInputRange = HERO_EVENTS.map((_, i) => -(count - 1 - i) * snapInterval);
  const tintOutputRange = [...HERO_EVENTS].reverse().map((event) => event.accent);
  const tintStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(translateX.value, tintInputRange, tintOutputRange),
  }));

  const panGesture = Gesture.Pan()
    .activeOffsetX([-6, 6])
    .failOffsetY([-10, 10])
    .minDistance(4)
    .onStart(() => {
      startX.value = translateX.value;
      parallaxX.value = withTiming(0, { duration: 120, easing: Easing.out(Easing.quad) });
    })
    .onUpdate((e) => {
      const lowerBound = -(count - 1) * snapInterval;
      let nextX = startX.value + e.translationX;
      if (nextX > 0) nextX = nextX * 0.45;
      if (nextX < lowerBound) nextX = lowerBound + (nextX - lowerBound) * 0.45;
      translateX.value = nextX;
    })
    .onEnd((e) => {
      const dragMoved = Math.abs(e.translationX) > snapInterval * 0.08;
      const swipedFast = Math.abs(e.velocityX) > 260;
      let next = Math.round(-translateX.value / snapInterval);
      if (dragMoved || swipedFast) {
        const base = Math.round(-startX.value / snapInterval);
        next = e.translationX < 0 || e.velocityX < 0 ? base + 1 : base - 1;
      }
      next = Math.max(0, Math.min(next, count - 1));
      translateX.value = withSpring(-next * snapInterval, {
        damping: 26,
        stiffness: 190,
        mass: 0.85,
      });
      runOnJS(setActiveIndex)(next);
    });

  return (
    <GestureHandlerRootView style={styles.flex} collapsable={false}>
      <View style={styles.container} {...webPointerProps}>
        <MetallicBackground />
        <View pointerEvents="none" style={[StyleSheet.absoluteFill, styles.dim]} />
        <Animated.View pointerEvents="none" style={[StyleSheet.absoluteFill, styles.tint, tintStyle]} />

        <SafeAreaView style={styles.flex}>
          <HomeNavbar />

          <View style={styles.stage}>
            <GestureDetector gesture={panGesture}>
              <Animated.View style={[styles.carouselWrap, { height: carouselHeight }, parallaxStyle]}>
                {HERO_EVENTS.map((item, index) => (
                  <Animated.View
                    key={item.id}
                    style={[styles.slot, { left: sidePadding + index * snapInterval, width: cardWidth }]}
                  >
                    <HeroCard
                      event={item}
                      index={index}
                      scrollX={translateX}
                      snapInterval={snapInterval}
                      cardWidth={cardWidth}
                    />
                  </Animated.View>
                ))}
              </Animated.View>
            </GestureDetector>

            <View style={styles.dotsWrap}>
              <CarouselDots count={count} activeIndex={activeIndex} />
            </View>
          </View>

          <View style={styles.bottomArea}>
            <Text style={styles.hint}>{t("home.hint")}</Text>
            <NewEventBanner onPress={() => router.push("/(tabs)/ticket")} />
          </View>
        </SafeAreaView>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: { flex: 1, overflow: "hidden" },
  dim: { backgroundColor: DIM_COLOR, opacity: DIM_OPACITY },
  tint: { opacity: TINT_OPACITY },
  stage: { flex: 1, justifyContent: "center" },
  carouselWrap: { overflow: "hidden", paddingTop: 12, paddingBottom: 16 },
  slot: { position: "absolute", top: 14, alignItems: "center" },
  dotsWrap: { marginTop: 6 },
  bottomArea: { paddingHorizontal: 20, alignItems: "center", paddingBottom: 32 },
  hint: {
    fontSize: 13,
    fontWeight: "600",
    color: "#4A4A4F",
    marginBottom: 16,
    textShadowColor: "rgba(255,255,255,0.55)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
});
