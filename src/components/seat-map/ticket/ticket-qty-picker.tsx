import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

type Props = {
  value: number;
  onChange: (v: number) => void;
  max?: number;
};

export default function TicketQtyPicker({ value, onChange, max = 5 }: Props) {
  const canMinus = value > 0;
  const canPlus = value < max;

  const handleMinus = () => {
    if (canMinus) onChange(value - 1);
  };
  const handlePlus = () => {
    if (canPlus) onChange(value + 1);
  };

  return (
    <View style={styles.wrap}>
      <Pressable
        onPress={handleMinus}
        disabled={!canMinus}
        android_ripple={{ color: "transparent" }}
        style={({ pressed }) => [styles.btn, !canMinus && styles.btnDisabled, pressed && canMinus && styles.btnPressed]}
      >
        <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
          <Path d="M5 12h14" stroke={canMinus ? "#111827" : "#9CA3AF"} strokeWidth={2} strokeLinecap="round" />
        </Svg>
      </Pressable>

      <View style={styles.valueBox}>
        <Text style={styles.value}>{value}</Text>
      </View>

      <Pressable
        onPress={handlePlus}
        disabled={!canPlus}
        android_ripple={{ color: "transparent" }}
        style={({ pressed }) => [styles.btn, !canPlus && styles.btnDisabled, pressed && canPlus && styles.btnPressed]}
      >
        <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
          <Path d="M12 5v14M5 12h14" stroke={canPlus ? "#111827" : "#9CA3AF"} strokeWidth={2} strokeLinecap="round" />
        </Svg>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E5EA",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    height: 38,
  },
  btn: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  btnDisabled: {
    backgroundColor: "#F3F4F6",
    opacity: 0.7,
  },
  btnPressed: {
    opacity: 0.7,
  },
  valueBox: {
    minWidth: 40,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#E2E5EA",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 8,
  },
  value: { fontSize: 15, fontWeight: "700", color: "#111827", textAlign: "center" },
});
