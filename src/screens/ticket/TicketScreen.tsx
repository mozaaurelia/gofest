import React, { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { gfColors } from "@/constants/gf-theme";
import { CALENDAR_EVENTS, CalendarEvent } from "@/constants/calendar-data";
import { CONCERT_DETAILS } from "@/constants/concert-detail-data";
import { useSavedTickets } from "@/context/saved-tickets-context";

import TicketHeader from "./components/TicketHeader";
import TicketTabs, { TicketTabKey } from "./components/TicketTabs";
import TicketEventCard from "./components/TicketEventCard";
import TicketEmptyState from "./components/TicketEmptyState";
import { PURCHASED, concertToCalendarEvent } from "./utils";

export default function TicketScreen() {
  const [activeTab, setActiveTab] = useState<TicketTabKey>("purchased");
  const { savedIds } = useSavedTickets();

  const savedEvents = useMemo(() => {
    const result: CalendarEvent[] = [];
    savedIds.forEach((id) => {
      const cal = CALENDAR_EVENTS.find((e) => e.id === id);
      if (cal) {
        result.push(cal);
        return;
      }
      const concert = CONCERT_DETAILS.find((c) => c.id === id);
      if (concert) result.push(concertToCalendarEvent(concert));
    });
    return result;
  }, [savedIds]);

  const data: CalendarEvent[] = activeTab === "purchased" ? PURCHASED : savedEvents;
  const isEmpty = data.length === 0;
  const seenDates = useMemo(() => new Set<string>(), [activeTab, savedEvents]);

  return (
    <SafeAreaView style={[styles.safe, isEmpty && styles.safeEmpty]} edges={["top"]}>
      <TicketHeader />

      {/* keep tabs even when empty — so user can switch Dibeli/Disimpan */}
      <TicketTabs activeTab={activeTab} onChange={setActiveTab} />

      {isEmpty ? (
        <View style={styles.emptyContainer}>
          <TicketEmptyState activeTab={activeTab} />
        </View>
      ) : (
        <>
          <View style={styles.headingBlock}>
            <Text style={styles.heading}>Handpicked events just for you</Text>
            <Text style={styles.subHeading}>
              {activeTab === "purchased"
                ? "Tiket yang sudah kamu beli — tinggal tunjukkan saat masuk"
                : "Event yang kamu simpan — beli kapan pun sebelum kehabisan"}
            </Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
            {data.map((event, idx) => {
              const isFirstOfDate = !seenDates.has(event.dateISO);
              if (isFirstOfDate) seenDates.add(event.dateISO);
              const isLast = idx === data.length - 1;
              return <TicketEventCard key={event.id} event={event} isFirstOfDate={isFirstOfDate} isLast={isLast} />;
            })}
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: gfColors.bg },
  safeEmpty: { backgroundColor: "#FFFFFF" },
  emptyContainer: { flex: 1 },
  headingBlock: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 10, backgroundColor: gfColors.bg },
  heading: { fontSize: 18, fontWeight: "800", color: gfColors.text },
  subHeading: { fontSize: 12.5, color: gfColors.textMuted, marginTop: 4, lineHeight: 16 },
  scrollContent: { paddingTop: 8, paddingBottom: 120 },
});
