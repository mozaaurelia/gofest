import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
};

export default function MenuItem({ icon, label, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={({ pressed }) => [styles.row, pressed && styles.pressed]}
    >
      <View style={styles.iconWrap}>{icon}</View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 22,
    backgroundColor: "#FFFFFF",
  },
  pressed: {
    backgroundColor: "#F7F8FA",
  },
  iconWrap: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 22,
  },
  label: {
    fontSize: 17,
    fontWeight: "600",
    letterSpacing: 0.1,
    color: "#0F1F33",
  },
});
