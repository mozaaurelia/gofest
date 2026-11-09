import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CheckIcon, ChevronRightIcon } from "./detail-payment-icons";

const BLUE = "#0B5CFF";

type Props = {
  steps: readonly string[];
  activeIndex: number;
};

export default function DetailPaymentSteps({ steps, activeIndex }: Props) {
  return (
    <View style={styles.wrap}>
      {steps.map((step, index) => {
        const completed = index < activeIndex;
        const active = index === activeIndex;

        return (
          <React.Fragment key={step}>
            {index > 0 ? (
              <View style={styles.chevron}>
                <ChevronRightIcon size={17} />
              </View>
            ) : null}

            <View style={styles.step}>
              <View
                style={[
                  styles.circle,
                  completed && styles.circleCompleted,
                  active && styles.circleActive,
                  !completed && !active && styles.circleUpcoming,
                ]}
              >
                {completed ? (
                  <CheckIcon size={18} color="#FFFFFF" />
                ) : (
                  <Text style={[styles.number, active ? styles.numberActive : styles.numberUpcoming]}>
                    {index + 1}
                  </Text>
                )}
              </View>

              {active ? <Text style={styles.label}>{step}</Text> : null}
            </View>
          </React.Fragment>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
  },
  step: {
    flexDirection: "row",
    alignItems: "center",
  },
  chevron: {
    flex: 1,
    alignItems: "center",
  },
  circle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },
  circleCompleted: {
    backgroundColor: BLUE,
  },
  circleActive: {
    borderWidth: 1.5,
    borderColor: BLUE,
    backgroundColor: "#FFFFFF",
  },
  circleUpcoming: {
    borderWidth: 1.5,
    borderColor: "#C4CAD3",
    backgroundColor: "#FFFFFF",
  },
  number: {
    fontSize: 15.5,
    fontWeight: "700",
  },
  numberActive: {
    color: BLUE,
  },
  numberUpcoming: {
    color: "#9AA3B2",
  },
  label: {
    marginLeft: 9,
    fontSize: 16,
    fontWeight: "800",
    color: "#111827",
  },
});
