import React from "react";
import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet, View, useWindowDimensions } from "react-native";
import { gfColors } from "../../constants/gf-theme";

type DetailPosterProps = { from: string; to: string; image: ImageSourcePropType };

export default function DetailPoster({ from, to, image }: DetailPosterProps) {
  const { width } = useWindowDimensions();
  const posterWidth = width * 0.62;
  const posterHeight = posterWidth * (4 / 3);

  return (
    <View style={[styles.wrap, { backgroundColor: from }]}>
      {/* Ambient gradient blur di belakang poster, warna ngikutin poster-nya */}
      <View style={[StyleSheet.absoluteFill, { backgroundColor: to, opacity: 0.35 }]} />

      {/* Poster konser sesuai kartu yang diklik */}
      <View style={[styles.poster, { width: posterWidth, height: posterHeight, overflow: "hidden" }]}>
        <Image source={image} style={StyleSheet.absoluteFill} contentFit="cover" />
        <View style={[StyleSheet.absoluteFill, { backgroundColor: to, opacity: 0.18 }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { height: 380, alignItems: "center", justifyContent: "center", paddingTop: 60 },
  poster: { borderRadius: 18, borderWidth: 2, borderColor: "rgba(255,255,255,0.15)" },
});