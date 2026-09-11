import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { gfColors } from "../../constants/gf-theme";

type AuthButtonProps = {
  label: string;
  onPress?: () => void;
  disabled?: boolean;
};

export default function AuthButton({ label, onPress, disabled }: AuthButtonProps) {
  return (
    <Pressable onPress={onPress} disabled={disabled} accessibilityState={{ disabled: !!disabled }}>
      <LinearGradient
        colors={disabled ? [gfColors.border, gfColors.border] : [gfColors.teal, gfColors.lime]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.button, disabled && styles.buttonDisabled]}
      >
        <Text style={[styles.label, disabled && styles.labelDisabled]}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { height: 52, borderRadius: 16, alignItems: "center", justifyContent: "center" },
  buttonDisabled: { opacity: 0.55 },
  label: { fontSize: 15, fontWeight: "700", color: "#10151D" },
  labelDisabled: { color: gfColors.textMuted },
});