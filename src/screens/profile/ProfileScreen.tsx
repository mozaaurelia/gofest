import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Svg, { Path, Circle } from "react-native-svg";
import { useTranslation } from "@/context/language-context";
import { useAuth } from "@/context/auth-context";
import { useSavedTickets } from "@/context/saved-tickets-context";
import { useProfileAvatar } from "@/context/profile-avatar-context";
import { useProfileName } from "@/context/profile-name-context";
import { LanguageSwitcher } from "@/components/language";
import { OnboardingBackground } from "@/components/onboarding";
import { gfColors } from "@/constants/gf-theme";
import { AvatarSourceModal, MozaAvatarCircle, ProfileAvatarButton } from "@/components/profile/avatar";
import AccountMenuItem, {
  AboutIcon,
  HelpIcon,
  LanguageIcon,
  LogoutIcon,
  PrivacyIcon,
  RatingIcon,
  TermsIcon,
} from "@/components/profile/account/AccountMenuItem";

const NAVY = "#142C4A";

function QuickAction({ icon, label, onPress }: { icon: React.ReactNode; label: string; onPress?: () => void }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.qaItem, pressed && { opacity: 0.7 }]}>
      <View style={styles.qaIconWrap}>{icon}</View>
      <Text style={styles.qaLabel} numberOfLines={1}>{label}</Text>
    </Pressable>
  );
}

export default function ProfileScreen() {
  const { t } = useTranslation();
  const { signOut } = useAuth();
  const [langOpen, setLangOpen] = useState(false);
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [nameOpen, setNameOpen] = useState(false);
  const [draftName, setDraftName] = useState("");
  const { savedIds } = useSavedTickets();
  const { avatarUri, pickFromLibrary, takePhoto, removeAvatar } = useProfileAvatar();
  const { name, updateName } = useProfileName();

  const openNameEditor = () => {
    setDraftName(name);
    setNameOpen(true);
  };

  const closeNameEditor = () => setNameOpen(false);

  const canSaveName = draftName.trim().length > 0;

  const handleSignOut = () => {
    signOut();
    router.replace("/");
  };

  const handleSaveName = () => {
    if (!canSaveName) return;
    updateName(draftName);
    setNameOpen(false);
  };

  const handlePickPhoto = async (source: "camera" | "library") => {
    try {
      const result = source === "camera" ? await takePhoto() : await pickFromLibrary();
      if (result.status === "denied") {
        Alert.alert(
          t("profile.photoPermissionTitle"),
          t(source === "camera" ? "profile.photoCameraDenied" : "profile.photoLibraryDenied")
        );
      }
    } catch {
      Alert.alert(t("profile.photoErrorTitle"), t("profile.photoErrorMessage"));
    }
  };

  return (
    <View style={styles.root}>
      <OnboardingBackground />

      <SafeAreaView edges={["top"]} style={styles.headerSafe}>
        <Text style={styles.headerTitle}>{t("profile.account")}</Text>
      </SafeAreaView>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* Sheet transparan agar gradasi background terlihat */}
        <View style={styles.sheet}>
          {/* Avatar bulat overlapping header */}
          <View style={styles.avatarWrap}>
            <ProfileAvatarButton
              uri={avatarUri}
              size={84}
              fallback={<MozaAvatarCircle size={84} />}
              onPress={() => setAvatarOpen(true)}
            />
          </View>

          <Pressable
            onPress={openNameEditor}
            style={({ pressed }) => [styles.nameRow, pressed && styles.nameRowPressed]}
            accessibilityRole="button"
            accessibilityLabel={t("profile.editName")}
          >
            <Text style={styles.name}>{name}</Text>
            <View style={styles.nameEditIcon}>
              <Svg viewBox="0 0 24 24" width={13} height={13} fill="none">
                <Path d="M4 20h4L18 10a2.83 2.83 0 0 0-4-4L4 16v4Z" stroke={gfColors.teal} strokeWidth={1.9} strokeLinejoin="round" />
                <Path d="m13.5 6.5 4 4" stroke={gfColors.teal} strokeWidth={1.9} strokeLinecap="round" />
              </Svg>
            </View>
          </Pressable>
          <Text style={styles.email}>moza@gofest.com • {t("profile.seeProfile")}</Text>

          {/* Stats seperti contoh Income/Expense — pakai warna app (teal / navy) */}
          <View style={styles.statsCard}>
            <Pressable
              style={({ pressed }) => [styles.statItem, pressed && styles.statItemPressed]}
              onPress={() =>
                router.push({
                  pathname: "/(tabs)/ticket",
                  params: { tab: "saved" },
                })
              }
              accessibilityRole="button"
              accessibilityLabel={`${t("tabs.saved")}: ${savedIds.size}`}
            >
              <View style={[styles.statIconWrap, { backgroundColor: "#E6F7FA" }]}>
                <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
                  <Path d="M7 8.5h10v2.6a2.2 2.2 0 0 0 0 4.4v2.6H7v-2.6a2.2 2.2 0 0 0 0-4.4V8.5Z" stroke={gfColors.teal} strokeWidth={1.7} strokeLinejoin="round" />
                </Svg>
              </View>
              <Text style={styles.statValue}>{savedIds.size}</Text>
              <Text style={styles.statLabel}>{t("tabs.saved")}</Text>
            </Pressable>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <View style={[styles.statIconWrap, { backgroundColor: "#EEF2F7" }]}>
                <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
                  <Circle cx={12} cy={8} r={3.2} stroke={NAVY} strokeWidth={1.7} />
                  <Path d="M5 19c0-3 3-5 7-5s7 2 7 5" stroke={NAVY} strokeWidth={1.7} strokeLinecap="round" />
                </Svg>
              </View>
              <Text style={styles.statValue}>0</Text>
              <Text style={styles.statLabel}>{t("tabs.purchased")}</Text>
            </View>
          </View>

          {/* 4 quick actions seperti contoh Top up etc — pakai warna app */}
          <View style={styles.qaGrid}>
            <QuickAction icon={<LanguageIcon />} label={t("profile.language")} onPress={() => setLangOpen(true)} />
            <QuickAction icon={<HelpIcon />} label={t("profile.helpCenter")} onPress={() => Alert.alert(t("profile.helpCenter"), t("profile.helpCenterBody"))} />
            <QuickAction icon={<AboutIcon />} label={t("profile.about")} onPress={() => Alert.alert(t("profile.about"), t("profile.aboutBody"))} />
            <QuickAction icon={<RatingIcon />} label={t("profile.giveRating")} onPress={() => Alert.alert(t("profile.giveRating"), "v1.13.7")} />
          </View>

          {/* GENERAL list seperti contoh */}
          <Text style={styles.generalTitle}>{t("profile.general")}</Text>
          <View style={styles.generalCard}>
            <AccountMenuItem icon={<LanguageIcon />} label={t("profile.language")} onPress={() => setLangOpen(true)} />
            <View style={styles.divider} />
            <AccountMenuItem icon={<HelpIcon />} label={t("profile.helpCenter")} onPress={() => Alert.alert(t("profile.helpCenter"), t("profile.helpCenterBody"))} />
            <View style={styles.divider} />
            <AccountMenuItem icon={<AboutIcon />} label={t("profile.about")} onPress={() => Alert.alert(t("profile.about"), t("profile.aboutBody"))} />
            <View style={styles.divider} />
            <AccountMenuItem icon={<TermsIcon />} label={t("profile.terms")} onPress={() => Alert.alert(t("profile.terms"), t("profile.termsBody"))} />
            <View style={styles.divider} />
            <AccountMenuItem icon={<PrivacyIcon />} label={t("profile.privacy")} onPress={() => Alert.alert(t("profile.privacy"), t("profile.privacyBody"))} />
            <View style={styles.divider} />
            <AccountMenuItem icon={<RatingIcon />} label={t("profile.giveRating")} value="v1.13.7" onPress={() => Alert.alert(t("profile.giveRating"), "v1.13.7")} />
            <View style={styles.divider} />
            <AccountMenuItem icon={<LogoutIcon />} label={t("auth.signOut")} onPress={handleSignOut} />
          </View>

          <View style={{ height: 24 }} />
        </View>
      </ScrollView>

      <AvatarSourceModal
        visible={avatarOpen}
        canRemove={!!avatarUri}
        onClose={() => setAvatarOpen(false)}
        onCamera={() => handlePickPhoto("camera")}
        onGallery={() => handlePickPhoto("library")}
        onRemove={removeAvatar}
      />

      {/* Edit name modal */}
      <Modal visible={nameOpen} transparent animationType="fade" onRequestClose={closeNameEditor}>
        <KeyboardAvoidingView
          style={styles.modalOverlay}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <Pressable style={StyleSheet.absoluteFill} onPress={closeNameEditor} />
          <View style={styles.modalCard}>
            <View style={styles.handle} />
            <Text style={styles.modalTitle}>{t("profile.editName")}</Text>
            <Text style={styles.modalSub}>{t("profile.editNameSubtitle")}</Text>
            <Text style={styles.inputLabel}>{t("profile.nameLabel")}</Text>
            <TextInput
              value={draftName}
              onChangeText={setDraftName}
              placeholder={t("profile.namePlaceholder")}
              placeholderTextColor={gfColors.textMuted}
              style={styles.nameInput}
              autoFocus
              maxLength={40}
              returnKeyType="done"
              onSubmitEditing={handleSaveName}
            />
            <View style={styles.modalActions}>
              <Pressable onPress={closeNameEditor} style={[styles.modalBtn, styles.modalBtnGhost]}>
                <Text style={styles.modalBtnGhostText}>{t("profile.cancelEditName")}</Text>
              </Pressable>
              <Pressable
                onPress={handleSaveName}
                disabled={!canSaveName}
                accessibilityState={{ disabled: !canSaveName }}
                style={[styles.modalBtn, styles.modalBtnPrimary, !canSaveName && styles.modalBtnDisabled]}
              >
                <Text style={styles.modalBtnPrimaryText}>{t("profile.saveName")}</Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      {/* Language modal */}
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
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#F4F9F8" },
  headerSafe: { paddingHorizontal: 22, paddingTop: 10, paddingBottom: 4, zIndex: 2 },
  headerTitle: { fontSize: 22, fontWeight: "800", color: NAVY, marginTop: 2 },
  scroll: { flex: 1 },
  content: { paddingBottom: 120 },
  sheet: {
    paddingTop: 8,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  avatarWrap: {
    alignSelf: "center",
    marginTop: 4,
    width: 92,
    height: 92,
    alignItems: "center",
    justifyContent: "center",
  },
  nameRow: {
    marginTop: 10,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  nameRowPressed: { opacity: 0.6 },
  name: { fontSize: 17, fontWeight: "800", color: gfColors.text, textAlign: "center" },
  nameEditIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#E6F7FA",
    alignItems: "center",
    justifyContent: "center",
  },
  email: { marginTop: 4, fontSize: 12, color: gfColors.textMuted, textAlign: "center" },
  statsCard: {
    marginTop: 16,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: gfColors.border,
    paddingVertical: 16,
    shadowColor: "#1A2E4D",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },
  statItem: { flex: 1, alignItems: "center", gap: 4 },
  statItemPressed: { opacity: 0.6 },
  statIconWrap: { width: 32, height: 32, borderRadius: 16, alignItems: "center", justifyContent: "center" },
  statValue: { fontSize: 16, fontWeight: "800", color: gfColors.text },
  statLabel: { fontSize: 11, color: gfColors.textMuted, fontWeight: "600" },
  statDivider: { width: 1, backgroundColor: gfColors.border, marginVertical: 4 },
  qaGrid: {
    marginTop: 16,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: gfColors.border,
    paddingVertical: 14,
  },
  qaItem: { flex: 1, alignItems: "center", gap: 8 },
  qaIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: gfColors.surface,
    borderWidth: 1,
    borderColor: gfColors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  qaLabel: { fontSize: 11, fontWeight: "600", color: gfColors.text, textAlign: "center" },
  generalTitle: { marginTop: 20, fontSize: 11, fontWeight: "700", color: gfColors.textMuted, letterSpacing: 0.8, marginBottom: 8 },
  generalCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: gfColors.border,
    overflow: "hidden",
  },
  divider: { height: 1, backgroundColor: gfColors.border, marginLeft: 52 },
  modalOverlay: { flex: 1, backgroundColor: "rgba(15,42,77,0.32)", justifyContent: "flex-end", padding: 16 },
  modalCard: { backgroundColor: "#FFFFFF", borderRadius: 16, padding: 16, paddingTop: 12 },
  handle: { alignSelf: "center", width: 36, height: 4, borderRadius: 2, backgroundColor: "#E5E7EB", marginBottom: 12 },
  modalTitle: { fontSize: 16, fontWeight: "800", color: gfColors.text, textAlign: "center" },
  modalSub: { fontSize: 12, color: gfColors.textMuted, textAlign: "center", marginTop: 4 },
  closeBtn: { marginTop: 16, backgroundColor: gfColors.surface, borderRadius: 10, paddingVertical: 12, alignItems: "center" },
  closeText: { fontSize: 14, fontWeight: "700", color: gfColors.text },
  inputLabel: { marginTop: 18, marginBottom: 6, fontSize: 12, fontWeight: "700", color: gfColors.text },
  nameInput: {
    height: 48,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#D3DEE0",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 14,
    fontSize: 14,
    fontWeight: "600",
    color: gfColors.text,
  },
  modalActions: { flexDirection: "row", gap: 10, marginTop: 16 },
  modalBtn: { flex: 1, height: 46, borderRadius: 12, alignItems: "center", justifyContent: "center" },
  modalBtnGhost: { backgroundColor: gfColors.surface, borderWidth: 1, borderColor: gfColors.border },
  modalBtnGhostText: { fontSize: 14, fontWeight: "700", color: gfColors.text },
  modalBtnPrimary: { backgroundColor: gfColors.teal },
  modalBtnPrimaryText: { fontSize: 14, fontWeight: "800", color: "#FFFFFF" },
  modalBtnDisabled: { opacity: 0.5 },
});
