import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Svg, { Rect, Path } from "react-native-svg";
import { gfColors } from "../../constants/gf-theme";

type AuthDatePickerProps = {
  label: string;
  onValueChange?: (date: { day: string; month: string; year: string }) => void;
};

export default function AuthDatePicker({ label, onValueChange }: AuthDatePickerProps) {
  const [focused, setFocused] = useState(false);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const emit = (d: string, m: string, y: string) => {
    onValueChange?.({ day: d, month: m, year: y });
  };

  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.row, focused && styles.rowFocused]}>
        <IconGlyph color={focused ? gfColors.teal : gfColors.textMuted} />
        <Field
          placeholder="dd"
          maxLength={2}
          value={day}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(text) => { setDay(text); emit(text, month, year); }}
          style={[styles.field, styles.dayField]}
        />
        <Text style={styles.separator}>/</Text>
        <Field
          placeholder="mm"
          maxLength={2}
          value={month}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(text) => { setMonth(text); emit(day, text, year); }}
          style={[styles.field, styles.monthField]}
        />
        <Text style={styles.separator}>/</Text>
        <Field
          placeholder="yyyy"
          maxLength={4}
          value={year}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(text) => { setYear(text); emit(day, month, text); }}
          style={[styles.field, styles.yearField]}
        />
      </View>
    </View>
  );
}

function Field({
  style,
  onChange,
  ...rest
}: {
  style?: object;
  onChange: (text: string) => void;
  placeholder: string;
  maxLength: number;
  value: string;
  onFocus: () => void;
  onBlur: () => void;
}) {
  return (
    <TextInput
      {...rest}
      keyboardType="number-pad"
      placeholderTextColor={gfColors.textMuted}
      style={[styles.input, style]}
      onChangeText={onChange}
    />
  );
}

function IconGlyph({ color }: { color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={17} height={17} fill="none">
      <Rect x="3.5" y="5" width="17" height="16" rx="2" stroke={color} strokeWidth={1.8} />
      <Path d="M3.5 9.5h17M8 3v4M16 3v4" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
    </Svg>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: 16 },
  label: { fontSize: 12.5, fontWeight: "700", color: gfColors.text, marginBottom: 6 },
  row: {
    flexDirection: "row", alignItems: "center", gap: 6,
    borderRadius: 14, borderWidth: 1.5, borderColor: gfColors.border,
    backgroundColor: gfColors.surface, paddingHorizontal: 14, height: 50,
  },
  rowFocused: { borderColor: gfColors.teal },
  input: { fontSize: 13.5, color: gfColors.text, paddingVertical: 0 },
  field: { textAlign: "center" },
  dayField: { width: 34 },
  monthField: { width: 34 },
  yearField: { flex: 1 },
  separator: { fontSize: 15, fontWeight: "600", color: gfColors.textMuted },
});