import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CheckIcon, ChevronRightIcon } from "./payment-icons";

const BLUE = "#0B5CFF";
const NAVY = "#0F2540";

function StepCircle({ number, state }: { number: number; state: "done" | "active" | "upcoming" }) {
  if (state === "done") {
    return (
      <View style={[styles.circle, styles.circleDone]}>
        <CheckIcon size={18} />
      </View>
    );
  }

  return (
    <View style={[styles.circle, state === "active" ? styles.circleActive : styles.circleUpcoming]}>
      <Text style={[styles.circleText, state === "active" ? styles.circleTextActive : styles.circleTextUpcoming]}>
        {number}
      </Text>
    </View>
  );
}

export default function PaymentStepper() {
  return (
    <View style={styles.wrap}>
      <StepCircle number={1} state="done" />
      <ChevronRightIcon size={18} color="#C4CAD3" />
      <StepCircle number={2} state="done" />
      <ChevronRightIcon size={18} color="#C4CAD3" />
      <View style={styles.activeGroup}>
        <StepCircle number={3} state="active" />
        <Text style={styles.activeLabel}>Konfirmasi</Text>
      </View>
      <ChevronRightIcon size={18} color="#C4CAD3" />
      <StepCircle number={4} state="upcoming" />
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
  circleActive: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: BLUE,
  },
  circleUpcoming: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#C4CAD3",
  },
  circleText: {
    fontSize: 15,
    fontWeight: "800",
  },
  circleTextActive: {
    color: BLUE,
  },
  circleTextUpcoming: {
    color: "#9AA3B2",
  },
  activeGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  activeLabel: {
    fontSize: 17,
    fontWeight: "800",
    color: NAVY,
  },
});
