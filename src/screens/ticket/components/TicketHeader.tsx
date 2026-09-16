import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Rect } from "react-native-svg";
import { gfColors } from "@/constants/gf-theme";

export default function TicketHeader() {
  return (
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
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 14,
    backgroundColor: gfColors.bg,
    borderBottomWidth: 1,
    borderBottomColor: "#EEF0F3",
  },
  headerTitle: { fontSize: 18, fontWeight: "800", color: gfColors.text },
  gridBtn: { width: 32, height: 32, alignItems: "center", justifyContent: "center" },
});
