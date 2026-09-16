import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Path, Circle, Rect } from "react-native-svg";
import { gfColors } from "@/constants/gf-theme";

type Props = {
  icon: React.ReactNode;
  label: string;
  value?: string;
  onPress?: () => void;
};

export default function AccountMenuItem({ icon, label, value, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.row, pressed && { backgroundColor: "#F9FAFB" }]}>
      <View style={styles.left}>
        <View style={styles.iconWrap}>{icon}</View>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.right}>
        {value ? <Text style={styles.value}>{value}</Text> : null}
        <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
          <Path d="M9 6l6 6-6 6" stroke="#1E3A8A" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </View>
    </Pressable>
  );
}

export function LanguageIcon() {
  return (
    <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
      <Rect x={3} y={3} width={18} height={18} rx={3} stroke="#1E3A8A" strokeWidth={1.7} />
      <Path d="M7 8h10M8 12h8M9 16h6" stroke="#1E3A8A" strokeWidth={1.4} strokeLinecap="round" />
      <Path d="M10 8c0 2-1 4-2 6M14 8c0 2 1 4 2 6" stroke="#1E3A8A" strokeWidth={1.3} strokeLinecap="round" />
    </Svg>
  );
}
export function HelpIcon() {
  return (
    <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
      <Path d="M5 8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-2l-3 3v-3H8a3 3 0 0 1-3-3V8Z" stroke="#1E3A8A" strokeWidth={1.6} strokeLinejoin="round" />
      <Circle cx={9} cy={10.5} r={1} fill="#1E3A8A" />
      <Circle cx={15} cy={10.5} r={1} fill="#1E3A8A" />
      <Path d="M9 13c1.2 1 3.8 1 5 0" stroke="#1E3A8A" strokeWidth={1.3} strokeLinecap="round" />
    </Svg>
  );
}
export function AboutIcon() {
  return (
    <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
      <Path d="M6 3v18h12V7l-4-4H6Z" stroke="#1E3A8A" strokeWidth={1.6} strokeLinejoin="round" />
      <Path d="M14 3v4h4" stroke="#1E3A8A" strokeWidth={1.4} strokeLinejoin="round" />
      <Path d="M9 13h6M9 17h4" stroke="#1E3A8A" strokeWidth={1.5} strokeLinecap="round" />
    </Svg>
  );
}
export function TermsIcon() {
  return (
    <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
      <Rect x={4} y={3} width={16} height={18} rx={2} stroke="#1E3A8A" strokeWidth={1.6} />
      <Path d="M8 8h8M8 12h6M8 16h8" stroke="#1E3A8A" strokeWidth={1.4} strokeLinecap="round" />
    </Svg>
  );
}
export function PrivacyIcon() {
  return (
    <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
      <Path d="M12 3l7 4v5c0 4.2-2.8 7.2-7 9-4.2-1.8-7-4.8-7-9V7l7-4Z" stroke="#1E3A8A" strokeWidth={1.6} strokeLinejoin="round" />
      <Circle cx={12} cy={11} r={2.5} stroke="#1E3A8A" strokeWidth={1.4} />
      <Path d="M10 14.5l1.2 1.5 2.8-2.8" stroke="#1E3A8A" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}
export function RatingIcon() {
  return (
    <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
      <Path d="M12 3l2.3 5.2 5.7.8-4.1 3.8.9 5.6L12 16l-4.8 2.4.9-5.6-4.1-3.8 5.7-.8L12 3Z" stroke="#1E3A8A" strokeWidth={1.6} strokeLinejoin="round" />
    </Svg>
  );
}

export function LogoutIcon() {
  return (
    <Svg viewBox="0 0 24 24" width={20} height={20} fill="none">
      <Path d="M9 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3" stroke="#F87171" strokeWidth={1.7} strokeLinecap="round" />
      <Path d="M16 17l5-5-5-5" stroke="#F87171" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M21 12H9" stroke="#F87171" strokeWidth={1.7} strokeLinecap="round" />
    </Svg>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
  },
  left: { flexDirection: "row", alignItems: "center", gap: 12 },
  iconWrap: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#DBEAFE",
  },
  label: { fontSize: 14, fontWeight: "600", color: gfColors.text },
  right: { flexDirection: "row", alignItems: "center", gap: 8 },
  value: { fontSize: 12, color: gfColors.textMuted },
});
