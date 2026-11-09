import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { getConcertDetailById } from "@/constants/concert-detail-data";
import { useTranslation } from "@/context/language-context";
import { eventAddress, eventDate, eventSubtitle } from "@/utils/event-i18n";
import { WristbandHeader, WristbandSectionHeader, WristbandContent } from "@/components/wristband";

export default function WristbandScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useTranslation();
  const concert = getConcertDetailById(id);

  const title = concert
    ? `${concert.title} ${eventSubtitle(t, concert) ?? ""}`.trim()
    : "NCT 127 5TH TOUR 'NEO CITY : JAKARTA";
  const displayTitle = title.length > 32 ? `${title.slice(0, 32)}...` : title;
  const subtitle = concert
    ? `${eventDate(t, concert)} • ${eventAddress(t, concert)}`
    : "3 Oct 2026 • Indonesia Arena, Tanah Abang, Jakarta ...";

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <WristbandHeader title={displayTitle} subtitle={subtitle} />

      <ScrollView bounces contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <WristbandSectionHeader />

        <View style={styles.divider} />

        <WristbandContent />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    flexGrow: 1,
  },
  divider: {
    height: 8,
    backgroundColor: "#F0F2F4",
  },
});
