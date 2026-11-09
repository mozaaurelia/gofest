import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { getConcertDetailById } from "@/constants/concert-detail-data";
import { useTranslation } from "@/context/language-context";
import { eventAddress, eventDate, eventSubtitle } from "@/utils/event-i18n";
import {
  BringGuideIcon,
  EventGuideHeader,
  EventGuideHelpCard,
  EventGuideHero,
  EventGuideSection,
  LocationGuideIcon,
  RulesGuideIcon,
  ScheduleGuideIcon,
} from "@/components/event-guide";

export default function EventGuideScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useTranslation();
  const concert = getConcertDetailById(id);

  if (!concert) return null;

  const subtitle = eventSubtitle(t, concert);

  const sections = [
    {
      key: "schedule",
      icon: <ScheduleGuideIcon />,
      title: t("eventGuide.schedule.title"),
      items: [
        t("eventGuide.schedule.gate"),
        t("eventGuide.schedule.show", { time: concert.timeRange }),
        t("eventGuide.schedule.arrive"),
      ],
    },
    {
      key: "bring",
      icon: <BringGuideIcon />,
      title: t("eventGuide.bring.title"),
      items: [t("eventGuide.bring.evoucher"), t("eventGuide.bring.id"), t("eventGuide.bring.wristband")],
    },
    {
      key: "rules",
      icon: <RulesGuideIcon />,
      title: t("eventGuide.rules.title"),
      items: [t("eventGuide.rules.prohibited"), t("eventGuide.rules.reentry"), t("eventGuide.rules.smoking")],
    },
    {
      key: "location",
      icon: <LocationGuideIcon />,
      title: t("eventGuide.location.title"),
      items: [eventAddress(t, concert), t("eventGuide.location.transport")],
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <EventGuideHeader title={t("eventGuide.header")} subtitle={concert.title} />

      <ScrollView bounces contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <EventGuideHero
          label={t("eventGuide.heroLabel")}
          title={concert.title}
          subtitle={subtitle ?? ""}
          date={`${eventDate(t, concert)} • ${concert.timeRange}`}
          address={eventAddress(t, concert)}
        />

        {sections.map((section) => (
          <EventGuideSection key={section.key} icon={section.icon} title={section.title} items={section.items} />
        ))}

        <EventGuideHelpCard title={t("eventGuide.help.title")} body={t("eventGuide.help.body")} />

        <View style={styles.bottomSpace} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FB",
  },
  content: {
    flexGrow: 1,
  },
  bottomSpace: {
    height: 28,
  },
});
