import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Rect, Path, Circle } from "react-native-svg";
import type { PortfolioItem } from "./types";

type Props = {
  item: PortfolioItem;
};

// Minimal mock preview inside card — mimics phone/UI thumbnails from reference
function CardPreview({ bg }: { bg: string }) {
  const isDark = bg === "#1E2A4A" || bg === "#1A2340";
  const isOrange = bg.startsWith("#F");

  if (isDark) {
    return (
      <View style={styles.previewWrap}>
        <Svg width="86%" height="84%" viewBox="0 0 120 160">
          <Rect x="6" y="10" width="108" height="140" rx="10" fill="#2A365E" />
          <Rect x="16" y="28" width="88" height="8" rx="4" fill="#3E4B7A" />
          <Rect x="16" y="42" width="62" height="6" rx="3" fill="#3E4B7A" opacity={0.7} />
          <Rect x="16" y="62" width="88" height="42" rx="8" fill="#111A33" />
          <Rect x="22" y="70" width="36" height="4" rx="2" fill="#4B5A8A" />
          <Rect x="22" y="78" width="28" height="3" rx="1.5" fill="#4B5A8A" opacity={0.6} />
          <Rect x="16" y="114" width="88" height="22" rx="8" fill="#8B5CF6" />
        </Svg>
      </View>
    );
  }

  if (isOrange) {
    return (
      <View style={styles.previewWrap}>
        <Svg width="86%" height="84%" viewBox="0 0 120 160">
          <Rect x="18" y="10" width="84" height="140" rx="10" fill="#FFFFFF" stroke="#EAD9C0" strokeWidth={1} />
          <Circle cx="60" cy="38" r="14" fill="#FFC66B" />
          <Path d="M46 44c4.5 5 23.5 5 28 0" stroke="#8B5A1A" strokeWidth={1.2} strokeLinecap="round" fill="none" />
          <Rect x="28" y="62" width="64" height="6" rx="3" fill="#F3EFE8" />
          <Rect x="32" y="74" width="56" height="4" rx="2" fill="#E8E0D0" />
          <Rect x="32" y="82" width="42" height="4" rx="2" fill="#E8E0D0" />
          <Rect x="28" y="98" width="64" height="28" rx="8" fill="#FFD78A" />
          <Rect x="36" y="114" width="48" height="3" rx="1.5" fill="#C79A3A" opacity={0.35} />
        </Svg>
      </View>
    );
  }

  // green — two phones
  const isSecond = bg === "#BFD99B";
  return (
    <View style={styles.previewWrap}>
      <Svg width="92%" height="86%" viewBox="0 0 130 150">
        {/* left phone */}
        <Rect x={isSecond ? "42" : "10"} y="16" width="56" height="112" rx="10" fill="#FFFFFF" stroke="#C8DDB0" strokeWidth={1} />
        <Rect x={isSecond ? "50" : "18"} y="28" width="40" height="16" rx="6" fill="#FFE1E1" />
        <Circle cx={isSecond ? "62" : "30"} cy="36" r="5" fill="#FF6B6B" />
        <Rect x={isSecond ? "50" : "18"} y="50" width="40" height="4" rx="2" fill="#E8F0D8" />
        <Rect x={isSecond ? "50" : "18"} y="58" width="28" height="3" rx="1.5" fill="#E8F0D8" />
        {/* right phone offset for duo effect */}
        {!isSecond && <Rect x="64" y="22" width="52" height="104" rx="10" fill="#FFFFFF" stroke="#C8DDB0" strokeWidth={1} opacity={0.0} />}
        {isSecond && <Rect x="10" y="28" width="46" height="92" rx="8" fill="#FFFFFF" stroke="#DDE9C8" strokeWidth={1} opacity={0.95} />}
        {isSecond && <Rect x="18" y="42" width="30" height="22" rx="4" fill="#FFF2F2" />}
      </Svg>
    </View>
  );
}

export function PortfolioCard({ item }: Props) {
  return (
    <View style={[styles.card, { backgroundColor: item.bg }]}>
      <CardPreview bg={item.bg} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    aspectRatio: 0.92,
    borderRadius: 16,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    // subtle shadow
    shadowColor: "#1A1E2E",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },
  previewWrap: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
  },
});
