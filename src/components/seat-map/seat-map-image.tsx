import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type SeatMapImageProps = {
  image?: any;
};

export default function SeatMapImage({ image }: SeatMapImageProps) {
  return (
    <View style={styles.wrap}>
      <View style={styles.card}>
        {image ? (
          <Image source={image} style={styles.image} resizeMode="cover" />
        ) : (
          <View style={[styles.image, styles.placeholder]} />
        )}
        <LinearGradient colors={["transparent", "rgba(0,0,0,0.65)"]} style={styles.gradient} />
        <View style={styles.overlay}>
          <Text style={styles.overlayTitle}>T.O.P PRE-STUDIO 2026 in JAKARTA</Text>
          <Text style={styles.overlayDate}>2026. 09. 19 (SAT) 7PM</Text>
          <Text style={styles.overlayVenue}>ISTORA SENAYAN</Text>
        </View>
      </View>
      <Text style={styles.caption}>* Seat map denah kursi untuk referensi — kategori sesuai daftar di atas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: "#FFFFFF",
  },
  card: {
    height: 220,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#111827",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  placeholder: {
    backgroundColor: "#1F2937",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 90,
  },
  overlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 12,
    alignItems: "center",
  },
  overlayTitle: {
    fontSize: 11,
    fontWeight: "800",
    color: "#FFFFFF",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  overlayDate: {
    fontSize: 10,
    color: "#E5E7EB",
    marginTop: 2,
  },
  overlayVenue: {
    fontSize: 11,
    fontWeight: "800",
    color: "#FFFFFF",
    marginTop: 2,
  },
  caption: {
    fontSize: 11,
    color: "#9AA3B2",
    marginTop: 8,
    textAlign: "center",
  },
});
