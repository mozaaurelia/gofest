import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  size?: number;
};

export default function LoketWordmark({ size = 22 }: Props) {
  // keep tracking wide, silver gradient via solid color close to logo
  return (
    <View style={styles.wrap}>
      <Text style={[styles.text, { fontSize: size, letterSpacing: size * 0.14 }]}>LOKÉT</Text>
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
    color: "#D8DEE9",
    // subtle silver, not pure white, to match image
    textAlign: "center",
    includeFontPadding: false,
  },
});
