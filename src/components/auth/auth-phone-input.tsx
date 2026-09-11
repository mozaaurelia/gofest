import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { gfColors } from "../../constants/gf-theme";

type AuthPhoneInputProps = TextInputProps & {
  label: string;
  countryCode?: string;
};

export default function AuthPhoneInput({ label, countryCode = "+62", ...rest }: AuthPhoneInputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.row, focused && styles.rowFocused]}>
        <View style={styles.countryCodeBox}>
          <Text style={[styles.countryCode, focused && styles.countryCodeFocused]}>{countryCode}</Text>
        </View>
        <View style={styles.divider} />
        <IconGlyph color={focused ? gfColors.teal : gfColors.textMuted} />
        <TextInput
          {...rest}
          placeholderTextColor={gfColors.textMuted}
          keyboardType="phone-pad"
          onFocus={(e) => { setFocused(true); rest.onFocus?.(e); }}
          onBlur={(e) => { setFocused(false); rest.onBlur?.(e); }}
          style={styles.input}
        />
      </View>
    </View>
  );
}

function IconGlyph({ color }: { color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={17} height={17} fill="none">
      <Path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: 16 },
  label: { fontSize: 12.5, fontWeight: "700", color: gfColors.text, marginBottom: 6 },
  row: {
    flexDirection: "row", alignItems: "center", gap: 8,
    borderRadius: 14, borderWidth: 1.5, borderColor: gfColors.border,
    backgroundColor: gfColors.surface, paddingHorizontal: 12, height: 50,
  },
  rowFocused: { borderColor: gfColors.teal },
  countryCodeBox: {
    borderRightWidth: 1, borderRightColor: gfColors.border,
    paddingRight: 10, height: "100%", justifyContent: "center",
  },
  countryCode: { fontSize: 13.5, fontWeight: "700", color: gfColors.textMuted },
  countryCodeFocused: { color: gfColors.teal },
  divider: { width: 1 },
  input: { flex: 1, fontSize: 13.5, color: gfColors.text },
});