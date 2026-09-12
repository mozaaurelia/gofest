import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { router, usePathname } from "expo-router";
import Svg, { Path } from "react-native-svg";
import { gfColors } from "../../constants/gf-theme";

const TABS = [
  { key: "home", href: "/home" },
  { key: "calendar", href: "/calendar" },
  { key: "tickets", href: "/tickets" },
  { key: "profile", href: "/profile" },
] as const;

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <View style={styles.wrap}>
      {TABS.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Pressable key={tab.key} onPress={() => router.push(tab.href as any)} style={styles.item}>
            <View style={[styles.iconWrap, isActive && styles.iconWrapActive]}>
              <TabGlyph tab={tab.key} active={isActive} />
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

function TabGlyph({ tab, active }: { tab: string; active: boolean }) {
  const color = active ? "#FFFFFF" : gfColors.textMuted;
  const common = { viewBox: "0 0 24 24", width: 20, height: 20, fill: "none" as const };

  switch (tab) {
    case "home":
      return <Svg {...common}><Path d="M4 11 12 4l8 7v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1v-8Z" stroke={color} strokeWidth={1.8} strokeLinejoin="round" /></Svg>;
    case "calendar":
      return <Svg {...common}><Path d="M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" stroke={color} strokeWidth={1.8} strokeLinejoin="round" /><Path d="M4 10h16M8 4v3M16 4v3" stroke={color} strokeWidth={1.8} strokeLinecap="round" /></Svg>;
    case "tickets":
      return <Svg {...common}><Path d="M4 8.5 8 4.5a2 2 0 0 1 2.8 0l8.7 8.7a2 2 0 0 1 0 2.8L15.5 20a2 2 0 0 1-2.8 0L4 11.3a2 2 0 0 1 0-2.8Z" stroke={color} strokeWidth={1.8} strokeLinejoin="round" /></Svg>;
    case "profile":
      return <Svg {...common}><Path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke={color} strokeWidth={1.8} /><Path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" stroke={color} strokeWidth={1.8} strokeLinecap="round" /></Svg>;
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  wrap: {
    position: "absolute", bottom: 24, left: 24, right: 24, height: 64, borderRadius: 32,
    backgroundColor: gfColors.surface, borderWidth: 1, borderColor: gfColors.border,
    flexDirection: "row", alignItems: "center", justifyContent: "space-around",
    shadowColor: "#000", shadowOpacity: 0.3, shadowRadius: 16, shadowOffset: { width: 0, height: 8 }, elevation: 10,
  },
  item: { flex: 1, alignItems: "center", justifyContent: "center" },
  iconWrap: { width: 40, height: 40, borderRadius: 20, alignItems: "center", justifyContent: "center" },
  iconWrapActive: { backgroundColor: gfColors.teal },
});