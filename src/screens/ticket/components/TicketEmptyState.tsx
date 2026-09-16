import React from "react";
import { Alert, Linking, ScrollView, StyleSheet, View } from "react-native";
import type { TicketTabKey } from "./TicketTabs";
import TicketEmptyBackground from "./empty/TicketEmptyBackground";
import TicketEmptyIllustration from "./empty/TicketEmptyIllustration";
import TicketEmptyContent from "./empty/TicketEmptyContent";
import TicketEmptyActions from "./empty/TicketEmptyActions";

type Props = {
  activeTab: TicketTabKey;
};

function getCopy(activeTab: TicketTabKey) {
  if (activeTab === "saved") {
    return {
      title: "Oops, no saved tickets yet",
      subtitle: "Tickets you bookmark will appear here. Tap the bookmark icon on any event to save it.",
    };
  }
  return {
    title: "Oops, no active tickets yet",
    subtitle: "All your event tickets from LOKÉT are right here. Need any help with your tickets?",
  };
}

export default function TicketEmptyState({ activeTab }: Props) {
  const { title, subtitle } = getCopy(activeTab);

  const handleHelp = () => {
    const url = "https://help.loket.com";
    Linking.canOpenURL(url)
      .then((ok) => (ok ? Linking.openURL(url) : Alert.alert("Help Center", "Hubungi bantuan di help.loket.com")))
      .catch(() => Alert.alert("Help Center", "Hubungi bantuan di help.loket.com"));
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
          <TicketEmptyActions label="Help Center" onPress={handleHelp} />
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
