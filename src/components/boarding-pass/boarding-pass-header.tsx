import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import Svg, { Path, Circle } from "react-native-svg";
import { gfColors } from "@/constants/gf-theme";
import { useTranslation } from "@/context/language-context";

type Props = {
  title?: string;
};

export default function BoardingPassHeader({ title }: Props) {
  const { t } = useTranslation();
  const displayTitle = title ?? t("boarding.title");
  return (
    <View style={styles.wrap}>
      <Pressable
        onPress={() => router.back()}
        android_ripple={{ color: "transparent" }}
        style={({ pressed }) => [styles.backBtn, pressed && { opacity: 0.6 }]}
      >
        <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
          <Path d="M15 18l-6-6 6-6" stroke={gfColors.text} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </Pressable>

      <Text style={styles.title}>{displayTitle}</Text>

      <View style={styles.right}>
        <Pressable
          onPress={() => {}}
          android_ripple={{ color: "transparent" }}
          style={({ pressed }) => [styles.actionBtn, styles.actionPrimary, pressed && { opacity: 0.8 }]}
        >
          <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
            <Path d="M12 4v10M12 14l-3-3M12 14l3-3" stroke="#FFFFFF" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2" stroke="#FFFFFF" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        </Pressable>
        <Pressable
          onPress={() => {}}
          android_ripple={{ color: "transparent" }}
          style={({ pressed }) => [styles.actionBtn, pressed && { opacity: 0.6 }]}
        >
          <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
            <Circle cx={12} cy={12} r={1.6} fill={gfColors.text} />
            <Circle cx={19} cy={12} r={1.6} fill={gfColors.text} />
            <Circle cx={5} cy={12} r={1.6} fill={gfColors.text} />
          </Svg>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
    backgroundColor: gfColors.bg,
    borderBottomWidth: 1,
    borderBottomColor: "#EEF0F3",
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: gfColors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  title: { flex: 1, marginLeft: 12, fontSize: 15, fontWeight: "700", color: gfColors.text },
  right: { flexDirection: "row", alignItems: "center", gap: 8 },
  actionBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: gfColors.border,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: gfColors.surface,
  },
  actionPrimary: {
    backgroundColor: gfColors.teal,
    borderColor: gfColors.teal,
  },
});
