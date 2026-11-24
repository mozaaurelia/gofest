import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import Svg, { Path, Circle, Rect } from "react-native-svg";
import { gfColors } from "@/constants/gf-theme";
import { useTranslation } from "@/context/language-context";

type Props = {
  visible: boolean;
  onClose: () => void;
};

type DrawerItem = {
  key: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  route: string;
};

export default function SectionDrawer({ visible, onClose }: Props) {
  const { t } = useTranslation();
  const { id } = useLocalSearchParams<{ id: string }>();
  const targetId = Array.isArray(id) ? id[0] : (id as string | undefined) ?? "h1";

  const items: DrawerItem[] = [
    {
      key: "ticketInfo",
      title: t("detail.ticketInfo.title"),
      subtitle: t("detail.ticketInfo.subtitle"),
      icon: <TicketSalesIcon />,
      route: `/concert/${targetId}`,
    },
    {
      key: "seatMap",
      title: t("detail.seatMap.title"),
      subtitle: t("detail.seatMap.subtitle"),
      icon: <SeatMapIcon />,
      route: `/seat-map/${targetId}`,
    },
    {
      key: "wristband",
      title: t("detail.wristband.title"),
      subtitle: t("detail.wristband.subtitle"),
      icon: <WristbandIcon />,
      route: `/wristband/${targetId}`,
    },
    {
      key: "eventGuide",
      title: t("wristband.menu.eventGuide"),
      subtitle: t("wristband.menu.eventGuideSub"),
      icon: <EventGuideIcon />,
      route: `/event-guide/${targetId}`,
    },
  ];

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        <View style={styles.drawer}>
          <View style={styles.handleBar} />
          {items.map((item) => (
            <Pressable
              key={item.key}
              onPress={() => {
                onClose();
                // @ts-ignore
                router.push(item.route);
              }}
              style={({ pressed }) => [styles.drawerRow, pressed && { backgroundColor: "#F9FAFB" }]}
            >
              <View style={styles.drawerIconWrap}>{item.icon}</View>
              <View style={styles.drawerTextWrap}>
                <Text style={styles.drawerTitle}>{item.title}</Text>
                <Text style={styles.drawerSubtitle}>{item.subtitle}</Text>
              </View>
              <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
                <Path d="M9 6l6 6-6 6" stroke="#1B222D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </Svg>
            </Pressable>
          ))}
        </View>
      </View>
    </Modal>
  );
}

function TicketSalesIcon() {
  return (
    <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
      <Path d="M4 8.5h16V10a2 2 0 0 0 0 4v2.5H4V14a2 2 0 0 0 0-4V8.5Z" stroke="#2FA8C0" strokeWidth={1.7} strokeLinejoin="round" />
      <Path d="M8.5 12h8" stroke="#2FA8C0" strokeWidth={1.4} strokeLinecap="round" strokeDasharray="2 2.2" />
    </Svg>
  );
}

function SeatMapIcon() {
  return (
    <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
      <Path d="M12 21s-6-4.5-6-9.5A6 6 0 0 1 18 11.5C18 16.5 12 21 12 21Z" stroke="#2FA8C0" strokeWidth={1.7} strokeLinejoin="round" />
      <Circle cx="12" cy="11.2" r="2.3" stroke="#2FA8C0" strokeWidth={1.7} />
    </Svg>
  );
}

function WristbandIcon() {
  return (
    <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
      <Rect x="5" y="9.5" width="14" height="5" rx="2.5" stroke="#2FA8C0" strokeWidth={1.7} />
      <Path d="M8 9.5V7.5A4 4 0 0 1 16 7.5v2" stroke="#2FA8C0" strokeWidth={1.7} strokeLinecap="round" />
      <Path d="M8 14.5V16.5A4 4 0 0 0 16 16.5v-2" stroke="#2FA8C0" strokeWidth={1.7} strokeLinecap="round" />
    </Svg>
  );
}

function EventGuideIcon() {
  return (
    <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
      <Path d="M4 10l10-3v8L4 12v-2Z" stroke="#2FA8C0" strokeWidth={1.7} strokeLinejoin="round" />
      <Path d="M14 9l3-1v6l-3-1" stroke="#2FA8C0" strokeWidth={1.7} strokeLinejoin="round" />
      <Path d="M6 12A4 4 0 0 0 8.5 16" stroke="#2FA8C0" strokeWidth={1.4} strokeLinecap="round" />
    </Svg>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(15,42,77,0.32)",
    justifyContent: "flex-end",
  },
  drawer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 8,
    paddingHorizontal: 6,
    paddingBottom: 24,
  },
  handleBar: {
    alignSelf: "center",
    width: 36,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#E2E5EA",
    marginBottom: 10,
  },
  drawerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EEF0F3",
  },
  drawerIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#F0F2F4",
    alignItems: "center",
    justifyContent: "center",
  },
  drawerTextWrap: {
    flex: 1,
  },
  drawerTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: gfColors.text,
  },
  drawerSubtitle: {
    fontSize: 12,
    color: "#9AA3B2",
    marginTop: 2,
  },
});
