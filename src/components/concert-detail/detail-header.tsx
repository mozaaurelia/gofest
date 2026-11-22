import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import Svg, { Path } from "react-native-svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSavedTickets } from "../../context/saved-tickets-context";
import ShareWhatsAppButton from "./share-whatsapp-button";

type DetailHeaderProps = {
  title: string;
  date: string;
  time: string;
  venue: string;
  concertId?: string;
  concertLink?: string;
};

export default function DetailHeader({ title, date, time, venue, concertId, concertLink }: DetailHeaderProps) {
  const { isSaved, toggle } = useSavedTickets();
  const insets = useSafeAreaInsets();
  const saved = concertId ? isSaved(concertId) : false;

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
      return;
    }
    router.replace("/");
  };

  return (
    <View style={[styles.row, { paddingTop: insets.top + 8 }]}>
      <Pressable
        onPress={handleBack}
        hitSlop={12}
        accessibilityRole="button"
        accessibilityLabel="Back"
        android_ripple={{ color: "transparent" }}
        style={({ pressed }) => [styles.iconButton, pressed && styles.iconButtonPressed]}
      >
        <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
          <Path d="M15 6l-6 6 6 6" stroke="#FFFFFF" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </Pressable>

      <Text style={styles.title} numberOfLines={1}>{title}</Text>

      <View style={styles.rightRow}>
        <Pressable
          onPress={() => concertId && toggle(concertId)}
          hitSlop={8}
          style={[styles.iconButton, saved && styles.iconButtonActive]}
        >
          <Svg viewBox="0 0 24 24" width={18} height={18} fill={saved ? "#FFFFFF" : "none"}>
            <Path
              d="M6.5 4.5h11a1.2 1.2 0 0 1 1.2 1.2v13.2l-6.2-3.6-6.2 3.6V5.7a1.2 1.2 0 0 1 1.2-1.2Z"
              stroke="#FFFFFF"
              strokeWidth={1.9}
              strokeLinejoin="round"
            />
          </Svg>
        </Pressable>

        <ShareWhatsAppButton
          title={title}
          date={date}
          time={time}
          venue={venue}
          concertId={concertId}
          concertLink={concertLink}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    position: "absolute", top: 0, left: 0, right: 0, zIndex: 10,
    flexDirection: "row", alignItems: "center", justifyContent: "space-between",
    paddingHorizontal: 12, paddingTop: 8,
  },
  iconButton: { width: 36, height: 36, borderRadius: 18, alignItems: "center", justifyContent: "center" },
  iconButtonPressed: { backgroundColor: "rgba(255,255,255,0.18)", opacity: 0.7 },
  iconButtonActive: { backgroundColor: "rgba(255,255,255,0.18)" },
  rightRow: { flexDirection: "row", alignItems: "center", gap: 2 },
  title: { flex: 1, marginHorizontal: 8, fontSize: 14, fontWeight: "700", color: "#FFFFFF", textAlign: "center" },
});