import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";
import Svg, { Path, Circle, Rect } from "react-native-svg";
import { gfColors } from "../../constants/gf-theme";

type AuthInputProps = TextInputProps & {
  label: string;
  icon: "mail" | "lock" | "user" | "phone" | "idCard" | "calendar";
  isPassword?: boolean;
};

export default function AuthInput({ label, icon, isPassword, ...rest }: AuthInputProps) {
  const [focused, setFocused] = useState(false);
  const [secure, setSecure] = useState(!!isPassword);

  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.row, focused && styles.rowFocused]}>
        <IconGlyph name={icon} color={focused ? gfColors.teal : gfColors.textMuted} />
        <TextInput
          {...rest}
          secureTextEntry={secure}
          placeholderTextColor={gfColors.textMuted}
          onFocus={(e) => { setFocused(true); rest.onFocus?.(e); }}
          onBlur={(e) => { setFocused(false); rest.onBlur?.(e); }}
          style={styles.input}
        />
        {isPassword && (
          <Pressable onPress={() => setSecure((v) => !v)} hitSlop={10}>
            <IconGlyph name={secure ? "eye" : "eyeOff"} color={gfColors.textMuted} />
          </Pressable>
        )}
      </View>
    </View>
  );
}

function IconGlyph({ name, color }: { name: string; color: string }) {
  const common = { viewBox: "0 0 24 24", width: 17, height: 17, fill: "none" as const };
  switch (name) {
    case "mail":
      return <Svg {...common}><Rect x="3" y="5" width="18" height="14" rx="2" stroke={color} strokeWidth={1.8} /><Path d="m4 7 8 6 8-6" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" /></Svg>;
    case "lock":
      return <Svg {...common}><Rect x="5" y="10" width="14" height="10" rx="2" stroke={color} strokeWidth={1.8} /><Path d="M8 10V7a4 4 0 0 1 8 0v3" stroke={color} strokeWidth={1.8} strokeLinecap="round" /></Svg>;
    case "user":
      return <Svg {...common}><Circle cx="12" cy="8" r="3.5" stroke={color} strokeWidth={1.8} /><Path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke={color} strokeWidth={1.8} strokeLinecap="round" /></Svg>;
    case "eye":
      return <Svg {...common}><Path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" /><Circle cx="12" cy="12" r="3" stroke={color} strokeWidth={1.8} /></Svg>;
    case "eyeOff":
      return <Svg {...common}><Path d="M3 3l18 18M10.6 10.6a3 3 0 0 0 4.24 4.24M9.5 5.2C10.3 5.06 11.13 5 12 5c6.5 0 10 7 10 7a13.1 13.1 0 0 1-3.1 3.9M6.1 6.6C3.9 8.1 2 12 2 12a13.1 13.1 0 0 0 5.16 5.6" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" /></Svg>;
    case "phone":
      return <Svg {...common}><Path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" /></Svg>;
    case "idCard":
      return <Svg {...common}><Rect x="2.5" y="5" width="19" height="14" rx="2" stroke={color} strokeWidth={1.8} /><Circle cx="8.5" cy="11" r="2.2" stroke={color} strokeWidth={1.8} /><Path d="M5.5 15.5c.6-1.3 1.7-2 3-2s2.4.7 3 2M14.5 9.5H19M14.5 13H19" stroke={color} strokeWidth={1.8} strokeLinecap="round" /></Svg>;
    case "calendar":
      return <Svg {...common}><Rect x="3.5" y="5" width="17" height="16" rx="2" stroke={color} strokeWidth={1.8} /><Path d="M3.5 9.5h17M8 3v4M16 3v4" stroke={color} strokeWidth={1.8} strokeLinecap="round" /></Svg>;
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  wrap: { marginBottom: 16 },
  label: { fontSize: 12.5, fontWeight: "700", color: gfColors.text, marginBottom: 6 },
  row: {
    flexDirection: "row", alignItems: "center", gap: 10,
    borderRadius: 14, borderWidth: 1.5, borderColor: gfColors.border,
    backgroundColor: gfColors.surface, paddingHorizontal: 14, height: 50,
  },
  rowFocused: { borderColor: gfColors.teal },
  input: { flex: 1, fontSize: 13.5, color: gfColors.text },
});