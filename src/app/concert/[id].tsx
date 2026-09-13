import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { getConcertDetailById } from "../../constants/concert-detail-data";
import DetailHeader from "../../components/concert-detail/detail-header";
import DetailPoster from "../../components/concert-detail/detail-poster";
import PromoBanner from "../../components/concert-detail/promo-banner";
import DetailInfoBox from "../../components/concert-detail/detail-info-box";
import DetailList from "../../components/concert-detail/detail-list";
import FloatingNav from "../../components/navigation/floating-nav";
import { gfColors } from "../../constants/gf-theme";

export default function ConcertDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const concert = getConcertDetailById(id);

  if (!concert) return null;

  return (
    <View style={styles.container}>
      <DetailHeader title={concert.title} />

      <ScrollView bounces contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <DetailPoster from={concert.posterFrom} to={concert.posterTo} image={concert.image} />

        <View style={styles.headline}>
          <View style={styles.headlineRow}>
            {concert.subtitle ? <Text style={styles.headlineSub}>{concert.subtitle} </Text> : null}
            <Text style={styles.headlineTitle}>{concert.title}</Text>
            {concert.tour ? <Text style={styles.headlineTour}> [{concert.tour}]</Text> : null}
          </View>
        </View>

        <View style={styles.sheet}>
          <PromoBanner />
          <View style={styles.dragHandle} />

          <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
            <DetailInfoBox concert={concert} />
            <DetailList />
          </SafeAreaView>
        </View>
      </ScrollView>

      <FloatingNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: gfColors.bg },
  scrollContent: { flexGrow: 1, paddingBottom: 110 },
  headline: { paddingHorizontal: 20, paddingTop: 18 },
  headlineRow: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" },
  headlineSub: { fontSize: 16, color: gfColors.textMuted, fontWeight: "600" },
  headlineTitle: { fontSize: 16, color: gfColors.text, fontWeight: "800" },
  headlineTour: { fontSize: 16, color: gfColors.teal, fontWeight: "700" },
  sheet: {
    flex: 1, backgroundColor: gfColors.bg,
    marginTop: 6, borderTopLeftRadius: 24, borderTopRightRadius: 24, overflow: "hidden",
  },
  dragHandle: {
    alignSelf: "center", width: 40, height: 4, borderRadius: 2,
    backgroundColor: gfColors.border, marginTop: 10, marginBottom: 4,
  },
});