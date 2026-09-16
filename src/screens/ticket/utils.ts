import { CALENDAR_EVENTS, CalendarEvent } from "@/constants/calendar-data";
import { CONCERT_DETAILS } from "@/constants/concert-detail-data";

export const PURCHASED: CalendarEvent[] = CALENDAR_EVENTS.slice(0, 3);

export const DAY_LABEL: Record<string, string> = {
  "2026-09-10": "THU",
  "2026-09-14": "SUN",
  "2026-09-20": "SAT",
};

export function concertToCalendarEvent(c: (typeof CONCERT_DETAILS)[number]): CalendarEvent {
  const parts = c.date.split(" ");
  const day = parts[0] ?? "10";
  const monthRaw = parts[1] ?? "Sep";
  const year = parts[2] ?? "2026";
  const monthMap: Record<string, string> = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    Mei: "05",
    May: "05",
    Jun: "06",
    Jul: "07",
    Agu: "08",
    Aug: "08",
    Sep: "09",
    Okt: "10",
    Oct: "10",
    Nov: "11",
    Des: "12",
    Dec: "12",
  };
  const monthNum = monthMap[monthRaw] ?? "09";
  const dateISO = `${year}-${monthNum}-${day.padStart(2, "0")}`;
  return {
    id: c.id,
    name: c.title,
    venue: c.address.split(",")[0] ?? c.title,
    city: c.address.split(",").pop()?.trim() ?? "Jakarta",
    dateISO,
    day,
    month: monthRaw,
    time: c.timeRange.split(" ")[0] ?? "19:00",
    posterFrom: c.posterFrom,
    posterTo: c.posterTo,
    markerColor: c.posterTo,
    image: c.image,
  };
}
