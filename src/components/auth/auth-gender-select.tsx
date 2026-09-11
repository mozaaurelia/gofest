import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { gfColors } from "../../constants/gf-theme";

type AuthGenderSelectProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options?: string[];
};

export default function AuthGenderSelect({
  label,
  value,
  onChange,
  options = ["Laki-Laki", "Wanita"],
}: AuthGenderSelectProps) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        {options.map((option) => {
          const selected = option === value;
          return (
            <Pressable key={option} onPress={() => onChange(option)} style={styles.option} hitSlop={6}>
              <RadioIcon selected={selected} color={selected ? gfColors.teal : gfColors.textMuted} />
              <Text style={[styles.optionText, selected && styles.optionTextSelected]}>{option}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

function RadioIcon({ selected, color }: { selected: boolean; color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={20} height={20} fill="none">
      <Circle cx="12" cy="12" r="8.5" stroke={color} strokeWidth={1.8} />
      {selected && <Circle cx="12" cy="12" r="4" fill={color} stroke="none" />}
    </Svg>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: 16 },
  label: { fontSize: 12.5, fontWeight: "700", color: gfColors.text, marginBottom: 10 },
  row: { flexDirection: "row", gap: 24 },
  option: { flexDirection: "row", alignItems: "center", gap: 8 },
  optionText: { fontSize: 13.5, fontWeight: "600", color: gfColors.textMuted },
  optionTextSelected: { color: gfColors.text },
});