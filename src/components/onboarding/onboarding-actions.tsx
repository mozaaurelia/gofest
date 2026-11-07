import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

export default function OnboardingActions() {
  return (
    <View style={styles.wrap}>
      <Pressable onPress={() => router.replace("/auth/register" as any)} style={({ pressed }) => [styles.btn, styles.btnOutline, pressed && { opacity: 0.85 }]}>
        <Text style={styles.btnOutlineText}>Sign Up</Text>
      </Pressable>
      <Pressable onPress={() => router.replace("/auth/login" as any)} style={({ pressed }) => [styles.btn, styles.btnPrimary, pressed && { opacity: 0.85 }]}>
        <Text style={styles.btnPrimaryText}>Log In</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flexDirection: "row", gap: 12, paddingHorizontal: 16, paddingTop: 16, paddingBottom: 12 },
  btn: { flex: 1, height: 48, borderRadius: 10, alignItems: "center", justifyContent: "center" },
  btnOutline: { backgroundColor: "#FFFFFF", borderWidth: 1.5, borderColor: "#1E3A8A" },
  btnOutlineText: { fontSize: 14, fontWeight: "700", color: "#1E3A8A" },
  btnPrimary: { backgroundColor: "#1E4ED8" },
  btnPrimaryText: { fontSize: 14, fontWeight: "700", color: "#FFFFFF" },
});
