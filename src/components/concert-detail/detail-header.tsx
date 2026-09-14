import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import Svg, { Path, Circle } from "react-native-svg";

type DetailHeaderProps = { title: string };

export default function DetailHeader({ title }: DetailHeaderProps) {
  const [saved, setSaved] = useState(false);

  return (
    <View style={styles.row}>
      <Pressable onPress={() => router.back()} style={styles.iconButton}>
        <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
          <Path d="M15 6l-6 6 6 6" stroke="#FFFFFF" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </Pressable>

      <Text style={styles.title} numberOfLines={1}>{title}</Text>

      <View style={styles.rightRow}>
        <Pressable
          onPress={() => setSaved((v) => !v)}
          hitSlop={8}
          style={[styles.iconButton, saved && styles.iconButtonActive]}
        >
          <Svg viewBox="0 0 24 24" width={18} height={18} fill={saved ? "#FFFFFF" : "none"}>
            <Path
              d="M6.5 4.5h11a1.2 1.2 0 0 1 1.2 1.2v13.2l-6.2-3.6-6.2 3.6V5.7a1.2 1.2 0 0 1 1.2-1.2Z"
              stroke="#FFFFFF"
              strokeWidth={1.9}
              strokeLinejoin="round"
            />
          </Svg>
        </Pressable>

        <Pressable style={styles.iconButton}>
          <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
            <Circle cx="18" cy="5" r="2.4" stroke="#FFFFFF" strokeWidth={1.8} />
            <Circle cx="6" cy="12" r="2.4" stroke="#FFFFFF" strokeWidth={1.8} />
            <Circle cx="18" cy="19" r="2.4" stroke="#FFFFFF" strokeWidth={1.8} />
            <Path d="M8.2 10.8 15.8 6.6M8.2 13.2l7.6 4.2" stroke="#FFFFFF" strokeWidth={1.6} strokeLinecap="round" />
          </Svg>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    position: "absolute", top: 0, left: 0, right: 0, zIndex: 10,
    flexDirection: "row", alignItems: "center", justifyContent: "space-between",
    paddingHorizontal: 12, paddingTop: 8,
  },
  iconButton: { width: 36, height: 36, borderRadius: 18, alignItems: "center", justifyContent: "center" },
  iconButtonActive: { backgroundColor: "rgba(255,255,255,0.18)" },
  rightRow: { flexDirection: "row", alignItems: "center", gap: 2 },
  title: { flex: 1, marginHorizontal: 8, fontSize: 14, fontWeight: "700", color: "#FFFFFF", textAlign: "center" },
});