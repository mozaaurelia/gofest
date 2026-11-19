import React from "react";
import { StyleSheet, View } from "react-native";
import BlueMetallicBackground from "../ui/blue-metallic-background";

type Props = {
  children?: React.ReactNode;
};

export default function GoFestSplashBackground({ children }: Props) {
  return (
    <View style={styles.container}>
      <BlueMetallicBackground />

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8FB8F5",
    overflow: "hidden",
  },
});
