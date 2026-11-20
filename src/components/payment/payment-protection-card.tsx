import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { gfColors } from "@/constants/gf-theme";
import { CheckIcon, ShieldLockIcon } from "./payment-icons";

export default function PaymentProtectionCard() {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <View style={styles.topRow}>
          <ShieldLockIcon size={30} />
          <View style={styles.textWrap}>
            <Text style={styles.title}>Paket Proteksi Aman</Text>
            <Text style={styles.price}>Rp. 10.000/orang</Text>
            <Pressable onPress={() => Alert.alert("Syarat Ketentuan", "Paket proteksi melindungi tiket kamu dari kerusakan dan kehilangan.")}>
              <Text style={styles.terms}>Syarat Ketentuan</Text>
            </Pressable>
          </View>
          <Pressable onPress={() => Alert.alert("Paket Proteksi Aman", "Pilih paket proteksi sesuai kebutuhanmu.")} style={styles.changeBtn}>
            <Text style={styles.changeText}>Ubah</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.greenBar}>
        <CheckIcon size={18} color="#FFFFFF" />
        <Text style={styles.greenText}>Yeay, tiket kamu terlindungi!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#DCE7FF",
    backgroundColor: "#F4F8FF",
    overflow: "hidden",
  },
  content: {
    padding: 14,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  textWrap: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: "800",
    color: "#111827",
  },
  price: {
    marginTop: 5,
    fontSize: 13,
    color: "#374151",
  },
  terms: {
    marginTop: 6,
    fontSize: 12.5,
    fontWeight: "700",
    color: gfColors.brandBlue,
    textDecorationLine: "underline",
  },
  changeBtn: {
    borderWidth: 1.5,
    borderColor: gfColors.brandBlue,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  changeText: {
    fontSize: 13,
    fontWeight: "700",
    color: gfColors.brandBlue,
  },
  greenBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#16A34A",
    paddingHorizontal: 16,
    paddingVertical: 11,
  },
  greenText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});
