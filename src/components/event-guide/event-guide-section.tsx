import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { gfColors } from "@/constants/gf-theme";

type Props = {
  icon: React.ReactNode;
  title: string;
  items: string[];
};

export default function EventGuideSection({ icon, title, items }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.iconWrap}>{icon}</View>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.list}>
        {items.map((item, index) => (
          <View key={`${title}-${index}`} style={styles.itemRow}>
            <View style={styles.bullet} />
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginTop: 14,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: gfColors.border,
    padding: 16,
    shadowColor: "#1A2E4D",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconWrap: {
    width: 38,
    height: 38,
    borderRadius: 11,
    backgroundColor: "#E8F7FA",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    fontSize: 15,
    fontWeight: "800",
    color: gfColors.text,
  },
  list: {
    marginTop: 12,
    gap: 9,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  bullet: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: gfColors.teal,
    marginTop: 6,
  },
  itemText: {
    flex: 1,
    fontSize: 12.5,
    lineHeight: 18,
    color: gfColors.textMuted,
    fontWeight: "500",
  },
});
