import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { router } from "expo-router";
import { gfColors } from "@/constants/gf-theme";
import type { CalendarEvent } from "@/constants/calendar-data";
import { DAY_LABEL } from "../utils";

type Props = {
  event: CalendarEvent;
  isFirstOfDate: boolean;
  isLast: boolean;
};

export default function TicketEventCard({ event, isFirstOfDate, isLast }: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.dateCol}>
        {isFirstOfDate ? (
          <View style={styles.dateBadge}>
            <Text style={styles.dateMonth}>{event.month.toUpperCase()}</Text>
            <Text style={styles.dateDay}>{event.day}</Text>
            <Text style={styles.dateWeek}>{DAY_LABEL[event.dateISO] ?? ""}</Text>
          </View>
        ) : (
          <View style={styles.dateBadgeSpacer} />
        )}
        {!isLast && <View style={styles.dashedLine} />}
      </View>

      <Pressable onPress={() => router.push(`/concert/${event.id}` as any)} style={styles.card}>
        <View style={styles.poster}>
          <Image source={event.image} style={StyleSheet.absoluteFill} contentFit="cover" transition={200} />
          <View style={styles.posterFade} />
        </View>
        <View style={styles.info}>
          <Text style={styles.cardTitle} numberOfLines={2}>
            {event.name}
          </Text>
          <Text style={styles.cardMeta}>
            {event.day}-{event.day} {event.month} 2026 • {event.time} WIB
          </Text>
          <Text style={styles.cardVenue} numberOfLines={1}>
            {event.venue}, {event.city}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", paddingHorizontal: 16, gap: 12 },
  dateCol: { width: 56, alignItems: "center" },
  dateBadge: {
    width: 56,
    height: 68,
    borderRadius: 12,
    backgroundColor: "#F2F4F7",
    borderWidth: 1,
    borderColor: "#E6E9EF",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
  },
  dateBadgeSpacer: { width: 56, height: 68 },
  dateMonth: { fontSize: 10, fontWeight: "600", color: "#9AA3B2", letterSpacing: 0.6 },
  dateDay: { fontSize: 18, fontWeight: "800", color: "#1B222D", marginTop: -1 },
  dateWeek: { fontSize: 10, fontWeight: "600", color: "#9AA3B2" },
  dashedLine: { flex: 1, width: 1, borderLeftWidth: 1, borderStyle: "dashed", borderColor: "#D8DEE8", marginTop: 8, marginBottom: -8 },
  card: {
    flex: 1,
    backgroundColor: "#F8F9FB",
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E6E9EF",
    marginBottom: 18,
  },
  poster: { height: 160, backgroundColor: "#E9EDF3", overflow: "hidden" },
  posterFade: { ...StyleSheet.absoluteFill, backgroundColor: "rgba(0,0,0,0.04)" } as any,
  info: { paddingHorizontal: 14, paddingVertical: 12, gap: 3, backgroundColor: "#F8F9FB" },
  cardTitle: { fontSize: 15, fontWeight: "800", color: gfColors.text, lineHeight: 18 },
  cardMeta: { fontSize: 11.5, color: "#8A97A8" },
  cardVenue: { fontSize: 11.5, color: "#8A97A8" },
});
