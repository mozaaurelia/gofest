import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

type Props = {
  onEdit?: () => void;
  onShare?: () => void;
};

export function ProfileActions({ onEdit, onShare }: Props) {
  return (
    <View style={styles.row}>
      <Pressable onPress={onEdit} style={({ pressed }) => [styles.editBtn, pressed && { opacity: 0.9, transform: [{ scale: 0.98 }] }]}>
        <Text style={styles.editText}>Edit profile info</Text>
        <Svg width={13} height={13} viewBox="0 0 24 24" fill="none">
          <Path d="M4 20h4l10-10a1.8 1.8 0 0 0-4-4L4 16v4Z" stroke="#FFFFFF" strokeWidth={1.7} strokeLinejoin="round" />
          <Path d="M13 6l4 4" stroke="#FFFFFF" strokeWidth={1.7} strokeLinecap="round" />
        </Svg>
      </Pressable>

      <Pressable onPress={onShare} style={({ pressed }) => [styles.shareBtn, pressed && { opacity: 0.8 }]}>
        <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
          <Path d="M12 15V4" stroke="#8B5CF6" strokeWidth={1.8} strokeLinecap="round" />
          <Path d="M8.5 7.5 12 4l3.5 3.5" stroke="#8B5CF6" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
          <Path d="M5 12v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6" stroke="#8B5CF6" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    paddingTop: 18,
    paddingHorizontal: 18,
  },
  editBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#8B5CF6",
    paddingHorizontal: 18,
    height: 36,
    borderRadius: 100,
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.22,
    shadowRadius: 12,
    elevation: 6,
  },
  editText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 0.1,
  },
  shareBtn: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    borderWidth: 1.2,
    borderColor: "#E8E0FF",
    alignItems: "center",
    justifyContent: "center",
  },
});
