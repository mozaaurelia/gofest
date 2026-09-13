import React, { useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { CALENDAR_EVENTS } from "../../constants/calendar-data";
import { gfColors } from "../../constants/gf-theme";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTH_NAMES = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

type MonthGridProps = {
  selectedDateISO: string;
  onSelectDate: (dateISO: string) => void;
};

function getTodayISO(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

type Cell = { day: number; monthOffset: -1 | 0 | 1; dateISO: string };

export default function MonthGrid({ selectedDateISO, onSelectDate }: MonthGridProps) {
  const [cursor, setCursor] = useState(new Date(2026, 8, 1)); // September 2026 default biar mirip screenshot

  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const todayISO = useMemo(() => getTodayISO(), []);

  const eventSet = useMemo(() => new Set(CALENDAR_EVENTS.map((e) => e.dateISO)), []);

  const firstDay = new Date(year, month, 1);
  const startOffset = (firstDay.getDay() + 6) % 7; // Senin = 0 (Mon)
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const cells: Cell[] = useMemo(() => {
    const out: Cell[] = [];
    // prev month leading cells
    for (let i = 0; i < startOffset; i++) {
      const day = daysInPrevMonth - startOffset + 1 + i;
      const d = new Date(year, month - 1, day);
      const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      out.push({ day, monthOffset: -1, dateISO: iso });
    }
    // current month
    for (let d = 1; d <= daysInMonth; d++) {
      const iso = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      out.push({ day: d, monthOffset: 0, dateISO: iso });
    }
    // next month trailing untuk genap 6 baris (42 cells) biar mirip screenshot
    let nextDay = 1;
    while (out.length < 42) {
      const d = new Date(year, month + 1, nextDay);
      const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(nextDay).padStart(2, "0")}`;
      out.push({ day: nextDay, monthOffset: 1, dateISO: iso });
      nextDay++;
    }
    return out;
  }, [year, month, startOffset, daysInMonth, daysInPrevMonth]);

  function goToMonth(offset: number) {
    setCursor(new Date(year, month + offset, 1));
  }

  return (
    <View style={styles.wrap}>
      <View style={styles.monthNav}>
        <Pressable onPress={() => goToMonth(-1)} style={styles.navButton} hitSlop={8}>
          <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
            <Path d="M15 6l-6 6 6 6" stroke={gfColors.text} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        </Pressable>
        <Text style={styles.monthLabel}>
          {MONTH_NAMES[month]} {year}
        </Text>
        <Pressable onPress={() => goToMonth(1)} style={styles.navButton} hitSlop={8}>
          <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
            <Path d="M9 6l6 6-6 6" stroke={gfColors.text} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        </Pressable>
      </View>

      <View style={styles.weekdayRow}>
        {WEEKDAYS.map((w) => (
          <Text key={w} style={styles.weekdayText}>
            {w}
          </Text>
        ))}
      </View>

      <View style={styles.grid}>
        {cells.map((cell, i) => {
          const isToday = cell.dateISO === todayISO;
          const hasEvent = eventSet.has(cell.dateISO);
          const isSelected = cell.dateISO === selectedDateISO;
          const isCurrentMonth = cell.monthOffset === 0;

          return (
            <Pressable key={`${cell.dateISO}-${i}`} onPress={() => onSelectDate(cell.dateISO)} style={styles.cell}>
              <View style={[styles.dayWrap, isSelected && !isToday && styles.dayWrapSelected]}>
                <Text
                  style={[
                    styles.dayText,
                    !isCurrentMonth && styles.dayTextMuted,
                    isSelected && styles.dayTextSelected,
                  ]}
                >
                  {cell.day}
                </Text>
              </View>
              <View style={styles.indicatorRow}>
                {isToday ? (
                  <View style={styles.todayBar} />
                ) : hasEvent ? (
                  <View style={styles.eventBar} />
                ) : (
                  <View style={styles.emptyBar} />
                )}
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
  wrap: { backgroundColor: gfColors.bg },
  monthNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
    marginTop: 8,
    marginBottom: 18,
  },
  navButton: { width: 32, height: 32, alignItems: "center", justifyContent: "center" },
  monthLabel: { fontSize: 16, fontWeight: "800", color: gfColors.text, letterSpacing: 0.6, minWidth: 180, textAlign: "center" },
  weekdayRow: { flexDirection: "row", paddingHorizontal: 8 },
  weekdayText: { width: CELL_SIZE, textAlign: "center", fontSize: 12, fontWeight: "500", color: "#6B7280" },
  grid: { flexDirection: "row", flexWrap: "wrap", paddingHorizontal: 8, marginTop: 10 },
  cell: { width: CELL_SIZE, alignItems: "center", paddingVertical: 8, gap: 6 },
  dayWrap: { width: 28, height: 28, borderRadius: 14, alignItems: "center", justifyContent: "center" },
  dayWrapSelected: { backgroundColor: "#EEF0F3" },
  dayText: { fontSize: 14, fontWeight: "500", color: gfColors.text },
  dayTextMuted: { color: "#9CA3AF", fontWeight: "400" },
  dayTextSelected: { fontWeight: "700", color: gfColors.text },
  indicatorRow: { height: 4, alignItems: "center", justifyContent: "center" },
  todayBar: { width: 16, height: 4, borderRadius: 99, backgroundColor: "#2563EB" },
  eventBar: { width: 16, height: 4, borderRadius: 99, backgroundColor: "#F97316" },
  emptyBar: { width: 16, height: 4 },
});
