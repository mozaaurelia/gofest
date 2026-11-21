import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Rect } from "react-native-svg";

const SIZE = 25;

function isDarkModule(row: number, column: number) {
  const finderOrigin =
    row < 7 && column < 7
      ? [0, 0]
      : row < 7 && column >= SIZE - 7
        ? [0, SIZE - 7]
        : row >= SIZE - 7 && column < 7
          ? [SIZE - 7, 0]
          : null;

  if (finderOrigin) {
    const [top, left] = finderOrigin;
    const x = column - left;
    const y = row - top;
    return x === 0 || x === 6 || y === 0 || y === 6 || (x >= 2 && x <= 4 && y >= 2 && y <= 4);
  }

  return (row * 13 + column * 7 + row * column * 3) % 11 < 5;
}

export default function BoardingPassBarcode() {
  return (
    <View style={styles.wrap}>
      <Svg viewBox={`0 0 ${SIZE} ${SIZE}`} width={156} height={156}>
        {Array.from({ length: SIZE * SIZE }, (_, index) => {
          const row = Math.floor(index / SIZE);
          const column = index % SIZE;
          return isDarkModule(row, column) ? (
            <Rect key={index} x={column} y={row} width={1} height={1} fill="#111111" />
          ) : null;
        })}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: "center", justifyContent: "center", marginTop: 16 },
});
