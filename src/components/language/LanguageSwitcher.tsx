import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useTranslation } from "@/context/language-context";
import { gfColors } from "@/constants/gf-theme";

type Props = {
  compact?: boolean;
};

export default function LanguageSwitcher({ compact = false }: Props) {
  const { language, setLanguage, t } = useTranslation();

  return (
    <View style={[styles.wrap, compact && styles.wrapCompact]}>
      {!compact && <Text style={styles.label}>{t("common.language")}</Text>}
      <View style={styles.pill}>
        <Pressable
          onPress={() => setLanguage("id")}
          style={[styles.btn, language === "id" && styles.btnActive]}
        >
          <Text style={[styles.btnText, language === "id" && styles.btnTextActive]}>{t("common.id")}</Text>
        </Pressable>
        <Pressable
          onPress={() => setLanguage("en")}
          style={[styles.btn, language === "en" && styles.btnActive]}
        >
          <Text style={[styles.btnText, language === "en" && styles.btnTextActive]}>{t("common.en")}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  wrapCompact: {
    gap: 0,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: gfColors.textMuted,
  },
  pill: {
    flexDirection: "row",
    backgroundColor: gfColors.surface,
    borderRadius: 100,
    padding: 3,
    borderWidth: 1,
    borderColor: gfColors.border,
  },
  btn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 100,
  },
  btnActive: {
    backgroundColor: gfColors.teal,
  },
  btnText: {
    fontSize: 12,
    fontWeight: "700",
    color: gfColors.textMuted,
  },
  btnTextActive: {
    color: "#FFFFFF",
  },
});
