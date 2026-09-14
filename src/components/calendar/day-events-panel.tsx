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
            <Svg viewBox="0 0 24 24" width={22} height={22} fill="none">
              <Circle cx="10.5" cy="10.5" r="6.5" stroke="#9CA3AF" strokeWidth={1.8} />
              <Path d="m15.5 15.5 4 4" stroke="#9CA3AF" strokeWidth={1.9} strokeLinecap="round" />
            </Svg>
            <View style={styles.emptyBadge}>
              <Svg viewBox="0 0 24 24" width={10} height={10} fill="none">
                <Path d="M6 6l12 12M18 6 6 18" stroke="#FFFFFF" strokeWidth={2.6} strokeLinecap="round" />
              </Svg>
            </View>
          </View>
          <View style={styles.emptyTextWrap}>
            <Text style={styles.emptyTitle}>No event on this date</Text>
            <Text style={styles.emptySubtitle}>Try browsing other dates</Text>
          </View>
        </View>
      ) : (
        <View style={styles.eventList}>
          {events.map((event, i) => (
            <EventTimelineItem key={event.id} event={event} showDateBadge={false} isLast={i === events.length - 1} />
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { borderTopWidth: 1, borderTopColor: "#E5E7EB", paddingTop: 12, backgroundColor: gfColors.bg },
  dragHandle: {
    alignSelf: "center",
    width: 44,
    height: 4,
    borderRadius: 99,
    backgroundColor: "#E5E7EB",
    marginBottom: 16,
  },
  dateLabel: { fontSize: 15, fontWeight: "700", color: gfColors.text, paddingHorizontal: 20, marginBottom: 18 },
  emptyState: { flexDirection: "row", alignItems: "center", gap: 14, paddingHorizontal: 20, paddingTop: 4 },
  emptyIconBox: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: "#F0F2F4",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyBadge: {
    position: "absolute",
    top: 2,
    right: 2,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#EF4444",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#FFFFFF",
  },
  emptyTextWrap: { flex: 1 },
  emptyTitle: { fontSize: 15, fontWeight: "700", color: gfColors.text },
  emptySubtitle: { fontSize: 12.5, color: "#6B7280", marginTop: 3 },
  eventList: { paddingBottom: 24 },
});
