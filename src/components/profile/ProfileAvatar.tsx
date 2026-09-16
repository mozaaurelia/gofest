import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  uri?: string;
  name?: string;
  size?: number;
};

export function ProfileAvatar({ uri, name = "T", size = 112 }: Props) {
  const initial = name.trim().charAt(0).toUpperCase();

  return (
    <View style={[styles.shadow, { width: size + 8, height: size + 8, borderRadius: (size + 8) / 2 }]}>
      <View style={[styles.ring, { width: size + 8, height: size + 8, borderRadius: (size + 8) / 2 }]}>
        <View style={[styles.inner, { width: size, height: size, borderRadius: size / 2 }]}>
          {uri ? (
            <Image source={{ uri }} style={{ width: size, height: size, borderRadius: size / 2 }} />
          ) : (
            <View style={[styles.fallback, { width: size, height: size, borderRadius: size / 2 }]}>
              <Text style={styles.fallbackText}>{initial}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#7A4DFF",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
  },
  ring: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
  inner: {
    overflow: "hidden",
    backgroundColor: "#F0E6FF",
    alignItems: "center",
    justifyContent: "center",
  },
  fallback: {
    backgroundColor: "#E8D9FF",
    alignItems: "center",
    justifyContent: "center",
  },
  fallbackText: {
    fontSize: 42,
    fontWeight: "800",
    color: "#7C5CFF",
  },
});
