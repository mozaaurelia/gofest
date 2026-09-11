import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import TicketIcon from "../ticket-icon";

const DARK_TEXT = "#1B222D";

export default function HomeNavbar() {
  return (
    <View style={styles.row}>
      <Pressable style={styles.iconButton}>
        <Svg viewBox="0 0 24 24" width={20} height={20} fill="none">
          <Path d="M4 7h16M4 12h16M4 17h16" stroke={DARK_TEXT} strokeWidth={1.8} strokeLinecap="round" />
        </Svg>
      </Pressable>

      <View style={styles.logoRow}>
        <TicketIcon size={36} />
        <Text style={styles.wordmark}>Go fest!</Text>
      </View>

      <Pressable style={styles.iconButton}>
        <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
          <Path d="M4 8.5 8 4.5a2 2 0 0 1 2.8 0l8.7 8.7a2 2 0 0 1 0 2.8L15.5 20a2 2 0 0 1-2.8 0L4 11.3a2 2 0 0 1 0-2.8Z" stroke={DARK_TEXT} strokeWidth={1.8} strokeLinejoin="round" />
        </Svg>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, paddingTop: 28, paddingBottom: 20 },
  iconButton: { width: 36, height: 36, alignItems: "center", justifyContent: "center" },
  logoRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  wordmark: { fontSize: 24, fontWeight: "800", color: DARK_TEXT },
});