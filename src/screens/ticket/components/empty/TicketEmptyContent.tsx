import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  subtitle: string;
};

export default function TicketEmptyContent({ title, subtitle }: Props) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: "center",
    paddingHorizontal: 28,
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    color: "#1A1E2E",
    textAlign: "center",
    letterSpacing: 0.1,
  },
  subtitle: {
    fontSize: 13,
    color: "#6B7583",
    textAlign: "center",
    lineHeight: 18,
  },
});
