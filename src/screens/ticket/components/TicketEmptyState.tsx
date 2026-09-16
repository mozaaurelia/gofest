import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { gfColors } from "@/constants/gf-theme";
import type { TicketTabKey } from "./TicketTabs";

type Props = {
  activeTab: TicketTabKey;
};

export default function TicketEmptyState({ activeTab }: Props) {
  return (
    <View style={styles.emptyWrap}>
      <Text style={styles.emptyTitle}>{activeTab === "purchased" ? "Belum ada tiket" : "Belum ada yang disimpan"}</Text>
      <Text style={styles.emptySub}>
        {activeTab === "purchased" ? "Tiket yang kamu beli akan muncul di sini" : "Tap ikon bookmark di event untuk menyimpan"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyWrap: { paddingHorizontal: 32, paddingTop: 48, alignItems: "center", gap: 6 },
  emptyTitle: { fontSize: 16, fontWeight: "800", color: gfColors.text },
  emptySub: { fontSize: 12.5, color: gfColors.textMuted, textAlign: "center" },
});
