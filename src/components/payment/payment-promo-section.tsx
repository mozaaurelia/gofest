import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TrophyIcon } from "./payment-icons";

function ShopeePayLogo() {
  return (
    <View style={styles.logoRow}>
      <View style={styles.logoMark}>
        <Text style={styles.logoLetter}>S</Text>
      </View>
      <View>
        <Text style={styles.logoTop}>Shopee</Text>
        <Text style={styles.logoBottom}>Pay</Text>
      </View>
    </View>
  );
}

export default function PaymentPromoSection() {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Promo Pembayaran</Text>

      <Pressable style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}>
        <View style={styles.ribbon}>
          <TrophyIcon size={13} />
          <Text style={styles.ribbonText}>Special Offer</Text>
        </View>

        <ShopeePayLogo />
        <Text style={styles.cardLabel}>ShopeePay / SPayLater</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginHorizontal: 16,
    marginTop: 14,
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 14,
    backgroundColor: "#FFF5EE",
  },
  title: {
    fontSize: 16,
    fontWeight: "800",
    color: "#0F2540",
  },
  card: {
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#F2DED2",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  cardPressed: {
    opacity: 0.85,
  },
  ribbon: {
    position: "absolute",
    top: -12,
    right: -6,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#F26522",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  ribbonText: {
    fontSize: 11.5,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  logoMark: {
    width: 26,
    height: 26,
    borderRadius: 6,
    backgroundColor: "#EE4D2D",
    alignItems: "center",
    justifyContent: "center",
  },
  logoLetter: {
    fontSize: 18,
    fontWeight: "900",
    color: "#FFFFFF",
  },
  logoTop: {
    fontSize: 9,
    fontWeight: "700",
    color: "#EE4D2D",
    lineHeight: 11,
  },
  logoBottom: {
    fontSize: 15,
    fontWeight: "900",
    color: "#EE4D2D",
    lineHeight: 16,
  },
  cardLabel: {
    flex: 1,
    fontSize: 14,
    fontWeight: "700",
    color: "#111827",
  },
});
