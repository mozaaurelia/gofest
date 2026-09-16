import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

const PURPLE = "#C6A3FF";
const PURPLE_DARK = "#B18CFF";

type Props = {
  children?: React.ReactNode;
  onMenuPress?: () => void;
};

function HamburgerIcon() {
  return (
    <View style={styles.hamburger}>
      <View style={styles.hbLine} />
      <View style={[styles.hbLine, { width: 14 }]} />
      <View style={styles.hbLine} />
    </View>
  );
}

function DecorXs() {
  // small X shapes like in reference
  return (
    <>
      <View style={[styles.decoX, { left: 38, top: 52 }]}>
        <View style={[styles.decoXLine, { transform: [{ rotate: "45deg" }] }]} />
        <View style={[styles.decoXLine, { transform: [{ rotate: "-45deg" }] }]} />
      </View>
      <View style={[styles.decoX, { right: 28, top: 78, opacity: 0.9 }]}>
        <View style={[styles.decoXLine, { transform: [{ rotate: "45deg" }] }]} />
        <View style={[styles.decoXLine, { transform: [{ rotate: "-45deg" }] }]} />
      </View>
      <View style={[styles.decoX, { right: 44, top: 22, opacity: 0.7, transform: [{ scale: 0.75 }] }]}>
        <View style={[styles.decoXLine, { transform: [{ rotate: "45deg" }] }]} />
        <View style={[styles.decoXLine, { transform: [{ rotate: "-45deg" }] }]} />
      </View>
    </>
  );
}

export function ProfileHeader({ children, onMenuPress }: Props) {
  return (
    <View style={styles.container}>
      {/* purple background with curved bottom */}
      <View style={styles.purpleBg}>
        <Svg viewBox="0 0 100 24" preserveAspectRatio="none" style={styles.wave} width="100%" height={48}>
          {/* wave bottom - creates smooth dip */}
          <Path d="M0 0 H100 V14 Q72 26 50 14 Q28 2 0 14 Z" fill={PURPLE} />
        </Svg>

        {/* top bar */}
        <View style={styles.topBar}>
          <Pressable onPress={onMenuPress} hitSlop={12} style={styles.menuBtn}>
            <HamburgerIcon />
          </Pressable>
          <View style={{ width: 28 }} />
        </View>

        <DecorXs />

        {/* soft diagonal hatch decoration - faint lines top right */}
        <View style={[styles.hatch, { right: 18, top: 14 }]}>
          <View style={styles.hatchLine} />
          <View style={styles.hatchLine} />
          <View style={styles.hatchLine} />
        </View>
        <View style={[styles.hatch, { left: 120, top: 38, opacity: 0.12 }]}>
          <View style={styles.hatchLine} />
          <View style={styles.hatchLine} />
          <View style={styles.hatchLine} />
        </View>

        {/* extra light dots pattern simulation via opacity views */}
        <View style={[styles.dot, { left: 92, top: 30 }]} />
        <View style={[styles.dot, { right: 82, top: 44, opacity: 0.18 }]} />
      </View>

      {/* avatar overlapping area — placed outside purple but centered */}
      <View style={styles.avatarWrap}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingBottom: 8,
    backgroundColor: "#FFFFFF",
  },
  purpleBg: {
    width: "100%",
    height: 168,
    backgroundColor: PURPLE,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    overflow: "hidden",
    position: "relative",
  },
  wave: {
    position: "absolute",
    bottom: -1,
    left: 0,
    right: 0,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 14,
    paddingHorizontal: 18,
    zIndex: 2,
  },
  menuBtn: {
    width: 32,
    height: 32,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  hamburger: {
    gap: 4.5,
  },
  hbLine: {
    width: 20,
    height: 2.2,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    opacity: 0.95,
  },
  decoX: {
    position: "absolute",
    width: 14,
    height: 14,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.42,
  },
  decoXLine: {
    position: "absolute",
    width: 12,
    height: 1.8,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  hatch: {
    position: "absolute",
    flexDirection: "row",
    gap: 3,
    opacity: 0.18,
    transform: [{ rotate: "-18deg" }],
  },
  hatchLine: {
    width: 22,
    height: 1.6,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  dot: {
    position: "absolute",
    width: 5,
    height: 5,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    opacity: 0.22,
  },
  avatarWrap: {
    marginTop: -58,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3,
  },
});
