import React from "react";
import { StyleSheet, View } from "react-native";
import { gfColors } from "../../constants/gf-theme";

/**
 * AuthGlowBg - ambient glow halus di background halaman auth, echo
 * dari splash screen biar identitas visualnya nyambung.
 */
export default function AuthGlowBg() {
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <View style={styles.glowTop} />
      <View style={styles.glowBottom} />
    </View>
  );
}

const styles = StyleSheet.create({
  glowTop: {
    position: "absolute",
    top: -80,
    left: -60,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: gfColors.teal,
    opacity: 0.12,
  },
  glowBottom: {
    position: "absolute",
    bottom: -100,
    right: -70,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: gfColors.lime,
    opacity: 0.1,
  },
});