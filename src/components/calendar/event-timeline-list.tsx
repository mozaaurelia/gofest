import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { CALENDAR_EVENTS } from "../../constants/calendar-data";
import EventTimelineItem from "./event-timeline-item";
import { gfColors } from "../../constants/gf-theme";

export default function EventTimelineList() {
  const seenDates = new Set<string>();

  return (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Text style={styles.sectionTitle}>Event pilihan buat kamu</Text>
      <Text style={styles.sectionSubtitle}>Ditemukan khusus buat selera kamu</Text>

      {CALENDAR_EVENTS.map((event, i) => {
        const showDateBadge = !seenDates.has(event.dateISO);
        seenDates.add(event.dateISO);
        return (
          <EventTimelineItem
            key={event.id}
            event={event}
            showDateBadge={showDateBadge}
            isLast={i === CALENDAR_EVENTS.length - 1}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { paddingTop: 20, paddingBottom: 120 },
  sectionTitle: { fontSize: 18, fontWeight: "800", color: gfColors.text, paddingHorizontal: 20 },
  sectionSubtitle: { fontSize: 12, color: gfColors.textMuted, paddingHorizontal: 20, marginTop: 4, marginBottom: 16 },
});