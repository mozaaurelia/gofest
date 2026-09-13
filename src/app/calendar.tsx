import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CalendarHeader, { CalendarViewMode } from "../components/calendar/calendar-header";
import EventTimelineList from "../components/calendar/event-timeline-list";
import MonthGrid from "../components/calendar/month-grid";
import DayEventsPanel from "../components/calendar/day-events-panel";
import BottomNav from "../components/home/bottom-nav";
import { getEventsForDate } from "../constants/calendar-data";
import { gfColors } from "../constants/gf-theme";

function getTodayISO(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
const MONTH_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function CalendarScreen() {
  const [mode, setMode] = useState<CalendarViewMode>("grid");
  const [selectedDate, setSelectedDate] = useState(() => getTodayISO());

  return (
    <SafeAreaView style={styles.safe}>
      <CalendarHeader mode={mode} onToggleMode={() => setMode((m) => (m === "list" ? "grid" : "list"))} />

      {mode === "list" ? (
        <EventTimelineList />
      ) : (
        <View style={styles.gridContainer}>
          <MonthGrid selectedDateISO={selectedDate} onSelectDate={setSelectedDate} />
          <DayEventsPanel
            dateLabel={`${parseInt(selectedDate.split("-")[2], 10)} ${MONTH_SHORT[parseInt(selectedDate.split("-")[1], 10) - 1]}`}
            events={getEventsForDate(selectedDate)}
          />
        </View>
      )}

      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: gfColors.bg },
  gridContainer: { flex: 1, paddingBottom: 100 },
});