import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { CalendarGuideIcon, PinGuideIcon } from "./event-guide-icons";

type Props = {
  label: string;
  title: string;
  subtitle: string;
  date: string;
  address: string;
};

export default function EventGuideHero({ label, title, subtitle, date, address }: Props) {
  return (
    <LinearGradient colors={["#2FA8C0", "#1D6F8C"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.card}>
      <View style={styles.glowOne} />
      <View style={styles.glowTwo} />

      <Text style={styles.label}>{label}</Text>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}

      <View style={styles.metaRow}>
        <CalendarGuideIcon />
        <Text style={styles.metaText}>{date}</Text>
      </View>
      <View style={styles.metaRow}>
        <PinGuideIcon />
        <Text style={styles.metaText} numberOfLines={2}>
          {address}
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginTop: 18,
    borderRadius: 20,
    padding: 20,
    overflow: "hidden",
    shadowColor: "#1A2E4D",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.18,
    shadowRadius: 20,
    elevation: 6,
  },
  glowOne: {
    position: "absolute",
    top: -50,
    right: -30,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "rgba(255,255,255,0.14)",
  },
  glowTwo: {
    position: "absolute",
    bottom: -60,
    left: -40,
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "rgba(255,255,255,0.08)",
  },
  label: {
    fontSize: 10.5,
    fontWeight: "800",
    letterSpacing: 1.4,
    color: "rgba(255,255,255,0.75)",
  },
  title: {
    marginTop: 8,
    fontSize: 22,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  subtitle: {
    marginTop: 2,
    fontSize: 12.5,
    fontWeight: "600",
    color: "rgba(255,255,255,0.82)",
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    marginTop: 12,
  },
  metaText: {
    flex: 1,
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 17,
    color: "#FFFFFF",
  },
});
