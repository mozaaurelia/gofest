import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { gfColors } from "../../constants/gf-theme";

type AuthSwitchLinkProps = { question: string; actionLabel: string; href: "/auth/login" | "/auth/register" };

export default function AuthSwitchLink({ question, actionLabel, href }: AuthSwitchLinkProps) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.question}>
        {question} <Link href={href} style={styles.action}>{actionLabel}</Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: "center", marginTop: 20 },
  question: { fontSize: 12.5, color: gfColors.textMuted },
  action: { fontWeight: "700", color: gfColors.teal },
});