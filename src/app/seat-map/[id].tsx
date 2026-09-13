import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { getConcertDetailById } from "../../constants/concert-detail-data";
import { gfColors } from "../../constants/gf-theme";
import SeatMapHeader from "../../components/seat-map/seat-map-header";
import SeatMapSectionHeader from "../../components/seat-map/seat-map-section-header";
import SeatMapCategorySection from "../../components/seat-map/seat-map-category-section";
import SeatMapBenefitSection from "../../components/seat-map/seat-map-benefit-section";
import SeatMapImage from "../../components/seat-map/seat-map-image";

export default function SeatMapScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const concert = getConcertDetailById(id);

  // fallback title/subtitle kalau id tidak ditemukan (tetap tampil sesuai contoh gambar)
  const title = concert ? `${concert.title} in Jakarta` : "T.O.P PRE-STUDIO 2026 in Jakarta";
  const subtitle = concert
    ? `${concert.date} • ${concert.address}`
    : "19 Sep 2026 • Istora Senayan, Tanah Abang, Jakarta ...";

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <SeatMapHeader title={title} subtitle={subtitle} />

      <ScrollView bounces contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <SeatMapSectionHeader title="Seat Map" />

        <View style={styles.divider} />

        <SeatMapCategorySection />

        <SeatMapBenefitSection />

        <SeatMapImage image={concert?.image} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gfColors.bg,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 24,
  },
  divider: {
    height: 8,
    backgroundColor: "#F0F2F4",
  },
});
