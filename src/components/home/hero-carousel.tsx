import React, { useState } from "react";
import { Platform, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import type { PointerEvent } from "react-native";
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
import { CONCERT_DETAILS } from "../../constants/concert-detail-data";
import HeroCard from "./hero-card";
import HomeNavbar from "./home-navbar";
import { gfColors } from "../../constants/gf-theme";

const CARD_WIDTH_RATIO = 0.72; // card aktif = 72% lebar layar
const ITEM_SPACING = 28;

// Background metalik: abu-putih netral dengan pantulan cahaya (brushed steel/silver)
const METALLIC_COLORS = ["#DCDCDE", "#F5F5F3", "#E0E0E2", "#F8F8F6"] as const;

const DARK_TEXT = "#1B222D";
const MUTED_TEXT = "#5A6572";

export default function HeroCarousel() {
  const { width } = useWindowDimensions();
  const cardWidth = width * CARD_WIDTH_RATIO;
  const snapInterval = cardWidth + ITEM_SPACING;
  const sidePadding = (width - cardWidth) / 2;

  const count = HERO_EVENTS.length;
  const [activeIndex, setActiveIndex] = useState(0);

  const translateX = useSharedValue(0);
  const startX = useSharedValue(0);
  const parallaxX = useSharedValue(0);

  // Web: strip card langsung ikut posisi kursor (kiri/kanan) tanpa perlu ditekan.
  const webPointerProps =
    Platform.OS === "web"
      ? {
          onPointerMove: (e: PointerEvent) => {
            const progress = Math.max(-1, Math.min(1, (e.nativeEvent.clientX - width / 2) / (width / 2)));
            parallaxX.value = withTiming(progress * snapInterval * 0.15, { duration: 90 });
          },
          onPointerLeave: () => {
            parallaxX.value = withTiming(0, { duration: 220 });
          },
        }
      : {};

  const parallaxStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: parallaxX.value }],
  }));

  const tintInputRange = HERO_EVENTS.map((_, i) => -i * snapInterval);
  const tintOutputRange = HERO_EVENTS.map(
    (e) => CONCERT_DETAILS.find((c) => c.id === e.id)?.posterTo ?? "#E8E8EA",
  );

  // Tint subtle dari poster aktif di atas background metalik (opacity rendah)
  const tintStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(translateX.value, tintInputRange, tintOutputRange),
  }));

  const panGesture = Gesture.Pan()
    // Directional lock: gesture horizontal aktif duluan, scroll vertikal tetap bebas
    .activeOffsetX([-12, 12])
    .failOffsetY([-15, 15])
    .onStart(() => {
      startX.value = translateX.value;
    })
    .onUpdate((e) => {
      translateX.value = startX.value + e.translationX;
    })
    .onEnd((e) => {
      // Threshold rendah + selalu snap ke card terdekat = swipe terasa ringan
      const dragMoved = Math.abs(e.translationX) > snapInterval * 0.15;
      const swipedFast = Math.abs(e.velocityX) > 350;
      let next = Math.round(-translateX.value / snapInterval);
      if (dragMoved || swipedFast) {
        next = e.translationX < 0 || e.velocityX < 0 ? next + 1 : next - 1;
      }
      next = Math.max(0, Math.min(next, count - 1));
      translateX.value = withTiming(-next * snapInterval, { duration: 220 });
      runOnJS(setActiveIndex)(next);
    });

  return (
    <GestureHandlerRootView style={styles.flex} collapsable={false}>
      <View style={styles.container} {...webPointerProps}>
        {/* Base metalik: gradient abu-putih diagonal biar kesan pantulan logam */}
        <LinearGradient
          colors={METALLIC_COLORS}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={StyleSheet.absoluteFill}
          pointerEvents="none"
        />

        {/* Rona warna poster aktif yang SANGAT subtle */}
        <Animated.View style={[StyleSheet.absoluteFill, { opacity: 0.08 }, tintStyle]} pointerEvents="none" />

        <HomeNavbar />

        <GestureDetector gesture={panGesture}>
          <Animated.View style={[styles.carouselWrap, parallaxStyle]}>
            {HERO_EVENTS.map((item, index) => (
              <Animated.View
                key={item.id}
                style={{ position: "absolute", top: 0, bottom: 0, left: sidePadding + index * snapInterval, width: snapInterval, alignItems: "center", justifyContent: "center" }}
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
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: { flex: 1 },
  carouselWrap: { flex: 1, overflow: "hidden", paddingTop: 12, paddingBottom: 44 },
  dots: { flexDirection: "row", justifyContent: "center", gap: 6, marginBottom: 8 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: "#C2C8D0" },
  dotActive: { width: 18, backgroundColor: gfColors.teal },
  hint: { textAlign: "center", fontSize: 11.5, color: MUTED_TEXT, marginTop: 4 },
  infoPill: {
    marginHorizontal: 24,
    marginTop: 14,
    marginBottom: 24,
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: "center",
  },
  infoPillText: { fontSize: 12, color: MUTED_TEXT },
  infoPillLink: { color: gfColors.teal, fontWeight: "700" },
});