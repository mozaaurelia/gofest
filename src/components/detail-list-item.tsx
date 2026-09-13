import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { gfColors } from "../constants/gf-theme";

type DetailListItemProps = {
  icon: React.ReactNode;
  iconBg?: string;
  title: string;
  subtitle: string;
};

export default function DetailListItem({ icon, title, subtitle }: DetailListItemProps) {
  return (
    <Pressable style={styles.row}>
      <View style={styles.iconWrap}>{icon}</View>
      <View style={styles.textWrap}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
        <Path d="M9 6l6 6-6 6" stroke={gfColors.textMuted} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", gap: 12, paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: gfColors.border },
  iconWrap: { width: 22, height: 22, alignItems: "center", justifyContent: "center" },
  textWrap: { flex: 1 },
  title: { fontSize: 13.5, fontWeight: "700", color: gfColors.text },
  subtitle: { fontSize: 11.5, color: gfColors.textMuted, marginTop: 2 },
});