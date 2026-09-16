import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import type { ProfileTabKey } from "./types";

type Props = {
  active: ProfileTabKey;
  onChange: (k: ProfileTabKey) => void;
};

const TABS: { key: ProfileTabKey; label: string }[] = [
  { key: "portfolio", label: "Portfolio" },
  { key: "about", label: "About" },
  { key: "services", label: "services" },
];

export function ProfileTabs({ active, onChange }: Props) {
  return (
    <View style={styles.wrap}>
      <View style={styles.row}>
        {TABS.map((t) => {
          const isActive = t.key === active;
          return (
            <Pressable key={t.key} onPress={() => onChange(t.key)} style={styles.tab}>
              <Text style={[styles.label, isActive && styles.labelActive]}>{t.label}</Text>
              <View style={[styles.indicator, isActive && styles.indicatorActive]} />
            </Pressable>
          );
        })}
      </View>

      {/* grid icon on right like in reference */}
      <View style={styles.gridIcon}>
        <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
          <Rect x="3.5" y="3.5" width="7" height="7" rx="1.2" stroke="#8B5CF6" strokeWidth={1.7} />
          <Rect x="13.5" y="3.5" width="7" height="7" rx="1.2" stroke="#8B5CF6" strokeWidth={1.7} />
          <Rect x="3.5" y="13.5" width="7" height="7" rx="1.2" stroke="#8B5CF6" strokeWidth={1.7} />
          <Rect x="13.5" y="13.5" width="7" height="7" rx="1.2" stroke="#8B5CF6" strokeWidth={1.7} />
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingTop: 22,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F3",
  },
  row: {
    flexDirection: "row",
    gap: 22,
  },
  tab: {
    alignItems: "center",
    paddingBottom: 10,
    gap: 6,
  },
  label: {
    fontSize: 12.5,
    fontWeight: "600",
    color: "#9AA0A8",
    textTransform: "capitalize",
  },
  labelActive: {
    color: "#8B5CF6",
    fontWeight: "800",
  },
  indicator: {
    height: 2.5,
    width: 22,
    borderRadius: 10,
    backgroundColor: "transparent",
  },
  indicatorActive: {
    backgroundColor: "#8B5CF6",
  },
  gridIcon: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
    opacity: 0.95,
  },
});
