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
    marginHorizontal: 20,
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#DDE3EA",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  pressed: {
    opacity: 0.85,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#3DBED4",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    flex: 1,
    fontSize: 16,
    fontWeight: "800",
    color: "#111827",
  },
});
