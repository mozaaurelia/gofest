import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import Svg, { Path, Circle, Rect } from "react-native-svg";
import { gfColors } from "../../constants/gf-theme";
import { useTranslation } from "@/context/language-context";

type SeatMapHeaderProps = {
  title: string;
  subtitle: string;
};

export default function SeatMapHeader({ title, subtitle }: SeatMapHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { id } = useLocalSearchParams<{ id: string }>();
  const targetId = Array.isArray(id) ? id[0] : (id as string | undefined) ?? "h1";
  const { t } = useTranslation();
  const drawerItems: { title: string; icon: React.ReactNode }[] = [
    { title: t("detail.ticketInfo.title"), icon: <TicketSalesIcon /> },
    { title: t("detail.seatMap.title"), icon: <SeatMapIcon /> },
    { title: t("detail.wristband.title"), icon: <WristbandIcon /> },
    { title: "Got Questions?", icon: <QuestionIcon /> },
    { title: "Event Guide", icon: <EventGuideIcon /> },
  ];

  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={() => router.back()} hitSlop={8} style={styles.iconButton}>
          <Svg viewBox="0 0 24 24" width={22} height={22} fill="none">
            <Path
              d="M15 18l-6-6 6-6"
              stroke={gfColors.text}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </Pressable>

        <View style={styles.titleWrap}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.subtitle} numberOfLines={1}>
            {subtitle}
          </Text>
        </View>

        <Pressable onPress={() => setMenuOpen(true)} hitSlop={8} style={styles.iconButton}>
          <Svg viewBox="0 0 24 24" width={22} height={22} fill="none">
            <Path d="M4 6h16M4 12h16M4 18h16" stroke={gfColors.text} strokeWidth={2} strokeLinecap="round" />
          </Svg>
        </Pressable>
      </View>

      <Modal visible={menuOpen} transparent animationType="slide" onRequestClose={() => setMenuOpen(false)}>
        <View style={styles.modalOverlay}>
          <Pressable style={StyleSheet.absoluteFill} onPress={() => setMenuOpen(false)} />
          <View style={styles.drawer}>
            <View style={styles.handleBar} />
            {drawerItems.map((item) => (
              <Pressable
                key={item.title}
                onPress={() => {
                  setMenuOpen(false);
                  if (item.title === t("detail.wristband.title")) {
                    // @ts-ignore
                    router.push({ pathname: "/wristband/[id]", params: { id: targetId } });
                  } else if (item.title === t("detail.seatMap.title")) {
                    // @ts-ignore
                    router.push({ pathname: "/seat-map/[id]", params: { id: targetId } });
                  } else {
                    // default to concert detail
                    // @ts-ignore
                    router.push({ pathname: "/concert/[id]", params: { id: targetId } });
                  }
                }}
                style={styles.drawerRow}
              >
                <View style={styles.drawerIconWrap}>{item.icon}</View>
                <Text style={styles.drawerTitle}>{item.title}</Text>
                <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
                  <Path d="M9 6l6 6-6 6" stroke="#1B222D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </Svg>
              </Pressable>
            ))}
          </View>
        </View>
      </Modal>
    </>
  );
}

// ---- Icon Svg pakai pola yang biasa dipakai (react-native-svg, bukan stiker) ----
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
function QuestionIcon() {
  return (
    <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
      <Circle cx="12" cy="12" r="8.5" stroke="#2FA8C0" strokeWidth={1.7} />
      <Path d="M9.5 9.5A2.5 2.5 0 0 1 12 7a2.5 2.5 0 0 1 2.5 2.5c0 1.6-1.8 2.3-2.5 3.5" stroke="#2FA8C0" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
      <Circle cx="12" cy="17" r="1" fill="#2FA8C0" />
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
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    backgroundColor: gfColors.bg,
    borderBottomWidth: 1,
    borderBottomColor: "#EEF0F3",
  },
  iconButton: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  titleWrap: {
    flex: 1,
    marginHorizontal: 8,
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "800",
    color: gfColors.text,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 11.5,
    color: "#9AA3B2",
    marginTop: 2,
    textAlign: "center",
  },
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
    paddingVertical: 16,
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
  drawerTitle: {
    flex: 1,
    fontSize: 15,
    fontWeight: "700",
    color: gfColors.text,
  },
});
