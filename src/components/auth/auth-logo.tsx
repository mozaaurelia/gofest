import React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const LOGO_SOURCE = require("@/assets/images/splash-icon.png");
const LOGO_ASPECT_RATIO = 1280 / 416;

type Props = {
  width?: number;
};

export default function AuthLogo({ width = 150 }: Props) {
  return (
    <View style={styles.wrap}>
      <Image
        source={LOGO_SOURCE}
        style={{ width, height: width / LOGO_ASPECT_RATIO }}
        contentFit="contain"
        accessibilityLabel="Gofest"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: "center",
    justifyContent: "center",
  },
});
