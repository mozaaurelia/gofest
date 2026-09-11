import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { getConcertDetailById } from "../../constants/concert-detail-data";
import DetailHeader from "../../components/concert-detail/detail-header";
import DetailPoster from "../../components/concert-detail/detail-poster";
import PromoBanner from "../../components/concert-detail/promo-banner";
import DetailInfoBox from "../../components/concert-detail/detail-info-box";
import DetailList from "../../components/concert-detail/detail-list";
import { gfColors } from "../../constants/gf-theme";

export default function ConcertDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const concert = getConcertDetailById(id);

  if (!concert) return null;

  return (
    <View style={styles.container}>
      <DetailHeader title={concert.title} />

      <ScrollView bounces contentContainerStyle={styles.scrollContent}>
        <DetailPoster from={concert.posterFrom} to={concert.posterTo} />

        <View style={styles.sheet}>
          <PromoBanner />
          <View style={styles.dragHandle} />

          <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
            <DetailInfoBox concert={concert} />
            <DetailList />
          </SafeAreaView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: gfColors.bg },
  scrollContent: { flexGrow: 1 },
  sheet: {
    flex: 1, backgroundColor: gfColors.bg,
    marginTop: -28, borderTopLeftRadius: 24, borderTopRightRadius: 24, overflow: "hidden",
  },
  dragHandle: {
    alignSelf: "center", width: 40, height: 4, borderRadius: 2,
    backgroundColor: gfColors.border, marginTop: 10, marginBottom: 4,
  },
});