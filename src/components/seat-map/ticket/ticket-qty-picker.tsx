import React, { useState } from "react";
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

type Props = {
  value: number;
  onChange: (v: number) => void;
  max?: number;
};

export default function TicketQtyPicker({ value, onChange, max = 6 }: Props) {
  const [open, setOpen] = useState(false);
  const options = Array.from({ length: max + 1 }, (_, i) => i);

  return (
    <>
      <Pressable onPress={() => setOpen(true)} style={styles.trigger}>
        <Text style={styles.value}>{value}</Text>
        <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
          <Path d="M6 9l6 6 6-6" stroke="#374151" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </Pressable>

      <Modal visible={open} transparent animationType="fade" onRequestClose={() => setOpen(false)}>
        <Pressable style={styles.overlay} onPress={() => setOpen(false)}>
          <View style={styles.sheet}>
            <View style={styles.handle} />
            <Text style={styles.sheetTitle}>Pilih jumlah tiket</Text>
            <ScrollView style={{ maxHeight: 280 }}>
              {options.map((opt) => (
                <Pressable
                  key={opt}
                  onPress={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                  style={[styles.optionRow, value === opt && styles.optionActive]}
                >
                  <Text style={[styles.optionText, value === opt && styles.optionTextActive]}>{opt} tiket</Text>
                  {value === opt ? (
                    <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
                      <Path d="M5 13l4 4L19 7" stroke="#2FA8C0" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </Svg>
                  ) : null}
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  trigger: {
    minWidth: 86,
    height: 38,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "#E2E5EA",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    gap: 12,
  },
  value: { fontSize: 14, fontWeight: "600", color: "#111827" },
  overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.32)", justifyContent: "flex-end" },
  sheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 8,
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
  handle: { alignSelf: "center", width: 36, height: 4, borderRadius: 2, backgroundColor: "#E2E5EA", marginBottom: 12 },
  sheetTitle: { fontSize: 14, fontWeight: "800", color: "#111827", marginBottom: 8, textAlign: "center" },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  optionActive: { backgroundColor: "#F0F2F4" },
  optionText: { fontSize: 14, color: "#374151" },
  optionTextActive: { fontWeight: "700", color: "#2FA8C0" },
});
