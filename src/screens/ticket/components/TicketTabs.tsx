import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { gfColors } from "@/constants/gf-theme";

export type TicketTabKey = "purchased" | "saved";

type Props = {
  activeTab: TicketTabKey;
  onChange: (tab: TicketTabKey) => void;
};

export default function TicketTabs({ activeTab, onChange }: Props) {
  return (
    <View style={styles.tabWrap}>
      <View style={styles.tabPill}>
        <Pressable onPress={() => onChange("purchased")} style={[styles.tabBtn, activeTab === "purchased" && styles.tabBtnActive]}>
          <Text style={[styles.tabText, activeTab === "purchased" && styles.tabTextActive]}>Dibeli</Text>
        </Pressable>
        <Pressable onPress={() => onChange("saved")} style={[styles.tabBtn, activeTab === "saved" && styles.tabBtnActive]}>
          <Text style={[styles.tabText, activeTab === "saved" && styles.tabTextActive]}>Disimpan</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabWrap: { paddingHorizontal: 20, paddingTop: 14, paddingBottom: 0, backgroundColor: gfColors.bg },
  tabPill: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#EEF0F3",
  },
  tabBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
    paddingTop: 2,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  tabBtnActive: { borderBottomColor: gfColors.text },
  tabText: { fontSize: 13.5, fontWeight: "600", color: gfColors.textMuted },
  tabTextActive: { color: gfColors.text },
});
