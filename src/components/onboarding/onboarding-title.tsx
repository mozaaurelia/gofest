import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  subtitle?: string;
};

export default function OnboardingTitle({ title, subtitle }: Props) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: "center", paddingHorizontal: 26 },
  title: { fontSize: 26, lineHeight: 33, fontWeight: "800", color: "#FFFFFF", textAlign: "center", letterSpacing: 0.2 },
  subtitle: { fontSize: 14, lineHeight: 21, color: "rgba(255,255,255,0.72)", textAlign: "center", marginTop: 10 },
});
