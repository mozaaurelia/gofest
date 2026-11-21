import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Rect } from "react-native-svg";

const BAR_WIDTHS = [2, 1, 3, 1, 2, 1, 4, 1, 2, 3, 1, 2, 1, 3, 2, 1, 2, 4, 1, 2, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 2, 1, 2, 3, 1, 4, 1, 2, 1, 3, 2, 4, 1, 2, 1, 2, 3, 1, 4];

export default function BoardingPassBarcode() {
  return (
    <View style={styles.wrap}>
      <Svg viewBox="0 0 260 56" width="100%" height={56}>
        {BAR_WIDTHS.map((w, i) => {
          const x = BAR_WIDTHS.slice(0, i).reduce((total, width) => total + width * 2.2 + 1.2, 0);
          return i % 2 === 0 ? <Rect key={i} x={x} y={0} width={w * 2.2} height={56} fill="#111827" /> : null;
        })}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: "center", justifyContent: "center", paddingHorizontal: 12 },
});
