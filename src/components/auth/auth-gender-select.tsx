import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { gfColors } from "../../constants/gf-theme";
import { useTranslation } from "@/context/language-context";

type GenderOption = {
  label: string;
  value: string;
};

type AuthGenderSelectProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options?: GenderOption[];
};

export default function AuthGenderSelect({
  label,
  value,
  onChange,
  options,
}: AuthGenderSelectProps) {
  const { t } = useTranslation();
  const resolvedOptions: GenderOption[] = options ?? [
    { label: t("auth.male"), value: "male" },
    { label: t("auth.female"), value: "female" },
  ];
  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        {resolvedOptions.map((option) => {
          const selected = option.value === value;
          return (
            <Pressable key={option.value} onPress={() => onChange(option.value)} style={styles.option} hitSlop={6}>
              <RadioIcon selected={selected} color={selected ? gfColors.teal : gfColors.textMuted} />
              <Text style={[styles.optionText, selected && styles.optionTextSelected]}>{option.label}</Text>
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