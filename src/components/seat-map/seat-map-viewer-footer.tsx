import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  image?: any;
  current?: number;
  total?: number;
};

export default function SeatMapViewerFooter({ image, current = 1, total = 1 }: Props) {
  return (
    <View style={styles.wrap} pointerEvents="none">
      <View style={styles.badge}>
        <Text style={styles.badgeText}>
          {current}/{total}
        </Text>
      </View>

      <View style={styles.thumbWrap}>
        {image ? (
          <Image source={image} style={styles.thumb} resizeMode="cover" />
        ) : (
          <View style={[styles.thumb, styles.thumbPlaceholder]} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: "absolute",
    left: 16,
    bottom: 28,
    gap: 12,
    alignItems: "flex-start",
  },
  badge: {
    minWidth: 44,
    height: 28,
    paddingHorizontal: 10,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.22)",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  thumbWrap: {
    width: 72,
    height: 72,
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    backgroundColor: "#111111",
  },
  thumb: {
    width: "100%",
    height: "100%",
  },
  thumbPlaceholder: {
    backgroundColor: "#1F1F1F",
  },
});
