import React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { getConcertDetailById } from "@/constants/concert-detail-data";
import { BoardingPassCard, BoardingPassHeader } from "@/components/boarding-pass";
import { gfColors } from "@/constants/gf-theme";

export default function BoardingPassScreen() {
  const { id, qty, price } = useLocalSearchParams<{ id: string; qty: string; price: string }>();
  const concert = getConcertDetailById(id);
  const totalQty = qty ? parseInt(String(qty), 10) : 1;

  // Mapping data konser ke boarding pass biar terasa personal, tapi layout tetap persis contoh
  // Jika ada konser, pakai inisial kota venue sebagai route, passenger = moza
  const fromCode = "CGK";
  const fromCity = concert ? concert.address.split(",")[0] : "Paris, France";
  const toCode = "JKT";
  const toCity = "Jakarta, Indonesia";
  const dateLabel = concert ? concert.date : "March 12, Tue";
  const passenger = "moza";
  // Seat diambil dari kategori — mock 1C, gate 37 seperti contoh
  const seat = totalQty > 1 ? `${totalQty} Seats • 1C` : "1C";

  return (
    <View style={styles.root}>
      <SafeAreaView edges={["top"]} style={styles.safe}>
        <BoardingPassHeader />
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false} bounces={false}>
          <BoardingPassCard
            code={`AB ${id ?? "4723211"}`.toUpperCase()}
            aircraft="AIRBUS"
            fromCode={fromCode}
            fromCity={fromCity}
            toCode={toCode}
            toCity={toCity}
            boardingTime="02:20 AM"
            departure="03:00 AM"
            arrival="11:15 AM"
            date={dateLabel}
            clazz={totalQty > 1 ? `${totalQty} Tickets` : "Economy"}
            passenger={passenger}
            terminal="1"
            gate="37"
            seat={seat}
          />

          {/* info tambahan total */}
          <View style={styles.summary}>
            <Text style={styles.summaryText}>
              {totalQty} tiket • {price ? `Rp. ${Number(price).toLocaleString("id-ID")}` : ""}
            </Text>
            {concert ? (
              <Text style={styles.summarySub} numberOfLines={2}>
                {concert.title} — {concert.address}
              </Text>
            ) : null}
          </View>

          <View style={styles.actions}>
            <Pressable onPress={() => router.replace("/(tabs)" as any)} style={({ pressed }) => [styles.btnPrimary, pressed && { opacity: 0.85 }]}>
              <Text style={styles.btnPrimaryText}>Kembali ke Home</Text>
            </Pressable>
            <Pressable onPress={() => router.back()} style={({ pressed }) => [styles.btnGhost, pressed && { opacity: 0.7 }]}>
              <Text style={styles.btnGhostText}>Lihat Tiket Lain</Text>
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
