import React, { useState, useEffect, useMemo } from "react";
import { Platform, StyleSheet, Text, View, useWindowDimensions, TextInput, Pressable } from "react-native";
import type { PointerEvent } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Circle, Path } from "react-native-svg";
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

  const [query, setQuery] = useState("");
  const filteredEvents = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return HERO_EVENTS;
    return HERO_EVENTS.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        (e.subtitle && e.subtitle.toLowerCase().includes(q)) ||
        (e.tour && e.tour.toLowerCase().includes(q)) ||
        e.venue.toLowerCase().includes(q) ||
        e.date.toLowerCase().includes(q)
    );
  }, [query]);

  const count = filteredEvents.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const cardHeight = cardWidth * 1.2;
  const carouselHeight = cardHeight + 58; // card + caption + padding ( +10 buat geser sedikit ke bawah )

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

  // reset carousel when filter changes
  useEffect(() => {
    setActiveIndex(0);
    translateX.value = 0;
    parallaxX.value = 0;
  }, [count]);

  const tintInputRange = filteredEvents.length ? filteredEvents.map((_, i) => -i * snapInterval) : [0];
  const tintOutputRange = filteredEvents.length
    ? filteredEvents.map((e) => CONCERT_DETAILS.find((c) => c.id === e.id)?.posterTo ?? "#E8E8EA")
    : ["#E8E8EA"];

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

        {/* Searchbar di bawah Go fest */}
        <View style={styles.searchWrap}>
          <View style={styles.searchBox}>
            <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
              <Circle cx="11" cy="11" r="7" stroke={MUTED_TEXT} strokeWidth={1.8} />
              <Path d="M15.5 15.5L20 20" stroke={MUTED_TEXT} strokeWidth={1.8} strokeLinecap="round" />
            </Svg>
            <TextInput
              value={query}
              onChangeText={setQuery}
              placeholder="Cari konser, artis, venue..."
              placeholderTextColor={MUTED_TEXT}
              style={styles.searchInput}
              returnKeyType="search"
              clearButtonMode="while-editing"
            />
            {query.length > 0 && (
              <Pressable onPress={() => setQuery("")} hitSlop={10} style={styles.clearBtn}>
                <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
                  <Path d="M6 6l12 12M18 6L6 18" stroke={MUTED_TEXT} strokeWidth={1.8} strokeLinecap="round" />
                </Svg>
              </Pressable>
            )}
          </View>
        </View>

        {count === 0 ? (
          <View style={styles.emptyWrap}>
            <Text style={styles.emptyText}>Tidak ada event ditemukan</Text>
            <Text style={styles.emptySub}>Coba kata kunci lain</Text>
          </View>
        ) : (
          <GestureDetector gesture={panGesture}>
            <Animated.View style={[styles.carouselWrap, { height: carouselHeight }, parallaxStyle]}>
              {filteredEvents.map((item, index) => (
                <Animated.View
                  key={item.id}
                  style={{ position: "absolute", top: 0, bottom: 0, left: sidePadding + index * snapInterval, width: snapInterval, alignItems: "center", justifyContent: "flex-start", paddingTop: 2 }}
                >
                  <HeroCard event={item} index={index} scrollX={translateX} snapInterval={snapInterval} cardWidth={cardWidth} />
                </Animated.View>
              ))}
            </Animated.View>
          </GestureDetector>
        )}

        <View style={styles.dots}>
          {filteredEvents.map((_, i) => (
            <View key={i} style={[styles.dot, i === activeIndex && styles.dotActive]} />
          ))}
        </View>

        <Text style={styles.hint}>{count === 0 ? " " : "Geser buat lihat event lain"}</Text>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: { flex: 1 },
  searchWrap: { paddingHorizontal: 20, marginTop: 2, marginBottom: 10 },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#E2E5EA",
    borderRadius: 100,
    paddingHorizontal: 14,
    height: 44,
    shadowColor: "#1A2E4D",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  searchInput: { flex: 1, fontSize: 13.5, color: DARK_TEXT, paddingVertical: 0 },
  clearBtn: { width: 24, height: 24, alignItems: "center", justifyContent: "center" },
  carouselWrap: { overflow: "hidden", paddingTop: 18, paddingBottom: 16 },
  emptyWrap: { height: 320, alignItems: "center", justifyContent: "center", paddingHorizontal: 20 },
  emptyText: { fontSize: 14, fontWeight: "700", color: DARK_TEXT },
  emptySub: { fontSize: 12, color: MUTED_TEXT, marginTop: 4 },
  dots: { flexDirection: "row", justifyContent: "center", gap: 6, marginBottom: 8 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: "#C2C8D0" },
  dotActive: { width: 18, backgroundColor: gfColors.teal },
  hint: { textAlign: "center", fontSize: 11.5, color: MUTED_TEXT, marginTop: 4 },
});