import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { router } from "expo-router";
import { CalendarEvent } from "../../constants/calendar-data";
import { gfColors } from "../../constants/gf-theme";

type EventTimelineItemProps = {
  event: CalendarEvent;
  showDateBadge: boolean;
  isLast: boolean;
};

export default function EventTimelineItem({ event, showDateBadge, isLast }: EventTimelineItemProps) {
  return (
    <View style={styles.row}>
      <View style={styles.dateCol}>
        {showDateBadge ? (
          <View style={styles.dateBadge}>
            <Text style={styles.month}>{event.month.toUpperCase()}</Text>
            <Text style={styles.day}>{event.day}</Text>
          </View>
        ) : (
          <View style={styles.dateBadgeSpacer} />
        )}
        {!isLast && <View style={styles.line} />}
      </View>

      <Pressable style={styles.card} onPress={() => router.push(`/concert/${event.id}`)}>
        <View style={styles.poster}>
          <Image source={event.image} style={StyleSheet.absoluteFill} contentFit="cover" transition={200} />
          <View style={[StyleSheet.absoluteFill, { backgroundColor: "rgba(0,0,0,0.16)" }]} />
        </View>
        <View style={styles.perforationRow}>
          <View style={styles.notch} />
          <View style={styles.dash} />
          <View style={styles.notch} />
        </View>
        <View style={styles.info}>
          <Text style={styles.name} numberOfLines={1}>{event.name}</Text>
          <Text style={styles.meta}>{event.time} WIB</Text>
          <Text style={styles.meta}>{event.venue}, {event.city}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", paddingHorizontal: 20, gap: 14 },
  dateCol: { width: 54, alignItems: "center" },
  dateBadge: { width: 54, height: 54, borderRadius: 12, backgroundColor: gfColors.surface, borderWidth: 1, borderColor: gfColors.border, alignItems: "center", justifyContent: "center" },
  dateBadgeSpacer: { width: 54, height: 54 },
  month: { fontSize: 10, color: gfColors.textMuted },
  day: { fontSize: 18, fontWeight: "800", color: gfColors.text },
  line: { flex: 1, width: 1, backgroundColor: gfColors.border, marginTop: 6, marginBottom: -6 },
  card: { flex: 1, backgroundColor: gfColors.surface, borderRadius: 18, overflow: "hidden", borderWidth: 1, borderColor: gfColors.border, marginBottom: 24 },
  poster: { height: 150, overflow: "hidden", backgroundColor: gfColors.surface },
  perforationRow: { flexDirection: "row", alignItems: "center", marginTop: -1 },
  dash: { flex: 1, borderTopWidth: 2, borderStyle: "dashed", borderColor: gfColors.border },
  notch: { width: 16, height: 16, borderRadius: 8, backgroundColor: gfColors.bg, marginHorizontal: -8 },
  info: { padding: 14 },
  name: { fontSize: 14.5, fontWeight: "800", color: gfColors.text },
  meta: { fontSize: 11.5, color: gfColors.textMuted, marginTop: 3 },
});