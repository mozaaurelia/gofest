import React, { useMemo, useState } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { getConcertDetailById } from "@/constants/concert-detail-data";
import { gfColors } from "@/constants/gf-theme";
import { TICKET_SALE_ITEMS } from "@/constants/ticket-sale-data";
import { useTranslation } from "@/context/language-context";
import SeatMapHeader from "@/components/seat-map/seat-map-header";
import SeatMapSectionHeader from "@/components/seat-map/seat-map-section-header";
import SeatMapCategorySection from "@/components/seat-map/seat-map-category-section";
import SeatMapBenefitSection from "@/components/seat-map/seat-map-benefit-section";
import SeatMapImage from "@/components/seat-map/seat-map-image";
import SeatMapFullscreenViewer from "@/components/seat-map/seat-map-fullscreen-viewer";
import { TicketOptionsSection, TicketFooterBar } from "@/components/seat-map/ticket";

export default function SeatMapScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const concert = getConcertDetailById(id);
  const [viewerVisible, setViewerVisible] = useState(false);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const { t } = useTranslation();

  const title = concert ? `${concert.title} in Jakarta` : "T.O.P PRE-STUDIO 2026 in Jakarta";
  const subtitle = concert ? `${concert.date} • ${concert.address}` : "19 Sep 2026 • Istora Senayan, Tanah Abang, Jakarta ...";

  const handleQtyChange = (tid: string, v: number) => {
    setQuantities((prev) => ({ ...prev, [tid]: v }));
  };

  const { totalQty, totalPrice } = useMemo(() => {
    let qty = 0;
    let price = 0;
    for (const it of TICKET_SALE_ITEMS) {
      const q = quantities[it.id] ?? 0;
      qty += q;
      price += q * it.price;
    }
    return { totalQty: qty, totalPrice: price };
  }, [quantities]);

  const handleOrder = () => {
    if (totalQty === 0) {
      Alert.alert(t("ticket.chooseTicketAlertTitle"), t("ticket.chooseTicketAlertMsg"));
      return;
    }
    Alert.alert(t("ticket.orderAlertTitle"), t("ticket.orderAlertMsg", { qty: String(totalQty), price: totalPrice.toLocaleString("id-ID") }));
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <SeatMapHeader title={title} subtitle={subtitle} />

      <ScrollView bounces contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <SeatMapSectionHeader title={t("seatmap.title")} />

        <View style={styles.divider} />

        <SeatMapCategorySection />

        <SeatMapBenefitSection />

        {/* Photocard image — tap to open fullscreen like reference BIGBANG Seat Map */}
        <SeatMapImage image={concert?.image} onPress={() => setViewerVisible(true)} />

        {/* Ticket options — di bawah gambar, seperti GENERAL SALE di referensi */}
        <TicketOptionsSection quantities={quantities} onChange={handleQtyChange} />
      </ScrollView>

      <TicketFooterBar totalQty={totalQty} totalPrice={totalPrice} onPress={handleOrder} />

      <SeatMapFullscreenViewer visible={viewerVisible} onClose={() => setViewerVisible(false)} image={concert?.image} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gfColors.bg,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 16,
  },
  divider: {
    height: 8,
    backgroundColor: "#F0F2F4",
  },
});
