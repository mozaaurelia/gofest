import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

type Props = {
  size?: number;
};

export default function GoFestLogo({ size = 72 }: Props) {
  const height = (size / 60) * 76;
  // Tiket miring seperti di referensi — gradient teal -> lime
  return (
    <View style={[styles.wrap, { width: size, height, transform: [{ rotate: "-18deg" }] }]}>
      <Svg viewBox="0 0 60 76" width={size} height={height} fill="none">
        <Defs>
          <LinearGradient id="goFestTicketGrad" x1="0%" y1="5%" x2="100%" y2="95%">
            <Stop offset="0%" stopColor="#18A2C0" />
            <Stop offset="52%" stopColor="#2FB8A6" />
            <Stop offset="100%" stopColor="#8FD14F" />
          </LinearGradient>
        </Defs>
        {/* outline tiket — sama seperti TicketIcon */}
        <Path
          d="M14 4 H38 a6 6 0 0 1 6 6 v6 a4 4 0 0 0 0 8 v14 a6 6 0 0 1 -1.76 4.24 L27 58 L8 39 V12 a8 8 0 0 1 8 -8 Z"
          stroke="url(#goFestTicketGrad)"
          strokeWidth={2.4}
          strokeLinejoin="round"
        />
        {/* perforasi */}
        <Path
          d="M14 38 h.01 M19 38 h.01 M24 38 h.01"
          stroke="url(#goFestTicketGrad)"
          strokeWidth={3}
          strokeLinecap="round"
        />
        {/* 2 garis miring atas */}
        <Path d="M21 20 L29 20" stroke="url(#goFestTicketGrad)" strokeWidth={2.4} strokeLinecap="round" />
        <Path d="M21 26 L27 26" stroke="url(#goFestTicketGrad)" strokeWidth={2.4} strokeLinecap="round" />
        {/* perforasi lengkung bawah */}
        <Path d="M22 47 a3 3 0 0 0 0 6" stroke="url(#goFestTicketGrad)" strokeWidth={2.4} strokeLinecap="round" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: "center",
    justifyContent: "center",
  },
});
