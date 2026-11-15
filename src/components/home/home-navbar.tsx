import React from "react";
import { Platform, Pressable, StyleSheet, View } from "react-native";
import { router } from "expo-router";
import Svg, { Defs, LinearGradient, Path, Stop, Text as SvgText } from "react-native-svg";

const BRAND_FONT = Platform.select({
  web: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  default: undefined,
});

export default function HomeNavbar() {
  return (
    <View style={styles.row}>
      <Pressable
        style={({ pressed }) => [styles.side, pressed && styles.sidePressed]}
        hitSlop={10}
        accessibilityRole="button"
        accessibilityLabel="Menu"
        onPress={() => router.push("/menu")}
      >
        <Svg viewBox="0 0 24 24" width={28} height={28} fill="none">
          <Path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" stroke="#FFFFFF" strokeWidth={2.1} strokeLinecap="round" />
        </Svg>
      </Pressable>

      <View style={styles.brandRow}>
        <Svg width={116} height={36} viewBox="0 0 116 36">
          <Defs>
            <LinearGradient id="gofestBrand" x1="0" y1="0" x2="1" y2="0">
              <Stop offset="0" stopColor="#2FA8C0" />
              <Stop offset="0.55" stopColor="#5CC6A8" />
              <Stop offset="1" stopColor="#8FD14F" />
            </LinearGradient>
          </Defs>
          <SvgText
            x="58"
            y="27"
            textAnchor="middle"
            fontFamily={BRAND_FONT}
            fontSize={29}
            fontWeight="900"
            letterSpacing={0.2}
            fill="url(#gofestBrand)"
          >
            goFest!
          </SvgText>
        </Svg>
      </View>

      <Pressable
        style={styles.side}
        hitSlop={10}
        accessibilityRole="button"
        accessibilityLabel="Ticket"
        onPress={() => router.push("/(tabs)/ticket")}
      >
        <Svg viewBox="0 0 24 24" width={26} height={26} fill="none" style={styles.ticketTilt}>
          <Path
            d="M5.5 7h13A1.5 1.5 0 0 1 20 8.5v1.2a2.3 2.3 0 0 0 0 4.6v1.2a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 15.5v-1.2a2.3 2.3 0 0 0 0-4.6V8.5A1.5 1.5 0 0 1 5.5 7Z"
            stroke="#FFFFFF"
            strokeWidth={1.8}
            strokeLinejoin="round"
          />
          <Path d="M13.5 9.5h3M13.5 12h3M13.5 14.5h3" stroke="#FFFFFF" strokeWidth={1.4} strokeLinecap="round" opacity={0.9} />
        </Svg>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 22,
    paddingTop: 10,
    paddingBottom: 6,
    height: 62,
  },
  side: { width: 44, height: 44, alignItems: "center", justifyContent: "center" },
  sidePressed: { opacity: 0.7 },
  brandRow: { flexDirection: "row", alignItems: "center" },
  ticketTilt: { transform: [{ rotate: "-8deg" }] },
});
