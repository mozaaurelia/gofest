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
  interpolate,
  interpolateColor,
  withTiming,
  withSpring,
  withRepeat,
  Easing,
} from "react-native-reanimated";
import { HERO_EVENTS } from "../../constants/home-data";
import HeroCard from "./hero-card";
import HomeNavbar from "./home-navbar";
import { gfColors } from "../../constants/gf-theme";

const CARD_WIDTH_RATIO = 0.72; // card aktif = 72% lebar layar
const ITEM_SPACING = 28;

// === BACKGROUND METALIK BERKILAU MENYALA ===
// Base silk-metal: abu-putih terang dominan, 5-stop brushed dengan kontras specular jelas
const METALLIC_BASE = ["#F2F3F4", "#FFFFFF", "#DADCE0", "#FFFFFF", "#ECEEF0"] as const;
const METALLIC_BASE_STOPS = [0, 0.24, 0.48, 0.72, 1] as const;
// Silk sheen horizontal - strip highlight terang menyala (berbeda arah dari base diagonal)
const SILK_HORIZONTAL = ["rgba(255,255,255,0)", "rgba(255,255,255,0.92)", "rgba(255,255,255,0)"] as const;
// Brushed vertical subtle - menambah kesan serat logam
const SILK_VERTICAL = ["rgba(255,255,255,0)", "rgba(255,255,255,0.52)", "rgba(255,255,255,0)"] as const;
// Sweep shine - highlight diagonal yang akan di-animate bergerak
const SWEEP_GRADIENT = ["rgba(255,255,255,0)", "rgba(255,255,255,0.88)", "rgba(255,255,255,0)"] as const;

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
  // shimmer untuk kilau metalik yang hidup/bergerak terus
  const shimmer = useSharedValue(0);

  useEffect(() => {
    shimmer.value = withRepeat(withTiming(1, { duration: 2200, easing: Easing.inOut(Easing.ease) }), -1, true);
  }, []);

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
    ? filteredEvents.map((e) => (e as any).accent ?? "#E8E8EA")
    : ["#E8E8EA"];

  // Tint smooth mengikuti poster aktif - interpolateColor untuk transisi halus, opacity tipis biar metalik tetap dominan terang
  const tintStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(translateX.value, tintInputRange, tintOutputRange),
  }));

  // Shimmer sweep - kilau diagonal yang bergerak hidup (silk shine)
  const sweepStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: interpolate(shimmer.value, [0, 1], [-width * 0.9, width * 0.9]) },
      { skewX: "-14deg" },
    ],
    opacity: interpolate(shimmer.value, [0, 0.5, 1], [0.55, 1, 0.55]),
  }));

  const sweepStyle2 = useAnimatedStyle(() => ({
    transform: [
      { translateX: interpolate(shimmer.value, [0, 1], [width * 0.7, -width * 0.7]) },
      { skewX: "-14deg" },
    ],
    opacity: interpolate(shimmer.value, [0, 0.5, 1], [0.35, 0.65, 0.35]),
  }));

  // Pulse halus pada highlight horizontal biar terasa menyala (breathing)
  const pulseStyle = useAnimatedStyle(() => ({
    opacity: interpolate(shimmer.value, [0, 1], [0.42, 0.68]),
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
        {/* Layer 1 - base metalik silk diagonal 5-stop terang (abu-putih dominan, kontras specular) */}
        <LinearGradient
          colors={METALLIC_BASE}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={METALLIC_BASE_STOPS as any}
          style={StyleSheet.absoluteFill}
          pointerEvents="none"
        />

        {/* Layer 2 - silk sheen horizontal - strip highlight menyala (opacity di-animate biar breathing) */}
        <Animated.View style={[StyleSheet.absoluteFill, pulseStyle]} pointerEvents="none">
          <LinearGradient
            colors={SILK_HORIZONTAL}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            locations={[0, 0.46, 1]}
            style={StyleSheet.absoluteFill}
          />
        </Animated.View>

        {/* Layer 2b - brushed vertical subtle */}
        <LinearGradient
          colors={SILK_VERTICAL}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          locations={[0, 0.5, 1]}
          style={[StyleSheet.absoluteFill, { opacity: 0.28 }]}
          pointerEvents="none"
        />

        {/* Layer 3 - sweep shine diagonal yang bergerak (kilau hidup seperti refleksi logam) */}
        <Animated.View style={[styles.sweepWrap, sweepStyle]} pointerEvents="none">
          <LinearGradient
            colors={SWEEP_GRADIENT}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            locations={[0, 0.5, 1]}
            style={StyleSheet.absoluteFill}
          />
        </Animated.View>

        {/* Layer 3b - sweep kedua lebih tipis & offset untuk kesan silk double reflection */}
        <Animated.View style={[styles.sweepWrapNarrow, sweepStyle2]} pointerEvents="none">
          <LinearGradient
            colors={["rgba(255,255,255,0)", "rgba(255,255,255,0.62)", "rgba(255,255,255,0)"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={StyleSheet.absoluteFill}
          />
        </Animated.View>

        {/* Layer 4 - tint aksen poster (smooth interpolateColor, tipis 0.16 biar metalik tetap dominan) */}
        <Animated.View style={[StyleSheet.absoluteFill, { opacity: 0.16 }, tintStyle]} pointerEvents="none" />

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

        <View style={styles.hintWrap}>
          <Text style={styles.hint}>{count === 0 ? " " : t.hint}</Text>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: { flex: 1, overflow: "hidden" },
  sweepWrap: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: "62%",
  },
  sweepWrapNarrow: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    width: "42%",
  },
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
  emptyText: { fontSize: 14, fontWeight: "700", color: DARK_TEXT, textShadowColor: "rgba(255,255,255,0.9)", textShadowOffset: { width: 0, height: 1 }, textShadowRadius: 6 },
  emptySub: { fontSize: 12, color: MUTED_TEXT, marginTop: 4, textShadowColor: "rgba(255,255,255,0.9)", textShadowOffset: { width: 0, height: 1 }, textShadowRadius: 6 },
  dots: { flexDirection: "row", justifyContent: "center", gap: 6, marginBottom: 8 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: "#C2C8D0" },
  dotActive: { width: 18, backgroundColor: gfColors.teal },
  hintWrap: {
    alignSelf: "center",
    marginTop: 6,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 100,
    backgroundColor: "rgba(255,255,255,0.58)",
    borderWidth: 1,
    borderColor: "rgba(200,200,204,0.45)",
  },
  hint: { textAlign: "center", fontSize: 11.5, color: MUTED_TEXT, textShadowColor: "rgba(255,255,255,0.95)", textShadowOffset: { width: 0, height: 1 }, textShadowRadius: 4 },
});