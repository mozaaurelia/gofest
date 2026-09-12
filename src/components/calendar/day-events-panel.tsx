import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { CalendarEvent } from "../../constants/calendar-data";
import EventTimelineItem from "./event-timeline-item";
import { gfColors } from "../../constants/gf-theme";

type DayEventsPanelProps = {
  dateLabel: string;
  events: CalendarEvent[];
};

export default function DayEventsPanel({ dateLabel, events }: DayEventsPanelProps) {
  return (
    <View style={styles.wrap}>
      <View style={styles.dragHandle} />
      <Text style={styles.dateLabel}>{dateLabel}</Text>

      {events.length === 0 ? (
        <View style={styles.emptyState}>
          <View style={styles.emptyIconBox}>
            <Svg viewBox="0 0 24 24" width={20} height={20} fill="none">
              <Circle cx="10" cy="10" r="6" stroke={gfColors.textMuted} strokeWidth={1.8} />
              <Path d="m15 15 4 4" stroke={gfColors.textMuted} strokeWidth={1.8} strokeLinecap="round" />
            </Svg>
            <View style={styles.emptyBadge}>
              <Svg viewBox="0 0 24 24" width={9} height={9} fill="none">
                <Path d="M6 6l12 12M18 6 6 18" stroke="#FFFFFF" strokeWidth={2.5} strokeLinecap="round" />
              </Svg>
            </View>
          </View>
          <View>
            <Text style={styles.emptyTitle}>Nggak ada event di tanggal ini</Text>
            <Text style={styles.emptySubtitle}>Coba lihat tanggal lain</Text>
          </View>
        </View>
      ) : (
        events.map((event, i) => (
          <EventTimelineItem key={event.id} event={event} showDateBadge={false} isLast={i === events.length - 1} />
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, borderTopWidth: 1, borderTopColor: gfColors.border, paddingTop: 12 },
  dragHandle: { alignSelf: "center", width: 36, height: 4, borderRadius: 2, backgroundColor: gfColors.border, marginBottom: 16 },
  dateLabel: { fontSize: 14, fontWeight: "700", color: gfColors.text, paddingHorizontal: 20, marginBottom: 16 },
  emptyState: { flexDirection: "row", alignItems: "center", gap: 14, paddingHorizontal: 20 },
  emptyIconBox: { width: 48, height: 48, borderRadius: 14, backgroundColor: gfColors.surface, alignItems: "center", justifyContent: "center" },
  emptyBadge: { position: "absolute", top: -2, right: -2, width: 16, height: 16, borderRadius: 8, backgroundColor: "#F2545B", alignItems: "center", justifyContent: "center" },
  emptyTitle: { fontSize: 13.5, fontWeight: "700", color: gfColors.text },
  emptySubtitle: { fontSize: 11.5, color: gfColors.textMuted, marginTop: 2 },
});