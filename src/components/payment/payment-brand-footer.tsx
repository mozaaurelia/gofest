import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthLogo from "@/components/auth/auth-logo";

export default function PaymentBrandFooter() {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Dip Persembahkan oleh</Text>
      <View style={styles.logo}>
        <AuthLogo width={120} />
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
    fontSize: 13,
    fontWeight: "800",
    color: "#111827",
  },
  logo: {
    marginTop: 12,
  },
  copyright: {
    marginTop: 10,
    fontSize: 12,
    color: "#6B7280",
    textAlign: "center",
  },
});
