import React from "react";
import { StyleSheet, View } from "react-native";
import { useTranslation } from "@/context/language-context";
import WristbandQuestion from "./wristband-question";

export default function WristbandContent() {
  const { t } = useTranslation();
  const items = [
    { question: t("wristband.q1.title"), answer: t("wristband.q1.answer") },
    { question: t("wristband.q2.title"), answer: t("wristband.q2.answer") },
    {
      question: t("wristband.q3.title"),
      bullets: [t("wristband.q3.b1"), t("wristband.q3.b2")],
    },
    { question: t("wristband.q4.title"), answer: t("wristband.q4.answer") },
    {
      question: t("wristband.q5.title"),
      intro: t("wristband.q5.intro"),
      bullets: [t("wristband.q5.b1"), t("wristband.q5.b2"), t("wristband.q5.b3")],
    },
  ];
  return (
    <View style={styles.wrap}>
      {items.map((qa, idx) => (
        <WristbandQuestion key={idx} question={qa.question} answer={qa.answer} bullets={qa.bullets} intro={qa.intro} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 20,
    paddingTop: 6,
    paddingBottom: 32,
    backgroundColor: "#FFFFFF",
  },
});
