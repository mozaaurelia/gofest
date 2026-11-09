import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { LanguageSwitcher } from "@/components/language";
import { useTranslation } from "@/context/language-context";
import { gfColors } from "@/constants/gf-theme";

type Props = {
  visible: boolean;
  onClose: () => void;
};

export default function LanguageSheet({ visible, onClose }: Props) {
  const { t } = useTranslation();

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.sheet} onPress={(event) => event.stopPropagation()}>
          <View style={styles.handle} />
          <Text style={styles.title}>{t("common.language")}</Text>
          <Text style={styles.subtitle}>{t("common.languageSubtitle")}</Text>
          <View style={styles.switcher}>
            <LanguageSwitcher />
          </View>
          <Pressable
            onPress={onClose}
            style={({ pressed }) => [styles.closeButton, pressed && styles.closeButtonPressed]}
          >
            <Text style={styles.closeText}>{t("common.close")}</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(15,42,77,0.32)",
    justifyContent: "flex-end",
    padding: 16,
  },
  sheet: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    paddingTop: 12,
  },
  handle: {
    alignSelf: "center",
    width: 36,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#E5E7EB",
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "800",
    color: gfColors.text,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 12,
    color: gfColors.textMuted,
    textAlign: "center",
    marginTop: 4,
  },
  switcher: {
    marginTop: 16,
  },
  closeButton: {
    marginTop: 16,
    backgroundColor: gfColors.surface,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },
  closeButtonPressed: {
    opacity: 0.75,
  },
  closeText: {
    fontSize: 14,
    fontWeight: "700",
    color: gfColors.text,
  },
});
