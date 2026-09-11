import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path, Rect } from "react-native-svg";
import { gfColors } from "../../constants/gf-theme";

export default function KalenderScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.content}>
        <Svg viewBox="0 0 24 24" width={44} height={44} fill="none">
          <Rect x="3.5" y="5" width="17" height="15.5" rx="2" stroke={gfColors.teal} strokeWidth={1.8} />
          <Path d="M3.5 10h17M8 2.8v4M16 2.8v4" stroke={gfColors.teal} strokeWidth={1.8} strokeLinecap="round" />
        </Svg>
        <Text style={styles.title}>Kalender</Text>
        <Text style={styles.subtitle}>Jadwal konser favoritmu bakal muncul di sini</Text>
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