import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  time: string;
};

export default function PaymentTimerBar({ time }: Props) {
  return (
    <View style={styles.bar}>
      <Text style={styles.time}>{time}</Text>
      <View style={styles.divider} />
      <Text style={styles.label}>Sisa waktu untuk memesan tiket</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    paddingVertical: 17,
    paddingHorizontal: 16,
    backgroundColor: "#FFC800",
  },
  time: {
    fontSize: 23,
    fontWeight: "900",
    color: "#111827",
    fontVariant: ["tabular-nums"],
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: "rgba(17,24,39,0.25)",
  },
  label: {
    fontSize: 15.5,
    fontWeight: "500",
    color: "#333333",
  },
});
