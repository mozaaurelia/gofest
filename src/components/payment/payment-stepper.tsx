import React from "react";
import { StyleSheet, View } from "react-native";
import { CheckIcon, ChevronRightIcon } from "./payment-icons";

const BLUE = "#0B5CFF";

function StepCircle() {
  return (
    <View style={[styles.circle, styles.circleDone]}>
      <CheckIcon size={18} />
    </View>
  );
}

export default function PaymentStepper() {
  return (
    <View style={styles.wrap}>
      <StepCircle />
      <ChevronRightIcon size={18} color="#C4CAD3" />
      <StepCircle />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 16,
    backgroundColor: "#FFFFFF",
  },
  circle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },
  circleDone: {
    backgroundColor: BLUE,
  },
});
