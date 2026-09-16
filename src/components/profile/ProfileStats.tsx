import React from "react";
import { StyleSheet, Text, View } from "react-native";
import type { ProfileStat } from "./types";

type Props = {
  stats: ProfileStat[];
};

export function ProfileStats({ stats }: Props) {
  return (
    <View style={styles.row}>
      {stats.map((s, idx) => (
        <View key={`${s.label}-${idx}`} style={styles.col}>
          <Text style={styles.value}>{s.value}</Text>
          <Text style={styles.label}>{s.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 4,
  },
  col: {
    flex: 1,
    alignItems: "center",
    gap: 2,
  },
  value: {
    fontSize: 16,
    fontWeight: "800",
    color: "#1A1E2E",
  },
  label: {
    fontSize: 11.5,
    color: "#6B7583",
    fontWeight: "500",
  },
});
