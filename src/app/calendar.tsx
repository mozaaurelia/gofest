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

export default function CalendarScreen() {
  const [mode, setMode] = useState<CalendarViewMode>("list");
  const [selectedDate, setSelectedDate] = useState("2026-09-10");

  return (
    <SafeAreaView style={styles.safe}>
      <CalendarHeader mode={mode} onToggleMode={() => setMode((m) => (m === "list" ? "grid" : "list"))} />

      {mode === "list" ? (
        <EventTimelineList />
      ) : (
        <View style={styles.gridContainer}>
          <MonthGrid selectedDateISO={selectedDate} onSelectDate={setSelectedDate} />
          <DayEventsPanel
            dateLabel={`${selectedDate.split("-")[2]} Sep`}
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