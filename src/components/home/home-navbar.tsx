import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeNavbar() {
  return (
    <View style={styles.row}>
      <View style={styles.brandRow}>
        <Text style={styles.brand}>go</Text>
        <Text style={[styles.brand, styles.brandAccent]}>Fest!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 6,
    height: 62,
  },
  brandRow: { flexDirection: "row", alignItems: "center" },
  brand: {
    fontSize: 29,
    fontWeight: "900",
    letterSpacing: 0.2,
    color: "#FFFFFF",
    textShadowColor: "rgba(20,35,58,0.3)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  brandAccent: {
    color: "#8E949D",
    textShadowColor: "rgba(20,35,58,0.25)",
  },
});
