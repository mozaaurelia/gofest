import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Path, Rect } from "react-native-svg";
import { useTranslation } from "@/context/language-context";

type Props = {
  onActionPress?: () => void;
};

export default function TicketHeader({ onActionPress }: Props) {
  const { t } = useTranslation();
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{t("header.myTickets")}</Text>
      <Pressable onPress={onActionPress} hitSlop={10} style={styles.actionBtn}>
        <Svg viewBox="0 0 24 24" width={22} height={22} fill="none">
          <Rect x="3" y="4" width="18" height="16" rx={3.2} stroke="#1B3A5E" strokeWidth={1.7} />
          <Path d="M7 14.5 L10 11.5 L13 13.5 L17 9.5" stroke="#1B3A5E" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
          <Circle cx={17} cy={7} r={1.8} fill="#1B3A5E" stroke="#1B3A5E" strokeWidth={0.6} />
        </Svg>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 14,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#EEF0F3",
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: "#1A1E2E",
    letterSpacing: 0.1,
  },
  actionBtn: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
