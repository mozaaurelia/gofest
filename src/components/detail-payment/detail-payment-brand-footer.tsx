import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LoketMark } from "./detail-payment-icons";

export default function DetailPaymentBrandFooter() {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Dip Persembahkan oleh</Text>

      <View style={styles.logoRow}>
        <LoketMark size={38} />
        <Text style={styles.wordmark}>LOKÉT</Text>
      </View>

      <Text style={styles.copyright}>© 2026 LOKÉT. Hak cipta dilindungi Undang-undang</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: 26,
    paddingTop: 26,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "#EEF0F3",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "800",
    color: "#111827",
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 18,
  },
  wordmark: {
    fontSize: 28,
    fontWeight: "900",
    letterSpacing: 3,
    color: "#142C4A",
  },
  copyright: {
    marginTop: 18,
    fontSize: 13,
    color: "#4B5563",
    textAlign: "center",
  },
});
