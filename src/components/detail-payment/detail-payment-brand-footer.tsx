import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GoFestLogo from "@/components/splash/GoFestLogo";

export default function DetailPaymentBrandFooter() {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Dip Persembahkan oleh</Text>

      <View style={styles.logoRow}>
        <GoFestLogo size={34} />
        <View style={styles.wordmarkRow}>
          <Text style={styles.wordmarkGo}>go</Text>
          <Text style={styles.wordmarkFest}>Fest!</Text>
        </View>
      </View>

      <Text style={styles.copyright}>© 2026 goFest!. Hak cipta dilindungi Undang-undang</Text>
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
  wordmarkRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  wordmarkGo: {
    fontSize: 30,
    fontWeight: "900",
    letterSpacing: 0.2,
    color: "#142C4A",
  },
  wordmarkFest: {
    fontSize: 30,
    fontWeight: "900",
    letterSpacing: 0.2,
    color: "#2FA8C0",
  },
  copyright: {
    marginTop: 18,
    fontSize: 13,
    color: "#4B5563",
    textAlign: "center",
  },
});
