import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function OnboardingWave() {
  return (
    <View style={styles.wrap} pointerEvents="none">
      <Svg viewBox="0 0 360 12" width="100%" height={12} preserveAspectRatio="none">
        <Path d="M0 12 L0 8 Q9 2 18 8 T36 8 T54 8 T72 8 T90 8 T108 8 T126 8 T144 8 T162 8 T180 8 T198 8 T216 8 T234 8 T252 8 T270 8 T288 8 T306 8 T324 8 T342 8 T360 8 L360 12 Z" fill="#FFFFFF" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({ wrap: { width: "100%", height: 12, backgroundColor: "transparent", marginTop: -1 } });
