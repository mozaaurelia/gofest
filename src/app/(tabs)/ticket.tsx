import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Circle, Path } from "react-native-svg";
import { gfColors } from "../../constants/gf-theme";

export default function TicketScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.content}>
        <Svg viewBox="0 0 24 24" width={44} height={44} fill="none">
          <Path d="M4 7.5h16V10a2.5 2.5 0 0 0 0 5v2.5H4V15a2.5 2.5 0 0 0 0-5V7.5Z" stroke={gfColors.teal} strokeWidth={1.8} strokeLinejoin="round" />
          <Circle cx="12" cy="7.5" r="1.5" fill={gfColors.bg} stroke={gfColors.teal} strokeWidth={1.8} />
          <Circle cx="12" cy="16.5" r="1.5" fill={gfColors.bg} stroke={gfColors.teal} strokeWidth={1.8} />
        </Svg>
        <Text style={styles.title}>Ticket</Text>
        <Text style={styles.subtitle}>Tiket konser yang kamu pesan bakal ada di sini</Text>
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