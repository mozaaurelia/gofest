import React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { getConcertDetailById } from "@/constants/concert-detail-data";
import { BoardingPassCard, BoardingPassHeader } from "@/components/boarding-pass";
import { gfColors } from "@/constants/gf-theme";
import { useTranslation } from "@/context/language-context";
import { eventAddress, eventDate } from "@/utils/event-i18n";

function toMinutes(time: string) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function formatClock(totalMinutes: number) {
  const normalized = ((totalMinutes % 1440) + 1440) % 1440;
  const h = Math.floor(normalized / 60);
  const m = normalized % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

// Ambil jam mulai/selesai dari data konser, contoh: "19:00 - 22:00 WIB"
function getShowTimes(timeRange?: string) {
  if (!timeRange) return null;
  const match = timeRange.match(/(\d{1,2}):(\d{2})\s*[–-]\s*(\d{1,2}):(\d{2})/);
  if (!match) return null;
  const start = `${match[1].padStart(2, "0")}:${match[2]}`;
  const end = `${match[3].padStart(2, "0")}:${match[4]}`;
  return { boarding: formatClock(toMinutes(start) - 30), start, end };
}

export default function BoardingPassScreen() {
  const { id, qty, price } = useLocalSearchParams<{ id: string; qty: string; price: string }>();
  const { t } = useTranslation();
  const concert = getConcertDetailById(id);
  const totalQty = qty ? parseInt(String(qty), 10) : 1;

  // Mapping data konser ke boarding pass biar terasa personal, tapi layout tetap persis contoh
  // Jika ada konser, pakai inisial kota venue sebagai route, passenger = moza
  const fromCode = "CGK";
  const fromCity = concert ? concert.address.split(",")[0] : "Paris, France";
  const toCode = "JKT";
  const toCity = "Jakarta, Indonesia";
  const dateLabel = concert ? eventDate(t, concert) : "March 12, Tue";
  const showTimes = getShowTimes(concert?.timeRange);
  const passenger = "moza";
  // Seat diambil dari kategori — mock 1C, gate 37 seperti contoh
  const seat = totalQty > 1 ? t("boarding.seats", { qty: totalQty }) : "1C";

  return (
    <View style={styles.root}>
      <SafeAreaView edges={["top"]} style={styles.safe}>
        <BoardingPassHeader />
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false} bounces={false}>
          <BoardingPassCard
            code={`AB ${id ?? "4723211"}`.toUpperCase()}
            aircraft="gofest"
            fromCode={fromCode}
            fromCity={fromCity}
            toCode={toCode}
            toCity={toCity}
            boardingTime={showTimes?.boarding ?? "02:20 AM"}
            departure={showTimes?.start ?? "03:00 AM"}
            arrival={showTimes?.end ?? "11:15 AM"}
            date={dateLabel}
            clazz={totalQty > 1 ? t("boarding.classTickets", { qty: totalQty }) : t("boarding.classEconomy")}
            passenger={passenger}
            terminal="1"
            gate="37"
            seat={seat}
          />

          {/* info tambahan total */}
          <View style={styles.summary}>
            <Text style={styles.summaryText}>
              {t("boarding.summary", { qty: totalQty })} • {price ? `Rp. ${Number(price).toLocaleString("id-ID")}` : ""}
            </Text>
            {concert ? (
              <Text style={styles.summarySub} numberOfLines={2}>
                {concert.title} — {eventAddress(t, concert)}
              </Text>
            ) : null}
          </View>

          <View style={styles.actions}>
            <Pressable onPress={() => router.replace("/(tabs)" as any)} style={({ pressed }) => [styles.btnPrimary, pressed && { opacity: 0.85 }]}>
              <Text style={styles.btnPrimaryText}>{t("boarding.backHome")}</Text>
            </Pressable>
            <Pressable onPress={() => router.back()} style={({ pressed }) => [styles.btnGhost, pressed && { opacity: 0.7 }]}>
              <Text style={styles.btnGhostText}>{t("boarding.otherTickets")}</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: gfColors.bg },
  safe: { flex: 1, backgroundColor: gfColors.bg },
  scrollContent: { paddingBottom: 24, paddingTop: 8 },
  summary: { marginTop: 16, alignItems: "center", paddingHorizontal: 16 },
  summaryText: { fontSize: 13, fontWeight: "700", color: gfColors.text, textAlign: "center" },
  summarySub: { fontSize: 11, color: gfColors.textMuted, marginTop: 4, textAlign: "center" },
  actions: { marginTop: 20, paddingHorizontal: 16, gap: 10 },
  btnPrimary: {
    backgroundColor: gfColors.teal,
    borderRadius: 12,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  btnPrimaryText: { fontSize: 14, fontWeight: "800", color: "#FFFFFF" },
  btnGhost: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: gfColors.border,
    borderRadius: 12,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  btnGhostText: { fontSize: 14, fontWeight: "700", color: gfColors.text },
});
