import React from "react";
import { StyleSheet, View } from "react-native";
import { WRISTBAND_QA } from "@/constants/wristband-data";
import WristbandQuestion from "./wristband-question";

export default function WristbandContent() {
  return (
    <View style={styles.wrap}>
      {WRISTBAND_QA.map((qa, idx) => (
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
