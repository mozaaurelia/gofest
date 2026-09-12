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
  withSpring,
  Easing,
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

  const [lang, setLang] = useState<"id" | "en">("id");
  const t = useMemo(
    () =>
      lang === "id"
        ? {
            searchPlaceholder: "Cari konser, artis, venue...",
            hint: "Geser buat lihat event lain",
            empty: "Tidak ada event ditemukan",
            emptySub: "Coba kata kunci lain",
          }
        : {
            searchPlaceholder: "Search concerts, artists, venue...",
            hint: "Swipe to see other events",
            empty: "No events found",
            emptySub: "Try another keyword",
          },
    [lang]
  );

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

  // Web: strip card ikut posisi kursor tanpa perlu drag — lebih sensitif & smooth
  const webPointerProps =
    Platform.OS === "web"
      ? {
          onPointerMove: (e: PointerEvent) => {
            const progress = Math.max(-1, Math.min(1, (e.nativeEvent.clientX - width / 2) / (width / 2)));
            // 0.38 = geser terasa ngikutin kursor tapi tetap dalam 1 card, tidak lompat
            parallaxX.value = withTiming(progress * snapInterval * 0.38, { duration: 220, easing: Easing.out(Easing.cubic) });
          },
          onPointerLeave: () => {
            parallaxX.value = withTiming(0, { duration: 420, easing: Easing.out(Easing.cubic) });
          },
          // scroll wheel horizontal / vertical untuk ganti card (biar tidak harus drag)
          onWheel: (e: any) => {
            const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
            if (Math.abs(delta) < 10) return;
            // throttle via JS state
            const dir = delta > 0 ? 1 : -1;
            const next = Math.max(0, Math.min(count - 1, activeIndex + dir));
            if (next !== activeIndex) {
              translateX.value = withSpring(-next * snapInterval, {
                damping: 26,
                stiffness: 190,
                mass: 0.85,
                overshootClamping: false,
              });
              setActiveIndex(next);
            }
          },
        } as any
      : {};

  const parallaxStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: parallaxX.value }],
  }));

  // reset carousel when filter changes — smooth spring
  useEffect(() => {
    setActiveIndex(0);
    translateX.value = withSpring(0, { damping: 22, stiffness: 180, mass: 0.8 });
    parallaxX.value = withSpring(0, { damping: 22, stiffness: 180, mass: 0.8 });
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
    // Lebih sensitif: sedikit geser langsung aktif, tidak harus tekan kuat
    .activeOffsetX([-6, 6])
    .failOffsetY([-10, 10])
    .minDistance(4)
    .onStart(() => {
      startX.value = translateX.value;
      // matikan parallax saat drag biar tidak bentrok & terasa 1:1
      parallaxX.value = withTiming(0, { duration: 120, easing: Easing.out(Easing.quad) });
    })
    .onUpdate((e) => {
      const lowerBound = -(count - 1) * snapInterval;
      const upperBound = 0;
      let nextX = startX.value + e.translationX;
      // edge resistance lebih soft biar tidak patah di ujung
      if (nextX > upperBound) nextX = upperBound + (nextX - upperBound) * 0.45;
      if (nextX < lowerBound) nextX = lowerBound + (nextX - lowerBound) * 0.45;
      translateX.value = nextX;
    })
    .onEnd((e) => {
      const dragMoved = Math.abs(e.translationX) > snapInterval * 0.08;
      const swipedFast = Math.abs(e.velocityX) > 260;
      let next = Math.round(-translateX.value / snapInterval);
      if (dragMoved || swipedFast) {
        // pakai base dari start biar 1 swipe = 1 card, tidak double
        const base = Math.round(-startX.value / snapInterval);
        next = e.translationX < 0 || e.velocityX < 0 ? base + 1 : base - 1;
      }
      next = Math.max(0, Math.min(next, count - 1));
      // spring lebih empuk biar tidak kedet/patah
      translateX.value = withSpring(-next * snapInterval, {
        damping: 26,
        stiffness: 190,
        mass: 0.85,
        overshootClamping: false,
      });
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

        {/* Searchbar + bahasa di bawah Go fest */}
        <View style={styles.searchWrap}>
          <View style={styles.searchBox}>
            <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
              <Circle cx="11" cy="11" r="7" stroke={MUTED_TEXT} strokeWidth={1.8} />
              <Path d="M15.5 15.5L20 20" stroke={MUTED_TEXT} strokeWidth={1.8} strokeLinecap="round" />
            </Svg>
            <TextInput
              value={query}
              onChangeText={setQuery}
              placeholder={t.searchPlaceholder}
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

          {/* Button ganti bahasa di sebelah kanan search bar */}
          <Pressable
            onPress={() => setLang((v) => (v === "id" ? "en" : "id"))}
            style={[styles.langBtn, lang === "en" && styles.langBtnActive]}
          >
            <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
              <Circle cx="12" cy="12" r="9" stroke={lang === "en" ? "#FFFFFF" : DARK_TEXT} strokeWidth={1.6} />
              <Path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" stroke={lang === "en" ? "#FFFFFF" : DARK_TEXT} strokeWidth={1.4} strokeLinecap="round" />
              <Path d="M4.5 8.5h15M4.5 15.5h15" stroke={lang === "en" ? "#FFFFFF" : DARK_TEXT} strokeWidth={1.2} strokeLinecap="round" opacity={0.9} />
            </Svg>
            <Text style={[styles.langText, lang === "en" && styles.langTextActive]}>{lang.toUpperCase()}</Text>
          </Pressable>
        </View>

        {count === 0 ? (
          <View style={styles.emptyWrap}>
            <Text style={styles.emptyText}>{t.empty}</Text>
            <Text style={styles.emptySub}>{t.emptySub}</Text>
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

        <Text style={styles.hint}>{count === 0 ? " " : t.hint}</Text>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: { flex: 1 },
  searchWrap: { flexDirection: "row", alignItems: "center", gap: 10, paddingHorizontal: 20, marginTop: 16, marginBottom: 20 },
  searchBox: {
    flex: 1,
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
  langBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#E2E5EA",
    borderRadius: 100,
    paddingHorizontal: 12,
    height: 44,
    shadowColor: "#1A2E4D",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  langBtnActive: { backgroundColor: "#142C4A", borderColor: "#142C4A" },
  langText: { fontSize: 12, fontWeight: "800", color: DARK_TEXT, letterSpacing: 0.5 },
  langTextActive: { color: "#FFFFFF" },
  carouselWrap: { overflow: "hidden", paddingTop: 12, paddingBottom: 16 },
  emptyWrap: { height: 320, alignItems: "center", justifyContent: "center", paddingHorizontal: 20 },
  emptyText: { fontSize: 14, fontWeight: "700", color: DARK_TEXT },
  emptySub: { fontSize: 12, color: MUTED_TEXT, marginTop: 4 },
  dots: { flexDirection: "row", justifyContent: "center", gap: 6, marginBottom: 8 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: "#C2C8D0" },
  dotActive: { width: 18, backgroundColor: gfColors.teal },
  hint: { textAlign: "center", fontSize: 11.5, color: MUTED_TEXT, marginTop: 4 },
});