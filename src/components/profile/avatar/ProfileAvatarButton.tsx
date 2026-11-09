import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { gfColors } from "@/constants/gf-theme";
import { CameraIcon } from "./avatar-icons";

type Props = {
  uri?: string | null;
  size?: number;
  fallback: React.ReactNode;
  onPress: () => void;
};

export function ProfileAvatarButton({ uri, size = 84, fallback, onPress }: Props) {
  const ringSize = size + 8;

  return (
    <View style={{ width: ringSize, height: ringSize }}>
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        style={({ pressed }) => [
          styles.ring,
          { width: ringSize, height: ringSize, borderRadius: ringSize / 2 },
          pressed && styles.pressed,
        ]}
      >
        <View style={[styles.inner, { width: size, height: size, borderRadius: size / 2 }]}>
          {uri ? (
            <Image source={{ uri }} style={{ width: size, height: size }} resizeMode="cover" />
          ) : (
            fallback
          )}
        </View>
      </Pressable>

      <View style={styles.verifiedBadge}>
        <Svg viewBox="0 0 24 24" width={12} height={12} fill="none">
          <Circle cx={12} cy={12} r={10} fill={gfColors.teal} />
          <Path d="M7 12l3 3 6-6" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </View>

      <View style={styles.cameraBadge}>
        <CameraIcon size={13} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ring: {
    backgroundColor: "#FFFFFF",
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
  },
  pressed: { opacity: 0.85 },
  inner: {
    overflow: "hidden",
    backgroundColor: "#FFF7ED",
    alignItems: "center",
    justifyContent: "center",
  },
  verifiedBadge: {
    position: "absolute",
    bottom: 2,
    right: 6,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  cameraBadge: {
    position: "absolute",
    bottom: 2,
    left: 6,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
