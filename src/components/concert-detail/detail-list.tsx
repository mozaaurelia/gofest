import React from "react";
import { StyleSheet, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import Svg, { Path, Rect, Circle } from "react-native-svg";
import DetailListItem from "./detail-list-item";
import { gfColors } from "../../constants/gf-theme";
import { useTranslation } from "@/context/language-context";

const ICON_SIZE = 20;
const ICON_COLOR = gfColors.textMuted;

export default function DetailList() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useTranslation();
  return (
    <View style={styles.wrap}>
      <DetailListItem
        icon={<Svg viewBox="0 0 24 24" width={ICON_SIZE} height={ICON_SIZE} fill="none"><Path d="M4 8.5 8 4.5a2 2 0 0 1 2.8 0l8.7 8.7a2 2 0 0 1 0 2.8L15.5 20a2 2 0 0 1-2.8 0L4 11.3a2 2 0 0 1 0-2.8Z" stroke={ICON_COLOR} strokeWidth={1.8} strokeLinejoin="round" /></Svg>}
        title={t("detail.ticketInfo.title")}
        subtitle={t("detail.ticketInfo.subtitle")}
      />
      <DetailListItem
        icon={<Svg viewBox="0 0 24 24" width={ICON_SIZE} height={ICON_SIZE} fill="none"><Path d="M12 21s-6.5-5.9-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.1-6.5 11-6.5 11Z" stroke={ICON_COLOR} strokeWidth={1.8} /><Circle cx="12" cy="10" r="2.2" stroke={ICON_COLOR} strokeWidth={1.8} /></Svg>}
        title={t("detail.seatMap.title")}
        subtitle={t("detail.seatMap.subtitle")}
        onPress={() => {
          const targetId = Array.isArray(id) ? id[0] : (id as string | undefined);
          if (targetId) router.push({ pathname: "/seat-map/[id]", params: { id: targetId } } as any);
          else router.push({ pathname: "/seat-map/[id]", params: { id: "h1" } } as any);
        }}
      />
      <DetailListItem
        icon={<Svg viewBox="0 0 24 24" width={ICON_SIZE} height={ICON_SIZE} fill="none"><Rect x="3" y="9" width="18" height="6" rx="2" stroke={ICON_COLOR} strokeWidth={1.8} /><Path d="M8 9v6M16 9v6" stroke={ICON_COLOR} strokeWidth={1.8} strokeLinecap="round" /></Svg>}
        title={t("detail.wristband.title")}
        subtitle={t("detail.wristband.subtitle")}
        onPress={() => {
          const targetId = Array.isArray(id) ? id[0] : (id as string | undefined);
          if (targetId) router.push({ pathname: "/wristband/[id]", params: { id: targetId } } as any);
          else router.push({ pathname: "/wristband/[id]", params: { id: "h1" } } as any);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingHorizontal: 20, marginTop: 4 },
});