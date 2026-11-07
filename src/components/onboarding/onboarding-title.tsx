import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function OnboardingTitle() {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Join The Countless</Text>
      <Text style={styles.title}>Xperiences</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: "center", gap: 4, paddingHorizontal: 16, marginTop: 18 },
  title: { fontSize: 28, fontWeight: "800", color: "#FFFFFF", textAlign: "center", letterSpacing: 0.2 },
});
