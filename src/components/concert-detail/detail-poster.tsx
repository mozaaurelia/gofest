import React from "react";
import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet, View, useWindowDimensions } from "react-native";
import MetallicBackground from "../ui/metallic-background";

type DetailPosterProps = { from: string; to: string; image: ImageSourcePropType };

export default function DetailPoster({ from, to, image }: DetailPosterProps) {
  const { width } = useWindowDimensions();
  const posterWidth = width * 0.62;
  const posterHeight = posterWidth * (4 / 3);

  return (
    <View style={styles.wrap}>
      {/* Background metalik abu-putih berkilau menyala + tint aksen poster (sama seperti hero carousel) */}
      <MetallicBackground />
      <View style={[StyleSheet.absoluteFill, { backgroundColor: to, opacity: 0.16 }]} pointerEvents="none" />

      {/* Poster konser sesuai kartu yang diklik */}
      <View style={[styles.poster, { width: posterWidth, height: posterHeight, overflow: "hidden" }]}>
        <Image source={image} style={StyleSheet.absoluteFill} contentFit="cover" />
        <View style={[StyleSheet.absoluteFill, { backgroundColor: to, opacity: 0.12 }]} pointerEvents="none" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { height: 380, alignItems: "center", justifyContent: "center", paddingTop: 60, overflow: "hidden" },
  poster: { borderRadius: 18, borderWidth: 2, borderColor: "rgba(255,255,255,0.85)", shadowColor: "#000", shadowOpacity: 0.18, shadowRadius: 12, shadowOffset: { width: 0, height: 6 }, elevation: 8 },
});