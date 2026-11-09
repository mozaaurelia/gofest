import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { PAYMENT_METHODS, PaymentMethod } from "@/constants/payment-data";
import { ChevronDownIcon, MethodIcon } from "./payment-icons";

const BLUE = "#0B5CFF";

type AccordionProps = {
  method: PaymentMethod;
  expanded: boolean;
  selectedOption: string;
  onToggle: () => void;
  onSelect: (optionId: string) => void;
};

function PaymentAccordion({ method, expanded, selectedOption, onToggle, onSelect }: AccordionProps) {
  return (
    <View style={styles.card}>
      <Pressable
        onPress={onToggle}
        accessibilityRole="button"
        accessibilityLabel={method.label}
        style={({ pressed }) => [styles.header, pressed && styles.headerPressed]}
      >
        <MethodIcon name={method.key} />
        <Text style={styles.headerLabel}>{method.label}</Text>
        {method.badge ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{method.badge}</Text>
          </View>
        ) : null}
        <View style={[styles.chevron, expanded && styles.chevronOpen]}>
          <ChevronDownIcon color="#111827" size={20} />
        </View>
      </Pressable>

      {expanded ? (
        <View style={styles.options}>
          {method.options.map((option) => {
            const active = selectedOption === option.id;
            return (
              <Pressable
                key={option.id}
                onPress={() => onSelect(option.id)}
                style={({ pressed }) => [styles.optionRow, pressed && styles.optionPressed]}
              >
                <MethodIcon name={method.key} size={22} />
                <Text style={styles.optionLabel}>{option.label}</Text>
                <View style={[styles.radio, active && styles.radioActive]}>
                  {active ? <View style={styles.radioDot} /> : null}
                </View>
              </Pressable>
            );
          })}
        </View>
      ) : null}
    </View>
  );
}

export default function PaymentMethodSection() {
  const [expandedKey, setExpandedKey] = useState<string | null>("creditCard");
  const [selectedOption, setSelectedOption] = useState("credit-debit");

  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Metode Pembayaran</Text>

      {PAYMENT_METHODS.map((method) => (
        <PaymentAccordion
          key={method.key}
          method={method}
          expanded={expandedKey === method.key}
          selectedOption={selectedOption}
          onToggle={() => setExpandedKey((prev) => (prev === method.key ? null : method.key))}
          onSelect={(optionId) => {
            setSelectedOption(optionId);
            setExpandedKey(method.key);
          }}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginHorizontal: 20,
    marginTop: 26,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    color: "#0F2540",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#DDE3EA",
    marginBottom: 12,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 16,
    paddingVertical: 18,
    backgroundColor: "#F7F9FB",
  },
  headerPressed: {
    opacity: 0.8,
  },
  headerLabel: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },
  badge: {
    backgroundColor: "#2ECC71",
    borderRadius: 6,
    paddingHorizontal: 9,
    paddingVertical: 3,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  chevron: {
    marginLeft: "auto",
  },
  chevronOpen: {
    transform: [{ rotate: "180deg" }],
  },
  options: {
    backgroundColor: "#FFFFFF",
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#EEF0F3",
  },
  optionPressed: {
    backgroundColor: "#F7F9FB",
  },
  optionLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#C4CAD3",
    alignItems: "center",
    justifyContent: "center",
  },
  radioActive: {
    borderColor: BLUE,
  },
  radioDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: BLUE,
  },
});
