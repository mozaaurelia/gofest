import React, { useState } from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolateColor,
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

  const scrollX = useSharedValue(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  function onMomentumScrollEnd(e: any) {
    const index = Math.round(e.nativeEvent.contentOffset.x / snapInterval);
    setActiveIndex(Math.max(0, Math.min(index, HERO_EVENTS.length - 1)));
  }

  const bgStyle = useAnimatedStyle(() => {
    const inputRange = HERO_EVENTS.map((_, i) => i * snapInterval);
    const outputRange = HERO_EVENTS.map((e) => e.bgColor);
    return { backgroundColor: interpolateColor(scrollX.value, inputRange, outputRange) };
  });

  return (
    <Animated.View style={[styles.container, bgStyle]}>
      <LinearGradient
        colors={["rgba(255,255,255,0.07)", "rgba(0,0,0,0.32)"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={StyleSheet.absoluteFill}
        pointerEvents="none"
      />
      <HomeNavbar />

      <View style={styles.carouselWrap}>
        <Animated.FlatList
          data={HERO_EVENTS}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={snapInterval}
          decelerationRate="fast"
          bounces={false}
          contentContainerStyle={{ paddingHorizontal: sidePadding }}
          onScroll={scrollHandler}
          onMomentumScrollEnd={onMomentumScrollEnd}
          scrollEventThrottle={16}
          renderItem={({ item, index }) => (
            <HeroCard event={item} index={index} scrollX={scrollX} snapInterval={snapInterval} cardWidth={cardWidth} />
          )}
        />
      </View>

      <View style={styles.dots}>
        {HERO_EVENTS.map((_, i) => (
          <View key={i} style={[styles.dot, i === activeIndex && styles.dotActive]} />
        ))}
      </View>

      <Text style={styles.hint}>Ketuk banner buat lihat info event</Text>
      <View style={styles.infoPill}>
        <Text style={styles.infoPillText}>
          Event baru tersedia! <Text style={styles.infoPillLink}>Lihat Info Tiket</Text>
        </Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  carouselWrap: { flex: 1, justifyContent: "center", alignItems: "center" },
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