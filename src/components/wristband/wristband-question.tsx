import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WristbandBullet from "./wristband-bullet";

type Props = {
  question: string;
  answer?: string;
  bullets?: string[];
  intro?: string;
};

export default function WristbandQuestion({ question, answer, bullets, intro }: Props) {
  return (
    <View style={styles.block}>
      <Text style={styles.question}>{question}</Text>
      {answer ? <Text style={styles.answer}>{answer}</Text> : null}
      {intro ? <Text style={styles.intro}>{intro}</Text> : null}
      {bullets ? (
        <View style={styles.bulletWrap}>
          {bullets.map((b, idx) => (
            <WristbandBullet key={idx} text={b} />
          ))}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    marginTop: 18,
  },
  question: {
    fontSize: 14,
    fontWeight: "800",
    color: "#374151",
    lineHeight: 20,
  },
  answer: {
    fontSize: 13.5,
    color: "#6B7280",
    lineHeight: 20,
    marginTop: 6,
  },
  intro: {
    fontSize: 13.5,
    color: "#6B7280",
    lineHeight: 20,
    marginTop: 6,
  },
  bulletWrap: {
    marginTop: 8,
  },
});
