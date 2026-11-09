import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useTranslation } from "@/context/language-context";

type Props = {
  onPress: () => void;
};

export default function NewEventBanner({ onPress }: Props) {
  const { t } = useTranslation();

  return (
    <Pressable style={styles.banner} onPress={onPress} accessibilityRole="button">
      <Text style={styles.text}>
        {t("home.newEvent")}{" "}
        <Text style={styles.link}>{t("home.viewTicketInfo")}</Text>
      </Text>
      <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
        <Path d="M14 4h6v6" stroke="#1E6FE8" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M20 4l-8.5 8.5" stroke="#1E6FE8" strokeWidth={1.9} strokeLinecap="round" />
        <Path
          d="M19 14.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3.5"
          stroke="#1E6FE8"
          strokeWidth={1.9}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255,255,255,0.5)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.65)",
    shadowColor: "#000000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
    color: "#232327",
  },
  link: {
    fontWeight: "700",
    color: "#1E6FE8",
  },
});
