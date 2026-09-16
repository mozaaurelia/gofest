import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TICKET_SALE_ITEMS, TicketSaleItem } from "@/constants/ticket-sale-data";
import { useTranslation } from "@/context/language-context";
import TicketOptionCard from "./ticket-option-card";

type Props = {
  quantities: Record<string, number>;
  onChange: (id: string, v: number) => void;
  items?: TicketSaleItem[];
};

export default function TicketOptionsSection({ quantities, onChange, items = TICKET_SALE_ITEMS }: Props) {
  const { t } = useTranslation();
  return (
    <View style={styles.wrap}>
      <Text style={styles.heading}>{t("ticket.generalSale")}</Text>
      <View style={styles.list}>
        {items.map((it) => (
          <TicketOptionCard key={it.id} item={it} qty={quantities[it.id] ?? 0} onChangeQty={(v) => onChange(it.id, v)} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingHorizontal: 16, paddingTop: 16, paddingBottom: 8, backgroundColor: "#FFFFFF" },
  heading: { fontSize: 13, fontWeight: "800", color: "#1E293B", letterSpacing: 0.3 },
  list: { marginTop: 12, gap: 12 },
});
