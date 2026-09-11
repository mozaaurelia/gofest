import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path, Rect, Circle } from "react-native-svg";
import DetailListItem from "./detail-list-item";
import { gfColors } from "../../constants/gf-theme";

const ICON_SIZE = 18;

export default function DetailList() {
  return (
    <View style={styles.wrap}>
      <DetailListItem
        icon={<Svg viewBox="0 0 24 24" width={ICON_SIZE} height={ICON_SIZE} fill="none"><Path d="M4 8.5 8 4.5a2 2 0 0 1 2.8 0l8.7 8.7a2 2 0 0 1 0 2.8L15.5 20a2 2 0 0 1-2.8 0L4 11.3a2 2 0 0 1 0-2.8Z" stroke={gfColors.teal} strokeWidth={1.8} strokeLinejoin="round" /></Svg>}
        iconBg="rgba(47,168,192,0.12)"
        title="Info Penjualan Tiket"
        subtitle="Jadwal & cara pembelian tiket"
      />
      <DetailListItem
        icon={<Svg viewBox="0 0 24 24" width={ICON_SIZE} height={ICON_SIZE} fill="none"><Path d="M12 21s-6.5-5.9-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.1-6.5 11-6.5 11Z" stroke={gfColors.lime} strokeWidth={1.8} /><Circle cx="12" cy="10" r="2.2" stroke={gfColors.lime} strokeWidth={1.8} /></Svg>}
        iconBg="rgba(143,209,79,0.12)"
        title="Denah Kursi"
        subtitle="Lihat dan cari kursi kamu"
      />
      <DetailListItem
        icon={<Svg viewBox="0 0 24 24" width={ICON_SIZE} height={ICON_SIZE} fill="none"><Rect x="3" y="9" width="18" height="6" rx="2" stroke={gfColors.green} strokeWidth={1.8} /><Path d="M8 9v6M16 9v6" stroke={gfColors.green} strokeWidth={1.8} strokeLinecap="round" /></Svg>}
        iconBg="rgba(123,201,67,0.12)"
        title="Penukaran Wristband"
        subtitle="Tukar wristband dulu biar nggak antre"
      />
      <DetailListItem
        icon={<Svg viewBox="0 0 24 24" width={ICON_SIZE} height={ICON_SIZE} fill="none"><Circle cx="12" cy="12" r="9" stroke={gfColors.teal} strokeWidth={1.8} /><Path d="M9.5 9a2.5 2.5 0 0 1 5 .5c0 1.5-2 1.7-2 3.2M12 16.5h.01" stroke={gfColors.teal} strokeWidth={1.8} strokeLinecap="round" /></Svg>}
        iconBg="rgba(47,168,192,0.12)"
        title="Ada Pertanyaan?"
        subtitle="Jawaban cepat buat pertanyaanmu"
      />
      <DetailListItem
        icon={<Svg viewBox="0 0 24 24" width={ICON_SIZE} height={ICON_SIZE} fill="none"><Path d="M3 11v2a1 1 0 0 0 1 1h2l9 4V6l-9 4H4a1 1 0 0 0-1 1Z" stroke={gfColors.lime} strokeWidth={1.8} strokeLinejoin="round" /><Path d="M19 9a4 4 0 0 1 0 6" stroke={gfColors.lime} strokeWidth={1.8} strokeLinecap="round" /></Svg>}
        iconBg="rgba(143,209,79,0.12)"
        title="Panduan Event"
        subtitle="Hal yang perlu disiapin sebelum hari-H"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingHorizontal: 20, marginTop: 4 },
});