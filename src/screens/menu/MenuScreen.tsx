import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useTranslation } from "@/context/language-context";
import {
  AccountMenuIcon,
  CalendarMenuIcon,
  HelpMenuIcon,
  LanguageMenuIcon,
  LanguageSheet,
  MenuBackground,
  MenuCard,
  MenuCloseButton,
} from "@/components/menu";
import type { MenuEntry } from "@/components/menu";

export default function MenuScreen() {
  const { t } = useTranslation();
  const [languageOpen, setLanguageOpen] = useState(false);

  const handleClose = () => {
    if (router.canGoBack()) {
      router.back();
      return;
    }
    router.replace("/");
  };

  const items: MenuEntry[] = [
    {
      key: "account",
      icon: <AccountMenuIcon />,
      label: t("profile.account"),
      onPress: () => router.navigate("/(tabs)/profile"),
    },
    {
      key: "calendar",
      icon: <CalendarMenuIcon />,
      label: t("calendar.title"),
      onPress: () => router.push("/calendar"),
    },
    {
      key: "language",
      icon: <LanguageMenuIcon />,
      label: t("profile.language"),
      onPress: () => setLanguageOpen(true),
    },
    {
      key: "help",
      icon: <HelpMenuIcon />,
      label: t("profile.helpCenter"),
      onPress: () => Alert.alert(t("profile.helpCenter"), t("profile.helpCenterBody")),
    },
  ];

  return (
    <View style={styles.root}>
      <MenuBackground />

      <SafeAreaView style={styles.flex} edges={["top", "bottom"]}>
        <View style={styles.content}>
          <View style={styles.closeRow}>
            <MenuCloseButton onPress={handleClose} accessibilityLabel={t("common.close")} />
          </View>
          <MenuCard items={items} />
        </View>
      </SafeAreaView>

      <LanguageSheet visible={languageOpen} onClose={() => setLanguageOpen(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#EDEEF0",
  },
  flex: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  closeRow: {
    marginLeft: 2,
    marginBottom: 16,
  },
});
