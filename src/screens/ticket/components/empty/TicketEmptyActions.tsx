import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";

type Props = {
  label?: string;
  onPress?: () => void;
};

export default function TicketEmptyActions({ label = "Help Center", onPress }: Props) {
  return (
    <View style={styles.wrap}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.btn, pressed && { opacity: 0.9, transform: [{ scale: 0.98 }] }]}
      >
        <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
          {/* chat bubble */}
          <Path
            d="M5 5.5a3.5 3.5 0 0 1 3.5-3.5h7A3.5 3.5 0 0 1 19 5.5v6A3.5 3.5 0 0 1 15.5 15H12l-3.6 3.2A1 1 0 0 1 6.8 17.3V15A3.5 3.5 0 0 1 5 11.5v-6Z"
            stroke="#FFFFFF"
            strokeWidth={1.9}
            strokeLinejoin="round"
            fill="white"
            opacity={0.98}
          />
          {/* smile */}
          <Circle cx={9.2} cy={9.2} r={1.2} fill="#0B5CFF" />
          <Circle cx={14.8} cy={9.2} r={1.2} fill="#0B5CFF" />
          <Path d="M9 12.2c1.2 1.4 4.8 1.4 6 0" stroke="#0B5CFF" strokeWidth={1.5} strokeLinecap="round" fill="none" />
        </Svg>
        <Text style={styles.label}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: "center",
    paddingTop: 8,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#0B5CFF",
    paddingHorizontal: 22,
    height: 46,
    borderRadius: 12,
    shadowColor: "#0B5CFF",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  label: {
    color: "#FFFFFF",
    fontSize: 14.5,
    fontWeight: "700",
    letterSpacing: 0.1,
  },
});
