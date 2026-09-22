import React from "react";
import { Alert, Linking, ScrollView, StyleSheet, View } from "react-native";
import type { TicketTabKey } from "./TicketTabs";
import TicketEmptyBackground from "./empty/TicketEmptyBackground";
import TicketEmptyIllustration from "./empty/TicketEmptyIllustration";
import TicketEmptyContent from "./empty/TicketEmptyContent";
import TicketEmptyActions from "./empty/TicketEmptyActions";
import { useTranslation } from "@/context/language-context";

type Props = {
  activeTab: TicketTabKey;
};

export default function TicketEmptyState({ activeTab }: Props) {
  const { t } = useTranslation();
  const title = activeTab === "saved" ? t("ticket.empty.saved.title") : t("ticket.empty.purchased.title");
  const subtitle = activeTab === "saved" ? t("ticket.empty.saved.subtitle") : t("ticket.empty.purchased.subtitle");

  const handleHelp = () => {
    const url = "https://help.loket.com";
    Linking.canOpenURL(url)
      .then((ok) => (ok ? Linking.openURL(url) : Alert.alert(t("ticket.helpCenter"), t("ticket.empty.purchased.subtitle"))))
      .catch(() => Alert.alert(t("ticket.helpCenter"), t("ticket.empty.purchased.subtitle")));
  };

  return (
    <TicketEmptyBackground>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View style={styles.illustrationWrap}>
          <TicketEmptyIllustration width={340} height={250} />
        </View>
        <TicketEmptyContent title={title} subtitle={subtitle} />
        <View style={styles.actionWrap}>
          <TicketEmptyActions label={t("ticket.helpCenter")} onPress={handleHelp} />
        </View>
      </ScrollView>
    </TicketEmptyBackground>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 18,
    paddingBottom: 32,
  },
  illustrationWrap: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  actionWrap: {
    paddingTop: 18,
    paddingBottom: 8,
  },
});
