import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  size?: number;
};

export default function GoFestWordmark({ size = 34 }: Props) {
  return (
    <View style={styles.wrap}>
      <Text style={[styles.text, { fontSize: size, letterSpacing: -0.5 }]}>Go fest!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "900",
    color: "#14233A",
    textAlign: "center",
    includeFontPadding: false,
  },
});
