import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import Svg, { Path } from "react-native-svg";
import { gfColors } from "../../constants/gf-theme";

type SeatMapHeaderProps = {
  title: string;
  subtitle: string;
};

export default function SeatMapHeader({ title, subtitle }: SeatMapHeaderProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} hitSlop={8} style={styles.iconButton}>
        <Svg viewBox="0 0 24 24" width={22} height={22} fill="none">
          <Path
            d="M15 18l-6-6 6-6"
            stroke={gfColors.text}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </Pressable>

      <View style={styles.titleWrap}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          {subtitle}
        </Text>
      </View>

      <Pressable hitSlop={8} style={styles.iconButton}>
        <Svg viewBox="0 0 24 24" width={22} height={22} fill="none">
          <Path d="M4 6h16M4 12h16M4 18h16" stroke={gfColors.text} strokeWidth={2} strokeLinecap="round" />
        </Svg>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    backgroundColor: gfColors.bg,
    borderBottomWidth: 1,
    borderBottomColor: "#EEF0F3",
  },
  iconButton: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  titleWrap: {
    flex: 1,
    marginHorizontal: 8,
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "800",
    color: gfColors.text,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 11.5,
    color: "#9AA3B2",
    marginTop: 2,
    textAlign: "center",
  },
});
