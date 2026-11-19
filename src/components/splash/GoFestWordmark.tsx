import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  size?: number;
};

export default function GoFestWordmark({ size = 66 }: Props) {
  return (
    <View style={styles.wrap}>
      <Text style={[styles.text, { fontSize: size, letterSpacing: size * -0.03 }]}>Gofest</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "800",
    color: "#0F1B2E",
    textAlign: "center",
    includeFontPadding: false,
  },
});
