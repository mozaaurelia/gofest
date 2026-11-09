import React from "react";
import { StyleSheet, Text, View } from "react-native";

function LoketMark() {
  return (
    <View style={styles.logoRow}>
      <View style={styles.logoMark}>
        <Text style={styles.logoLetter}>L</Text>
      </View>
      <Text style={styles.logoText}>LOKÉT</Text>
    </View>
  );
}

export default function PaymentBrandFooter() {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Dip Persembahkan oleh</Text>
      <LoketMark />
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
    fontSize: 14,
    fontWeight: "800",
    color: "#111827",
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 16,
  },
  logoMark: {
    width: 30,
    height: 30,
    borderRadius: 7,
    backgroundColor: "#142C4A",
    alignItems: "center",
    justifyContent: "center",
  },
  logoLetter: {
    fontSize: 20,
    fontWeight: "900",
    color: "#FFFFFF",
  },
  logoText: {
    fontSize: 26,
    fontWeight: "900",
    letterSpacing: 1,
    color: "#142C4A",
  },
  copyright: {
    marginTop: 14,
    fontSize: 12,
    color: "#6B7280",
    textAlign: "center",
  },
});
