import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { router, usePathname } from "expo-router";
import Svg, { Circle, Path, Rect } from "react-native-svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const NAVY = "#142C4A";
const NAVY_ACTIVE_BG = "#162E50";

type TabName = "home" | "kalender" | "ticket" | "profile";
type TabConfig = { name: TabName; href: string };

const TABS: TabConfig[] = [
  { name: "home", href: "/" },
  { name: "kalender", href: "/kalender" },
  { name: "ticket", href: "/ticket" },
  { name: "profile", href: "/profile" },
];

function TabIcon({ name, color }: { name: TabName; color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={22} height={22} fill="none">
      {name === "home" && (
        <>
          <Path d="M4 10.2 12 4l8 6.2V19a1.5 1.5 0 0 1-1.5 1.5H5.5A1.5 1.5 0 0 1 4 19v-8.8Z" stroke={color} strokeWidth={1.9} strokeLinejoin="round" />
          <Path d="M9 20.5v-6h6v6" stroke={color} strokeWidth={1.9} strokeLinejoin="round" />
        </>
      )}
      {name === "kalender" && (
        <>
          <Rect x="3.5" y="5.2" width="17" height="14.8" rx="2" stroke={color} strokeWidth={1.9} />
          <Path d="M3.5 9.8h17" stroke={color} strokeWidth={1.9} strokeLinecap="round" />
          <Path d="M8 3.5v3.5M16 3.5v3.5" stroke={color} strokeWidth={1.9} strokeLinecap="round" />
        </>
      )}
      {name === "ticket" && (
        <>
          <Path
            d="M4.2 8.2h15.6v2.6a2.2 2.2 0 0 0 0 4.4v2.6H4.2v-2.6a2.2 2.2 0 0 0 0-4.4V8.2Z"
            stroke={color}
            strokeWidth={1.9}
            strokeLinejoin="round"
          />
          <Path d="M8.2 12h7.6" stroke={color} strokeWidth={1.2} strokeLinecap="round" strokeDasharray="1.5 2.2" opacity={0.95} />
        </>
      )}
      {name === "profile" && (
        <>
          <Circle cx="12" cy="8.2" r="3.6" stroke={color} strokeWidth={1.9} />
          <Path d="M5.2 19.2c0-3.1 2.9-5.2 6.8-5.2s6.8 2.1 6.8 5.2" stroke={color} strokeWidth={1.9} strokeLinecap="round" />
        </>
      )}
    </Svg>
  );
}

export default function FloatingNav() {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  function isActive(href: string): boolean {
    if (href === "/") return pathname === "/" || pathname === "/index";
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <View style={[styles.wrapper, { paddingBottom: Math.max(insets.bottom, 10) + 8 }]} pointerEvents="box-none">
      <View style={styles.row}>
        <View style={styles.pill}>
          {TABS.map((tab) => {
            const active = isActive(tab.href);
            return (
              <Pressable
                key={tab.name}
                onPress={() => router.push(tab.href as any)}
                style={[styles.tabBtn, active && styles.tabBtnActive]}
                android_ripple={{ color: "transparent" }}
              >
                <TabIcon name={tab.name} color={active ? "#FFFFFF" : NAVY} />
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
    paddingHorizontal: 14,
    paddingTop: 10,
  },
  row: { flexDirection: "row", alignItems: "center" },
  pill: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 8,
    shadowColor: "#1A2E4D",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.14,
    shadowRadius: 18,
    elevation: 10,
  },
  tabBtn: {
    flex: 1,
    height: 44,
    maxWidth: 72,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  tabBtnActive: { backgroundColor: NAVY_ACTIVE_BG },
});
