import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { getEventDatesInMonth } from "../../constants/calendar-data";
import { gfColors } from "../../constants/gf-theme";

const WEEKDAYS = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
const MONTH_NAMES = ["JANUARI", "FEBRUARI", "MARET", "APRIL", "MEI", "JUNI", "JULI", "AGUSTUS", "SEPTEMBER", "OKTOBER", "NOVEMBER", "DESEMBER"];

type MonthGridProps = {
  selectedDateISO: string;
  onSelectDate: (dateISO: string) => void;
};

export default function MonthGrid({ selectedDateISO, onSelectDate }: MonthGridProps) {
  const [cursor, setCursor] = useState(new Date(2026, 8, 1)); // September 2026

  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const eventsThisMonth = getEventDatesInMonth(year, month);

  const firstDay = new Date(year, month, 1);
  const startOffset = (firstDay.getDay() + 6) % 7; // Senin = 0
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [
    ...Array(startOffset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  function goToMonth(offset: number) {
    setCursor(new Date(year, month + offset, 1));
  }

  function toISO(day: number) {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }

  return (
    <View>
      <View style={styles.monthNav}>
        <Pressable onPress={() => goToMonth(-1)} style={styles.navButton}>
          <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
            <Path d="M15 6l-6 6 6 6" stroke={gfColors.text} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        </Pressable>
        <Text style={styles.monthLabel}>{MONTH_NAMES[month]} {year}</Text>
        <Pressable onPress={() => goToMonth(1)} style={styles.navButton}>
          <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
            <Path d="M9 6l6 6-6 6" stroke={gfColors.text} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        </Pressable>
      </View>

      <View style={styles.weekdayRow}>
        {WEEKDAYS.map((w) => (
          <Text key={w} style={styles.weekdayText}>{w}</Text>
        ))}
      </View>

      <View style={styles.grid}>
        {cells.map((day, i) => {
          if (day === null) return <View key={i} style={styles.cell} />;
          const dateISO = toISO(day);
          const isSelected = dateISO === selectedDateISO;
          const dayEvents = eventsThisMonth.filter((e) => e.dateISO === dateISO);

          return (
            <Pressable key={i} onPress={() => onSelectDate(dateISO)} style={styles.cell}>
              <View style={[styles.dayCircle, isSelected && styles.dayCircleActive]}>
                <Text style={[styles.dayText, isSelected && styles.dayTextActive]}>{day}</Text>
              </View>
              <View style={styles.markerRow}>
                {dayEvents.slice(0, 2).map((e) => (
                  <View key={e.id} style={[styles.marker, { backgroundColor: e.markerColor }]} />
                ))}
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const CELL_SIZE = "14.28%";

const styles = StyleSheet.create({
  monthNav: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 20, marginTop: 16, marginBottom: 16 },
  navButton: { width: 30, height: 30, alignItems: "center", justifyContent: "center" },
  monthLabel: { fontSize: 15, fontWeight: "800", color: gfColors.text, letterSpacing: 0.5 },
  weekdayRow: { flexDirection: "row", paddingHorizontal: 8 },
  weekdayText: { width: CELL_SIZE, textAlign: "center", fontSize: 11, color: gfColors.textMuted },
  grid: { flexDirection: "row", flexWrap: "wrap", paddingHorizontal: 8, marginTop: 8 },
  cell: { width: CELL_SIZE, alignItems: "center", paddingVertical: 6, gap: 4 },
  dayCircle: { width: 30, height: 30, borderRadius: 15, alignItems: "center", justifyContent: "center" },
  dayCircleActive: { backgroundColor: gfColors.text },
  dayText: { fontSize: 13, color: gfColors.text },
  dayTextActive: { color: "#FFFFFF", fontWeight: "800" },
  markerRow: { flexDirection: "row", gap: 3, height: 4 },
  marker: { width: 4, height: 4, borderRadius: 2 },
});