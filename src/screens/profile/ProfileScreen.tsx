import React, { useState } from "react";
import { Alert, Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "@/context/language-context";
import { AccountBanner, AccountProfileCard } from "@/components/profile/account";
import AccountMenuItem, {
  AboutIcon,
  HelpIcon,
  LanguageIcon,
  PrivacyIcon,
  RatingIcon,
  TermsIcon,
} from "@/components/profile/account/AccountMenuItem";
import { LanguageSwitcher } from "@/components/language";
import { gfColors } from "@/constants/gf-theme";

export default function ProfileScreen() {
  const { t } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      {/* Header Account */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t("profile.account")}</Text>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <AccountBanner />

        {/* Overlapping card */}
        <View style={styles.cardWrap}>
          <AccountProfileCard
            name="moza"
            subtitle={t("profile.seeProfile")}
            onPress={() => Alert.alert("Profile", "Lihat profil moza")}
          />
        </View>

        {/* Menu Language & Help */}
        <View style={styles.menuBlock}>
          <AccountMenuItem icon={<LanguageIcon />} label={t("profile.language")} onPress={() => setLangOpen(true)} />
          <View style={styles.divider} />
          <AccountMenuItem icon={<HelpIcon />} label={t("profile.helpCenter")} onPress={() => Alert.alert(t("profile.helpCenter"), "Help Center")} />
        </View>

        <View style={styles.separator} />

        {/* Menu About etc */}
        <View style={styles.menuBlock}>
          <AccountMenuItem icon={<AboutIcon />} label={t("profile.about")} onPress={() => Alert.alert(t("profile.about"), "About LOKÉT")} />
          <View style={styles.divider} />
          <AccountMenuItem icon={<TermsIcon />} label={t("profile.terms")} onPress={() => Alert.alert(t("profile.terms"), "Terms and Conditions")} />
          <View style={styles.divider} />
          <AccountMenuItem icon={<PrivacyIcon />} label={t("profile.privacy")} onPress={() => Alert.alert(t("profile.privacy"), "Privacy Policy")} />
          <View style={styles.divider} />
          <AccountMenuItem
            icon={<RatingIcon />}
            label={t("profile.giveRating")}
            value="v1.13.7"
            onPress={() => Alert.alert(t("profile.giveRating"), "v1.13.7")}
          />
        </View>

        <View style={{ height: 24 }} />
      </ScrollView>

      {/* Language modal — ubah bahasa untuk semua halaman */}
      <Modal visible={langOpen} transparent animationType="fade" onRequestClose={() => setLangOpen(false)}>
        <Pressable style={styles.modalOverlay} onPress={() => setLangOpen(false)}>
          <Pressable style={styles.modalCard} onPress={(e) => e.stopPropagation()}>
            <View style={styles.handle} />
            <Text style={styles.modalTitle}>{t("common.language")}</Text>
            <Text style={styles.modalSub}>{t("common.languageSubtitle")}</Text>
            <View style={{ marginTop: 16 }}>
              <LanguageSwitcher />
            </View>
            <Pressable onPress={() => setLangOpen(false)} style={styles.closeBtn}>
              <Text style={styles.closeText}>{t("common.close")}</Text>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#FFFFFF" },
  header: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 12,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#EEF0F3",
  },
  headerTitle: { fontSize: 22, fontWeight: "800", color: gfColors.text },
  scroll: { flex: 1, backgroundColor: "#F8F9FB" },
  content: { paddingBottom: 120, backgroundColor: "#F8F9FB" },
  cardWrap: {
    marginTop: -28,
    marginHorizontal: 16,
    zIndex: 2,
  },
  menuBlock: {
    marginTop: 16,
    marginHorizontal: 0,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#EEF0F3",
  },
  divider: { height: 1, backgroundColor: "#EEF0F3", marginLeft: 56 },
  separator: { height: 8, backgroundColor: "#F0F2F4", marginTop: 16 },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(15,42,77,0.32)",
    justifyContent: "flex-end",
    padding: 16,
  },
  modalCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    paddingTop: 12,
  },
  handle: { alignSelf: "center", width: 36, height: 4, borderRadius: 2, backgroundColor: "#E5E7EB", marginBottom: 12 },
  modalTitle: { fontSize: 16, fontWeight: "800", color: gfColors.text, textAlign: "center" },
  modalSub: { fontSize: 12, color: gfColors.textMuted, textAlign: "center", marginTop: 4 },
  closeBtn: { marginTop: 16, backgroundColor: gfColors.surface, borderRadius: 10, paddingVertical: 12, alignItems: "center" },
  closeText: { fontSize: 14, fontWeight: "700", color: gfColors.text },
});
