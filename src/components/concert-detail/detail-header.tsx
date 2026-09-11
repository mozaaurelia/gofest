import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import Svg, { Path, Circle } from "react-native-svg";

type DetailHeaderProps = { title: string };

export default function DetailHeader({ title }: DetailHeaderProps) {
  return (
    <View style={styles.row}>
      <Pressable onPress={() => router.back()} style={styles.iconButton}>
        <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
          <Path d="M15 6l-6 6 6 6" stroke="#FFFFFF" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </Pressable>

      <Text style={styles.title} numberOfLines={1}>{title}</Text>

      <Pressable style={styles.iconButton}>
        <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
          <Circle cx="18" cy="5" r="2.4" stroke="#FFFFFF" strokeWidth={1.8} />
          <Circle cx="6" cy="12" r="2.4" stroke="#FFFFFF" strokeWidth={1.8} />
          <Circle cx="18" cy="19" r="2.4" stroke="#FFFFFF" strokeWidth={1.8} />
          <Path d="M8.2 10.8 15.8 6.6M8.2 13.2l7.6 4.2" stroke="#FFFFFF" strokeWidth={1.6} strokeLinecap="round" />
        </Svg>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    position: "absolute", top: 0, left: 0, right: 0, zIndex: 10,
    flexDirection: "row", alignItems: "center", justifyContent: "space-between",
    paddingHorizontal: 16, paddingTop: 8,
  },
  iconButton: { width: 36, height: 36, borderRadius: 18, alignItems: "center", justifyContent: "center" },
  title: { flex: 1, marginHorizontal: 12, fontSize: 14, fontWeight: "700", color: "#FFFFFF", textAlign: "center" },
});