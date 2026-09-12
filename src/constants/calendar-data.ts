export type CalendarEvent = {
  id: string;
  name: string;
  venue: string;
  city: string;
  dateISO: string; // "2026-09-10"
  day: string;
  month: string;
  time: string;
  posterFrom: string;
  posterTo: string;
  markerColor: string; // warna dot penanda di grid kalender
};

export const CALENDAR_EVENTS: CalendarEvent[] = [
  { id: "c1", name: "Bumi Harmoni Fest", venue: "GBK Stadium", city: "Jakarta", dateISO: "2026-09-10", day: "10", month: "Sep", time: "19:00", posterFrom: "#1B222D", posterTo: "#2FA8C0", markerColor: "#2FA8C0" },
  { id: "c2", name: "Sunset Beats", venue: "Beach Club", city: "Bali", dateISO: "2026-09-14", day: "14", month: "Sep", time: "18:00", posterFrom: "#1F2A1E", posterTo: "#8FD14F", markerColor: "#8FD14F" },
  { id: "c3", name: "Djakarta Sound Fest", venue: "Istora Senayan", city: "Jakarta", dateISO: "2026-09-14", day: "14", month: "Sep", time: "20:00", posterFrom: "#1A1E33", posterTo: "#5B6EE1", markerColor: "#2FA8C0" },
  { id: "c4", name: "Kota Kilau", venue: "JX International", city: "Surabaya", dateISO: "2026-09-20", day: "20", month: "Sep", time: "19:30", posterFrom: "#2A2410", posterTo: "#F4D35E", markerColor: "#8FD14F" },
];

export function getEventsForDate(dateISO: string) {
  return CALENDAR_EVENTS.filter((e) => e.dateISO === dateISO);
}

export function getEventDatesInMonth(year: number, month: number) {
  const prefix = `${year}-${String(month + 1).padStart(2, "0")}`;
  return CALENDAR_EVENTS.filter((e) => e.dateISO.startsWith(prefix));
}