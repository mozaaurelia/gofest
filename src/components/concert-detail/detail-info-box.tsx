import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Rect, Path, Circle } from "react-native-svg";
import { ConcertDetail } from "../../constants/concert-detail-data";
import { gfColors } from "../../constants/gf-theme";

type DetailInfoBoxProps = { concert: ConcertDetail };

export default function DetailInfoBox({ concert }: DetailInfoBoxProps) {
  return (
    <View style={styles.box}>
      <Row icon={<CalendarIcon />} text={concert.date} />
      <Row icon={<ClockIcon />} text={concert.timeRange} />
      <Row icon={<PinIcon />} text={concert.address} />
    </View>
  );
}

function Row({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <View style={styles.row}>
      {icon}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

function CalendarIcon() { return <Svg viewBox="0 0 24 24" width={16} height={16} fill="none"><Rect x="4" y="5.5" width="16" height="14.5" rx="2" stroke={gfColors.textMuted} strokeWidth={1.8} /><Path d="M4 10h16M8 3.5v3M16 3.5v3" stroke={gfColors.textMuted} strokeWidth={1.8} strokeLinecap="round" /></Svg>; }
function ClockIcon() { return <Svg viewBox="0 0 24 24" width={16} height={16} fill="none"><Circle cx="12" cy="12" r="9" stroke={gfColors.textMuted} strokeWidth={1.8} /><Path d="M12 7v5l3.5 2" stroke={gfColors.textMuted} strokeWidth={1.8} strokeLinecap="round" /></Svg>; }
function PinIcon() { return <Svg viewBox="0 0 24 24" width={16} height={16} fill="none"><Path d="M12 21s-6.5-5.9-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.1-6.5 11-6.5 11Z" stroke={gfColors.textMuted} strokeWidth={1.8} /><Circle cx="12" cy="10" r="2.2" stroke={gfColors.textMuted} strokeWidth={1.8} /></Svg>; }

const styles = StyleSheet.create({
  box: { backgroundColor: gfColors.surface, borderRadius: 16, padding: 16, marginHorizontal: 20, marginTop: 16, gap: 10 },
  row: { flexDirection: "row", alignItems: "center", gap: 10 },
  text: { flex: 1, fontSize: 13, color: gfColors.text },
});