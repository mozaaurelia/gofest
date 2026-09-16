import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  text: string;
};

export default function WristbandBullet({ text }: Props) {
  return (
    <View style={styles.row}>
      <Text style={styles.dot}>•</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    paddingVertical: 3,
  },
  dot: {
    fontSize: 14,
    lineHeight: 20,
    color: "#111827",
    marginTop: 0,
    fontWeight: "700",
  },
  text: {
    flex: 1,
    fontSize: 13.5,
    lineHeight: 20,
    color: "#4B5563",
  },
});
