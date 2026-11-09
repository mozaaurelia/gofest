import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HelpGuideIcon } from "./event-guide-icons";
import { gfColors } from "@/constants/gf-theme";

type Props = {
  title: string;
  body: string;
};

export default function EventGuideHelpCard({ title, body }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.iconWrap}>
        <HelpGuideIcon size={22} />
      </View>
      <View style={styles.textWrap}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: "#F4FBFD",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#D5EEF4",
    padding: 16,
  },
  iconWrap: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#E1F5F9",
    alignItems: "center",
    justifyContent: "center",
  },
  textWrap: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: "800",
    color: gfColors.text,
  },
  body: {
    marginTop: 3,
    fontSize: 12,
    lineHeight: 17,
    color: gfColors.textMuted,
    fontWeight: "500",
  },
});
