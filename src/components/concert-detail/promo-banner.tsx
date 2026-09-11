import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { gfColors } from "../../constants/gf-theme";

export default function PromoBanner() {
  return (
    <View style={styles.wrap}>
      <Text style={styles.text}>
        Event baru tersedia! <Text style={styles.link}>Lihat Info Tiket</Text>
      </Text>
      <Svg viewBox="0 0 24 24" width={13} height={13} fill="none">
        <Path d="M7 17 17 7M9 7h8v8" stroke={gfColors.lime} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6,
    backgroundColor: "#1E2A47", paddingVertical: 12,
    borderTopLeftRadius: 24, borderTopRightRadius: 24,
  },
  text: { fontSize: 12.5, color: "#FFFFFF" },
  link: { color: "#F4A94A", fontWeight: "700" },
});