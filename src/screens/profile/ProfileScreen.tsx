import React, { useState } from "react";
import { Alert, Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path, Circle, Rect } from "react-native-svg";
import { useTranslation } from "@/context/language-context";
import { useSavedTickets } from "@/context/saved-tickets-context";
import { LanguageSwitcher } from "@/components/language";
import { gfColors } from "@/constants/gf-theme";
import AccountMenuItem, {
  AboutIcon,
  HelpIcon,
  LanguageIcon,
  PrivacyIcon,
  RatingIcon,
  TermsIcon,
} from "@/components/profile/account/AccountMenuItem";

const NAVY = "#142C4A";

function MozaAvatarCircle({ size = 80 }: { size?: number }) {
  return (
    <View style={{ width: size, height: size, borderRadius: size / 2, overflow: "hidden", backgroundColor: "#FFF7ED" }}>
      <Svg viewBox="0 0 80 80" width={size} height={size}>
        <Rect x={0} y={0} width={80} height={80} rx={40} fill="#FB923C" />
        <Path d="M24 12 L32 2 L40 12 Z" fill="#FB923C" />
        <Path d="M48 12 L56 2 L64 12 Z" fill="#FB923C" />
        <Circle cx={28} cy={38} r={14} fill="#FFFFFF" />
        <Circle cx={52} cy={38} r={14} fill="#FFFFFF" />
        <Circle cx={28} cy={42} r={4} fill="#111827" />
        <Circle cx={52} cy={42} r={4} fill="#111827" />
        <Circle cx={26} cy={38} r={1.8} fill="#FFFFFF" />
        <Circle cx={50} cy={38} r={1.8} fill="#FFFFFF" />
        <Path d="M30 56 Q40 62 50 56" stroke="#111827" strokeWidth={2} fill="none" strokeLinecap="round" />
      </Svg>
    </View>
  );
}

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
  const [langOpen, setLangOpen] = useState(false);
  const { savedIds } = useSavedTickets();

  return (
    <View style={styles.root}>
      {/* Header navy seperti contoh — pakai warna NAVY yang sama dengan nav */}
      <View style={styles.headerBg}>
        <SafeAreaView edges={["top"]} style={styles.headerSafe}>
          <Text style={styles.headerTitle}>{t("profile.account")}</Text>
        </SafeAreaView>
        {/* dekorasi lingkaran halus biar mirip contoh */}
        <View style={styles.headerDeco1} />
        <View style={styles.headerDeco2} />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* Sheet putih rounded seperti contoh */}
        <View style={styles.sheet}>
          {/* Avatar bulat overlapping header */}
          <View style={styles.avatarWrap}>
            <View style={styles.avatarRing}>
              <MozaAvatarCircle size={84} />
            </View>
            <View style={styles.verifiedBadge}>
              <Svg viewBox="0 0 24 24" width={12} height={12} fill="none">
                <Circle cx={12} cy={12} r={10} fill={gfColors.teal} />
                <Path d="M7 12l3 3 6-6" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </Svg>
            </View>
          </View>

          <Text style={styles.name}>moza</Text>
          <Text style={styles.email}>moza@loket.com • {t("profile.seeProfile")}</Text>

          {/* Stats seperti contoh Income/Expense — pakai warna app (teal / navy) */}
          <View style={styles.statsCard}>
            <View style={styles.statItem}>
              <View style={[styles.statIconWrap, { backgroundColor: "#E6F7FA" }]}>
                <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
                  <Path d="M7 8.5h10v2.6a2.2 2.2 0 0 0 0 4.4v2.6H7v-2.6a2.2 2.2 0 0 0 0-4.4V8.5Z" stroke={gfColors.teal} strokeWidth={1.7} strokeLinejoin="round" />
                </Svg>
              </View>
              <Text style={styles.statValue}>{savedIds.size}</Text>
              <Text style={styles.statLabel}>{t("tabs.saved")}</Text>
            </View>
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
            <QuickAction icon={<HelpIcon />} label={t("profile.helpCenter")} onPress={() => Alert.alert(t("profile.helpCenter"), "Help Center")} />
            <QuickAction icon={<AboutIcon />} label={t("profile.about")} onPress={() => Alert.alert(t("profile.about"), "About LOKÉT")} />
            <QuickAction icon={<RatingIcon />} label={t("profile.giveRating")} onPress={() => Alert.alert(t("profile.giveRating"), "v1.13.7")} />
          </View>

          {/* GENERAL list seperti contoh */}
          <Text style={styles.generalTitle}>GENERAL</Text>
          <View style={styles.generalCard}>
            <AccountMenuItem icon={<LanguageIcon />} label={t("profile.language")} onPress={() => setLangOpen(true)} />
            <View style={styles.divider} />
            <AccountMenuItem icon={<HelpIcon />} label={t("profile.helpCenter")} onPress={() => Alert.alert(t("profile.helpCenter"), "Help Center")} />
            <View style={styles.divider} />
            <AccountMenuItem icon={<AboutIcon />} label={t("profile.about")} onPress={() => Alert.alert(t("profile.about"), "About LOKÉT")} />
            <View style={styles.divider} />
            <AccountMenuItem icon={<TermsIcon />} label={t("profile.terms")} onPress={() => Alert.alert(t("profile.terms"), "Terms and Conditions")} />
            <View style={styles.divider} />
            <AccountMenuItem icon={<PrivacyIcon />} label={t("profile.privacy")} onPress={() => Alert.alert(t("profile.privacy"), "Privacy Policy")} />
            <View style={styles.divider} />
            <AccountMenuItem icon={<RatingIcon />} label={t("profile.giveRating")} value="v1.13.7" onPress={() => Alert.alert(t("profile.giveRating"), "v1.13.7")} />
          </View>

          <View style={{ height: 24 }} />
        </View>
      </ScrollView>

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
  root: { flex: 1, backgroundColor: NAVY },
  headerBg: {
    height: 180,
    backgroundColor: NAVY,
    paddingHorizontal: 16,
    paddingTop: 8,
    overflow: "hidden",
  },
  headerSafe: { zIndex: 2 },
  headerTitle: { fontSize: 18, fontWeight: "800", color: "#FFFFFF", marginTop: 6 },
  headerDeco1: {
    position: "absolute",
    top: -40,
    right: -40,
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "rgba(255,255,255,0.06)",
  },
  headerDeco2: {
    position: "absolute",
    top: 20,
    right: 60,
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "rgba(255,255,255,0.04)",
  },
  scroll: { flex: 1, marginTop: -42 },
  content: { paddingBottom: 120 },
  sheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 0,
    paddingHorizontal: 16,
    paddingBottom: 16,
    minHeight: 600,
  },
  avatarWrap: {
    alignSelf: "center",
    marginTop: -42,
    width: 92,
    height: 92,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarRing: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: "#FFFFFF",
    padding: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
  },
  verifiedBadge: {
    position: "absolute",
    bottom: 2,
    right: 6,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  name: { marginTop: 10, fontSize: 17, fontWeight: "800", color: gfColors.text, textAlign: "center" },
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
});
