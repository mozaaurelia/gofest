import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useTranslation } from "@/context/language-context";
import { gfColors } from "@/constants/gf-theme";
import { CameraIcon, GalleryIcon, TrashIcon } from "./avatar-icons";

type Props = {
  visible: boolean;
  canRemove: boolean;
  onClose: () => void;
  onCamera: () => void;
  onGallery: () => void;
  onRemove: () => void;
};

export function AvatarSourceModal({ visible, canRemove, onClose, onCamera, onGallery, onRemove }: Props) {
  const { t } = useTranslation();

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.card} onPress={(event) => event.stopPropagation()}>
          <View style={styles.handle} />
          <Text style={styles.title}>{t("profile.changePhoto")}</Text>
          <Text style={styles.subtitle}>{t("profile.photoSubtitle")}</Text>

          <View style={styles.options}>
            <Option
              icon={<CameraIcon />}
              label={t("profile.photoFromCamera")}
              onPress={() => {
                onClose();
                onCamera();
              }}
            />
            <View style={styles.divider} />
            <Option
              icon={<GalleryIcon />}
              label={t("profile.photoFromGallery")}
              onPress={() => {
                onClose();
                onGallery();
              }}
            />
            {canRemove ? (
              <>
                <View style={styles.divider} />
                <Option
                  icon={<TrashIcon />}
                  label={t("profile.photoRemove")}
                  destructive
                  onPress={() => {
                    onClose();
                    onRemove();
                  }}
                />
              </>
            ) : null}
          </View>

          <Pressable onPress={onClose} style={styles.cancelBtn}>
            <Text style={styles.cancelText}>{t("common.close")}</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

function Option({
  icon,
  label,
  destructive,
  onPress,
}: {
  icon: React.ReactNode;
  label: string;
  destructive?: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.option, pressed && styles.optionPressed]}>
      <View style={[styles.optionIcon, destructive && styles.optionIconDestructive]}>{icon}</View>
      <Text style={[styles.optionLabel, destructive && styles.optionLabelDestructive]}>{label}</Text>
      <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
        <Path d="M9 6l6 6-6 6" stroke={destructive ? "#EF4444" : "#1E3A8A"} strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: "rgba(15,42,77,0.32)", justifyContent: "flex-end", padding: 16 },
  card: { backgroundColor: "#FFFFFF", borderRadius: 16, padding: 16, paddingTop: 12 },
  handle: { alignSelf: "center", width: 36, height: 4, borderRadius: 2, backgroundColor: "#E5E7EB", marginBottom: 12 },
  title: { fontSize: 16, fontWeight: "800", color: gfColors.text, textAlign: "center" },
  subtitle: { fontSize: 12, color: gfColors.textMuted, textAlign: "center", marginTop: 4 },
  options: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: gfColors.border,
    borderRadius: 12,
    overflow: "hidden",
  },
  option: { flexDirection: "row", alignItems: "center", gap: 12, paddingHorizontal: 14, paddingVertical: 14, backgroundColor: "#FFFFFF" },
  optionPressed: { backgroundColor: "#F9FAFB" },
  optionIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#EFF6FF",
    borderWidth: 1,
    borderColor: "#DBEAFE",
    alignItems: "center",
    justifyContent: "center",
  },
  optionIconDestructive: { backgroundColor: "#FEF2F2", borderColor: "#FEE2E2" },
  optionLabel: { flex: 1, fontSize: 14, fontWeight: "600", color: gfColors.text },
  optionLabelDestructive: { color: "#EF4444" },
  divider: { height: 1, backgroundColor: gfColors.border, marginLeft: 58 },
  cancelBtn: { marginTop: 16, backgroundColor: gfColors.surface, borderRadius: 10, paddingVertical: 12, alignItems: "center" },
  cancelText: { fontSize: 14, fontWeight: "700", color: gfColors.text },
});
