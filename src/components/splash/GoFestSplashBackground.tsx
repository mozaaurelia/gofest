import React from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  children?: React.ReactNode;
};

export default function GoFestSplashBackground({ children }: Props) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EFF1F3", // match referensi light grey Go fest!
  },
});
