import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Rect, Path } from "react-native-svg";
import { gfColors } from "../../constants/gf-theme";
import { useTranslation } from "@/context/language-context";

export type CalendarViewMode = "list" | "grid";

type CalendarHeaderProps = {
  mode: CalendarViewMode;
  onToggleMode: () => void;
};

export default function CalendarHeader({ mode, onToggleMode }: CalendarHeaderProps) {
  const { t } = useTranslation();
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{t("calendar.title")}</Text>
      <Pressable onPress={onToggleMode} style={styles.iconButton}>
        {mode === "list" ? <GridIcon /> : <ListIcon />}
      </Pressable>
    </View>
  );
}

function GridIcon() {
  return (
    <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
      <Rect x="4" y="4" width="6" height="6" rx="1.2" stroke={gfColors.text} strokeWidth={1.8} />
      <Rect x="14" y="4" width="6" height="6" rx="1.2" stroke={gfColors.text} strokeWidth={1.8} />
      <Rect x="4" y="14" width="6" height="6" rx="1.2" stroke={gfColors.text} strokeWidth={1.8} />
      <Rect x="14" y="14" width="6" height="6" rx="1.2" stroke={gfColors.text} strokeWidth={1.8} />
    </Svg>
  );
}

function ListIcon() {
  return (
    <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
      <Rect x="4" y="4" width="16" height="16" rx="4" stroke={gfColors.text} strokeWidth={1.8} />
      <Path d="M8 10h8M8 14h5" stroke={gfColors.text} strokeWidth={1.8} strokeLinecap="round" />
    </Svg>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, paddingTop: 8 },
  title: { fontSize: 20, fontWeight: "800", color: gfColors.text },
  iconButton: { width: 38, height: 38, borderRadius: 10, borderWidth: 1, borderColor: gfColors.border, alignItems: "center", justifyContent: "center" },
});