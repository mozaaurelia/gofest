import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Circle, Path } from "react-native-svg";
import { gfColors } from "../../constants/gf-theme";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.content}>
        <Svg viewBox="0 0 24 24" width={46} height={46} fill="none">
          <Circle cx="12" cy="8.5" r="3.8" stroke={gfColors.teal} strokeWidth={1.8} />
          <Path d="M5 20c0-3.3 3.1-5.5 7-5.5s7 2.2 7 5.5" stroke={gfColors.teal} strokeWidth={1.8} strokeLinecap="round" />
        </Svg>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.subtitle}>Akun dan pengaturan kamu bakal ada di sini</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: gfColors.bg },
  content: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 32, gap: 10 },
  title: { fontSize: 22, fontWeight: "800", color: gfColors.text },
  subtitle: { fontSize: 13, color: gfColors.textMuted, textAlign: "center" },
});