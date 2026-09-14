import React, { useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { router } from "expo-router";
import Svg, { Rect } from "react-native-svg";
import { gfColors } from "../../constants/gf-theme";
import { CALENDAR_EVENTS, CalendarEvent } from "../../constants/calendar-data";
import { CONCERT_DETAILS } from "../../constants/concert-detail-data";
import { useSavedTickets } from "../../context/saved-tickets-context";

// mock: tiket yang sudah dibeli (statis), yang disimpan diambil dari context save
const PURCHASED = CALENDAR_EVENTS.slice(0, 3);

function concertToCalendarEvent(c: (typeof CONCERT_DETAILS)[number]): CalendarEvent {
  const parts = c.date.split(" ");
  const day = parts[0] ?? "10";
  const monthRaw = parts[1] ?? "Sep";
  const year = parts[2] ?? "2026";
  const monthMap: Record<string, string> = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    Mei: "05",
    May: "05",
    Jun: "06",
    Jul: "07",
    Agu: "08",
    Aug: "08",
    Sep: "09",
    Okt: "10",
    Oct: "10",
    Nov: "11",
    Des: "12",
    Dec: "12",
  };
  const monthNum = monthMap[monthRaw] ?? "09";
  const dateISO = `${year}-${monthNum}-${day.padStart(2, "0")}`;
  return {
    id: c.id,
    name: c.title,
    venue: c.address.split(",")[0] ?? c.title,
    city: c.address.split(",").pop()?.trim() ?? "Jakarta",
    dateISO,
    day,
    month: monthRaw,
    time: c.timeRange.split(" ")[0] ?? "19:00",
    posterFrom: c.posterFrom,
    posterTo: c.posterTo,
    markerColor: c.posterTo,
    image: c.image,
  };
}

const DAY_LABEL: Record<string, string> = {
  "2026-09-10": "THU",
  "2026-09-14": "SUN",
  "2026-09-20": "SAT",
};

type TabKey = "purchased" | "saved";

export default function TicketScreen() {
  const [activeTab, setActiveTab] = useState<TabKey>("purchased");
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

  const seenDates = useMemo(() => new Set<string>(), [activeTab, savedEvents]);

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      {/* Header mirip Event Calendar di referensi */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tiket Saya</Text>
        <Pressable hitSlop={8} style={styles.gridBtn}>
          <Svg viewBox="0 0 24 24" width={22} height={22} fill="none">
            <Rect x="3" y="3" width="7" height="7" rx="1.6" stroke="#1B222D" strokeWidth={1.8} />
            <Rect x="14" y="3" width="7" height="7" rx="1.6" stroke="#1B222D" strokeWidth={1.8} />
            <Rect x="3" y="14" width="7" height="7" rx="1.6" stroke="#1B222D" strokeWidth={1.8} />
            <Rect x="14" y="14" width="7" height="7" rx="1.6" stroke="#1B222D" strokeWidth={1.8} />
          </Svg>
        </Pressable>
      </View>

      {/* 2 pilihan di atas — kumpulan dibeli vs saved */}
      <View style={styles.tabWrap}>
        <View style={styles.tabPill}>
          <Pressable
            onPress={() => setActiveTab("purchased")}
            style={[styles.tabBtn, activeTab === "purchased" && styles.tabBtnActive]}
          >
            <Text style={[styles.tabText, activeTab === "purchased" && styles.tabTextActive]}>Dibeli</Text>
          </Pressable>
          <Pressable
            onPress={() => setActiveTab("saved")}
            style={[styles.tabBtn, activeTab === "saved" && styles.tabBtnActive]}
          >
            <Text style={[styles.tabText, activeTab === "saved" && styles.tabTextActive]}>Disimpan</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.headingBlock}>
        <Text style={styles.heading}>Handpicked events just for you</Text>
        <Text style={styles.subHeading}>
          {activeTab === "purchased"
            ? "Tiket yang sudah kamu beli — tinggal tunjukkan saat masuk"
            : "Event yang kamu simpan — beli kapan pun sebelum kehabisan"}
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {data.length === 0 ? (
          <View style={styles.emptyWrap}>
            <Text style={styles.emptyTitle}>{activeTab === "purchased" ? "Belum ada tiket" : "Belum ada yang disimpan"}</Text>
            <Text style={styles.emptySub}>
              {activeTab === "purchased"
                ? "Tiket yang kamu beli akan muncul di sini"
                : "Tap ikon bookmark di event untuk menyimpan"}
            </Text>
          </View>
        ) : (
          data.map((event, idx) => {
            // tampilkan badge tanggal hanya untuk tanggal pertama yang berbeda, seperti referensi
            const isFirstOfDate = !seenDates.has(event.dateISO);
            if (isFirstOfDate) seenDates.add(event.dateISO);
            const isLast = idx === data.length - 1;
            return (
              <View key={event.id} style={styles.row}>
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

                <Pressable
                  onPress={() => router.push(`/concert/${event.id}` as any)}
                  style={styles.card}
                >
                  <View style={styles.poster}>
                    <Image source={event.image} style={StyleSheet.absoluteFill} contentFit="cover" transition={200} />
                    {/* badge kecil pojok atas kalau ada promo, mirip referensi */}
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
          })
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: gfColors.bg },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 14,
    backgroundColor: gfColors.bg,
    // garis tipis seperti referensi
    borderBottomWidth: 1,
    borderBottomColor: "#EEF0F3",
  },
  headerTitle: { fontSize: 18, fontWeight: "800", color: gfColors.text },
  gridBtn: { width: 32, height: 32, alignItems: "center", justifyContent: "center" },

  tabWrap: { paddingHorizontal: 20, paddingTop: 14, paddingBottom: 0, backgroundColor: gfColors.bg },
  tabPill: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#EEF0F3",
  },
  tabBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
    paddingTop: 2,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  tabBtnActive: { borderBottomColor: gfColors.text },
  tabText: { fontSize: 13.5, fontWeight: "600", color: gfColors.textMuted },
  tabTextActive: { color: gfColors.text },

  headingBlock: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 10, backgroundColor: gfColors.bg },
  heading: { fontSize: 18, fontWeight: "800", color: gfColors.text },
  subHeading: { fontSize: 12.5, color: gfColors.textMuted, marginTop: 4, lineHeight: 16 },

  scrollContent: { paddingTop: 8, paddingBottom: 120 },
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
  posterFade: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.04)" },
  info: { paddingHorizontal: 14, paddingVertical: 12, gap: 3, backgroundColor: "#F8F9FB" },
  cardTitle: { fontSize: 15, fontWeight: "800", color: gfColors.text, lineHeight: 18 },
  cardMeta: { fontSize: 11.5, color: "#8A97A8" },
  cardVenue: { fontSize: 11.5, color: "#8A97A8" },

  emptyWrap: { paddingHorizontal: 32, paddingTop: 48, alignItems: "center", gap: 6 },
  emptyTitle: { fontSize: 16, fontWeight: "800", color: gfColors.text },
  emptySub: { fontSize: 12.5, color: gfColors.textMuted, textAlign: "center" },
});
