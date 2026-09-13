import React from "react";
import { StyleSheet, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import Svg, { Path, Rect, Circle } from "react-native-svg";
import DetailListItem from "./detail-list-item";
import { gfColors } from "../../constants/gf-theme";

const ICON_SIZE = 20;
const ICON_COLOR = gfColors.textMuted;

export default function DetailList() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View style={styles.wrap}>
      <DetailListItem
        icon={<Svg viewBox="0 0 24 24" width={ICON_SIZE} height={ICON_SIZE} fill="none"><Path d="M4 8.5 8 4.5a2 2 0 0 1 2.8 0l8.7 8.7a2 2 0 0 1 0 2.8L15.5 20a2 2 0 0 1-2.8 0L4 11.3a2 2 0 0 1 0-2.8Z" stroke={ICON_COLOR} strokeWidth={1.8} strokeLinejoin="round" /></Svg>}
        title="Info Penjualan Tiket"
        subtitle="Jadwal & cara pembelian tiket"
      />
      <DetailListItem
        icon={<Svg viewBox="0 0 24 24" width={ICON_SIZE} height={ICON_SIZE} fill="none"><Path d="M12 21s-6.5-5.9-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.1-6.5 11-6.5 11Z" stroke={ICON_COLOR} strokeWidth={1.8} /><Circle cx="12" cy="10" r="2.2" stroke={ICON_COLOR} strokeWidth={1.8} /></Svg>}
        title="Denah Kursi"
        subtitle="Lihat dan cari kursi kamu"
        onPress={() => {
          const targetId = Array.isArray(id) ? id[0] : (id as string | undefined);
          if (targetId) router.push({ pathname: "/seat-map/[id]", params: { id: targetId } } as any);
          else router.push({ pathname: "/seat-map/[id]", params: { id: "h1" } } as any);
        }}
      />
      <DetailListItem
        icon={<Svg viewBox="0 0 24 24" width={ICON_SIZE} height={ICON_SIZE} fill="none"><Rect x="3" y="9" width="18" height="6" rx="2" stroke={ICON_COLOR} strokeWidth={1.8} /><Path d="M8 9v6M16 9v6" stroke={ICON_COLOR} strokeWidth={1.8} strokeLinecap="round" /></Svg>}
        title="Penukaran Wristband"
        subtitle="Tukar wristband dulu biar nggak antre"
      />
      <DetailListItem
        icon={<Svg viewBox="0 0 24 24" width={ICON_SIZE} height={ICON_SIZE} fill="none"><Circle cx="12" cy="12" r="9" stroke={ICON_COLOR} strokeWidth={1.8} /><Path d="M9.5 9a2.5 2.5 0 0 1 5 .5c0 1.5-2 1.7-2 3.2M12 16.5h.01" stroke={ICON_COLOR} strokeWidth={1.8} strokeLinecap="round" /></Svg>}
        title="Ada Pertanyaan?"
        subtitle="Jawaban cepat buat pertanyaanmu"
      />
      <DetailListItem
        icon={<Svg viewBox="0 0 24 24" width={ICON_SIZE} height={ICON_SIZE} fill="none"><Path d="M3 11v2a1 1 0 0 0 1 1h2l9 4V6l-9 4H4a1 1 0 0 0-1 1Z" stroke={ICON_COLOR} strokeWidth={1.8} strokeLinejoin="round" /><Path d="M19 9a4 4 0 0 1 0 6" stroke={ICON_COLOR} strokeWidth={1.8} strokeLinecap="round" /></Svg>}
        title="Panduan Event"
        subtitle="Hal yang perlu disiapin sebelum hari-H"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingHorizontal: 20, marginTop: 4 },
});