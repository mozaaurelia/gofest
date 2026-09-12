import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TicketIcon from "../ticket-icon";

const DARK_TEXT = "#1B222D";

export default function HomeNavbar() {
  return (
    <View style={styles.row}>
      <View style={styles.logoRow}>
        <TicketIcon size={36} />
        <Text style={styles.wordmark}>Go fest!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: 20, paddingTop: 16, paddingBottom: 16 },
  logoRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  wordmark: { fontSize: 24, fontWeight: "800", color: DARK_TEXT, textShadowColor: "rgba(255,255,255,0.9)", textShadowOffset: { width: 0, height: 1 }, textShadowRadius: 8 },
});