import React from "react";
import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type SeatMapImageProps = {
  image?: any;
  onPress?: () => void;
};

export default function SeatMapImage({ image, onPress }: SeatMapImageProps) {
  const { width: screenWidth } = useWindowDimensions();
  // dikecilkan dikit biar tidak dempet: beri margin lebih lega, ratio sedikit dipendekin dari 1.42 -> 1.35
  const horizontalPadding = 28;
  const cardWidth = screenWidth - horizontalPadding * 2;

  return (
    <View style={styles.wrap}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.card, { width: cardWidth, height: cardWidth * 1.35 }, pressed && { opacity: 0.92 }]}
      >
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
        {/* tap hint — subtle */}
        <View style={styles.tapHint} pointerEvents="none">
          <Text style={styles.tapHintText}>Tap untuk memperbesar</Text>
        </View>
      </Pressable>
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
    alignItems: "center",
  },
  card: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#111827",
    // width & height di-set dinamis dari screenWidth biar portrait panjang-lebar sama kayak referensi
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
    color: "#E2E5EA",
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
  tapHint: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0,0,0,0.42)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  tapHintText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#FFFFFF",
    letterSpacing: 0.2,
  },
});
