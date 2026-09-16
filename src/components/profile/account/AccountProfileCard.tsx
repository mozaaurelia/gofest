import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Ellipse, G, Path, Rect } from "react-native-svg";
import { gfColors } from "@/constants/gf-theme";

type Props = {
  name?: string;
  subtitle?: string;
  onPress?: () => void;
};

function MozaAvatar({ size = 52 }: { size?: number }) {
  return (
    <View style={{ width: size, height: size, borderRadius: 10, overflow: "hidden", backgroundColor: "#FFF7ED" }}>
      <Svg viewBox="0 0 52 52" width={size} height={size}>
        <Rect x={0} y={0} width={52} height={52} rx={10} fill="#FB923C" />
        <Path d="M16 8 L20 2 L24 8 Z" fill="#FB923C" />
        <Ellipse cx={18} cy={26} rx={9} ry={10} fill="#FFFFFF" />
        <Ellipse cx={34} cy={26} rx={9} ry={10} fill="#FFFFFF" />
        <Circle cx={18} cy={28} r={2.8} fill="#111827" />
        <Circle cx={34} cy={28} r={2.8} fill="#111827" />
        <Path d="M20 36 Q26 40 32 36" stroke="#111827" strokeWidth={1.6} fill="none" strokeLinecap="round" />
        <Rect x={10} y={38} width={32} height={6} rx={3} fill="#FDBA74" opacity={0.5} />
      </Svg>
    </View>
  );
}

export default function AccountProfileCard({ name = "moza", subtitle = "See Profile", onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.card, pressed && { opacity: 0.92 }]}>
      <View style={styles.left}>
        <MozaAvatar />
        <View style={styles.textWrap}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.sub}>{subtitle}</Text>
        </View>
      </View>
      <Svg viewBox="0 0 24 24" width={22} height={22} fill="none">
        <Path d="M9 6l6 6-6 6" stroke="#1E3A8A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },
  left: { flexDirection: "row", alignItems: "center", gap: 12 },
  textWrap: { gap: 2 },
  name: { fontSize: 16, fontWeight: "800", color: gfColors.text },
  sub: { fontSize: 12, color: gfColors.textMuted },
});
