import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { ChevronRightIcon, PromoTicketIcon } from "./payment-icons";

export default function PaymentPromoBanner() {
  return (
    <Pressable
      onPress={() => Alert.alert("Promo", "Promo akan segera hadir.")}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <View style={styles.iconWrap}>
        <PromoTicketIcon size={24} color="#FFFFFF" />
      </View>
      <Text style={styles.label}>Makin hemat pakai promo</Text>
      <ChevronRightIcon size={20} color="#111827" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#DDE3EA",
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  pressed: {
    opacity: 0.85,
  },
  iconWrap: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#3DBED4",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    flex: 1,
    fontSize: 14,
    fontWeight: "700",
    color: "#111827",
  },
});
