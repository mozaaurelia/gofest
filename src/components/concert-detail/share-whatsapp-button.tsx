import React from "react";
import { Alert, Linking, Pressable, StyleSheet } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

type ShareWhatsAppButtonProps = {
  title: string;
  date: string;
  time: string;
  venue: string;
  concertId?: string;
  concertLink?: string;
};

export default function ShareWhatsAppButton({
  title,
  date,
  time,
  venue,
  concertId,
  concertLink,
}: ShareWhatsAppButtonProps) {
  const handlePress = async () => {
    const message = [
      `Yuk datang ke konser ${title}!`,
      `Tanggal: ${date}`,
      `Waktu: ${time}`,
      `Lokasi: ${venue}`,
      concertLink ? `Link konser: ${concertLink}` : concertId ? `ID konser: ${concertId}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;

    try {
      const supported = await Linking.canOpenURL(url);
      if (!supported) {
        throw new Error("WhatsApp URL is not supported");
      }
      await Linking.openURL(url);
    } catch {
      Alert.alert("WhatsApp tidak tersedia", "WhatsApp tidak dapat dibuka di perangkat atau browser ini.");
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      hitSlop={8}
      accessibilityRole="button"
      accessibilityLabel="Bagikan konser ke WhatsApp"
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
        <Circle cx="18" cy="5" r="2.4" stroke="#FFFFFF" strokeWidth={1.8} />
        <Circle cx="6" cy="12" r="2.4" stroke="#FFFFFF" strokeWidth={1.8} />
        <Circle cx="18" cy="19" r="2.4" stroke="#FFFFFF" strokeWidth={1.8} />
        <Path d="M8.2 10.8 15.8 6.6M8.2 13.2l7.6 4.2" stroke="#FFFFFF" strokeWidth={1.6} strokeLinecap="round" />
      </Svg>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { width: 36, height: 36, borderRadius: 18, alignItems: "center", justifyContent: "center" },
  pressed: { backgroundColor: "rgba(255,255,255,0.18)", opacity: 0.7 },
});
