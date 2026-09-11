import React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { gfColors } from "../../constants/gf-theme";

type DetailPosterProps = { from: string; to: string };

export default function DetailPoster({ from, to }: DetailPosterProps) {
  const { width } = useWindowDimensions();
  const posterWidth = width * 0.62;
  const posterHeight = posterWidth * (4 / 3);

  return (
    <View style={[styles.wrap, { backgroundColor: from }]}>
      {/* Ambient gradient blur di belakang poster, warna ngikutin poster-nya */}
      <View style={[StyleSheet.absoluteFill, { backgroundColor: to, opacity: 0.35 }]} />

      {/* taro image mu di sini - ganti View di bawah jadi <Image> */}
      <View style={[styles.poster, { width: posterWidth, height: posterHeight, backgroundColor: from }]}>
        <View style={[StyleSheet.absoluteFill, { backgroundColor: to, opacity: 0.6 }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { height: 380, alignItems: "center", justifyContent: "center", paddingTop: 60 },
  poster: { borderRadius: 18, borderWidth: 2, borderColor: "rgba(255,255,255,0.15)" },
});