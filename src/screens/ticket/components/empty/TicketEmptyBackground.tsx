import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function TicketEmptyBackground({ children }: { children: React.ReactNode }) {
  return (
    <LinearGradient colors={["#CDE6FF", "#BFDFFF", "#EAF4FF", "#F6F9FF"]} locations={[0, 0.35, 0.72, 1]} style={styles.flex}>
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
});
