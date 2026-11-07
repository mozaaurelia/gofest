import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Rect } from "react-native-svg";

const BAR_WIDTHS = [2, 1, 3, 1, 2, 1, 4, 1, 2, 3, 1, 2, 1, 3, 2, 1, 2, 4, 1, 2, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 2, 1, 2, 3, 1, 4, 1, 2, 1, 3, 2, 4, 1, 2, 1, 2, 3, 1, 4];

export default function BoardingPassBarcode() {
  let x = 0;
  return (
    <View style={styles.wrap}>
      <Svg viewBox="0 0 260 56" width="100%" height={56}>
        {BAR_WIDTHS.map((w, i) => {
          const isBar = i % 2 === 0;
          const rect = isBar ? <Rect key={i} x={x} y={0} width={w * 2.2} height={56} fill="#111827" /> : null;
          x += w * 2.2 + 1.2;
          return rect;
        })}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: "center", justifyContent: "center", paddingHorizontal: 12 },
});
