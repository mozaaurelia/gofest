export const MONTH_KEYS = [
  "calendar.month.january",
  "calendar.month.february",
  "calendar.month.march",
  "calendar.month.april",
  "calendar.month.may",
  "calendar.month.june",
  "calendar.month.july",
  "calendar.month.august",
  "calendar.month.september",
  "calendar.month.october",
  "calendar.month.november",
  "calendar.month.december",
];

export const MONTH_SHORT_KEYS = [
  "calendar.monthShort.jan",
  "calendar.monthShort.feb",
  "calendar.monthShort.mar",
  "calendar.monthShort.apr",
  "calendar.monthShort.may",
  "calendar.monthShort.jun",
  "calendar.monthShort.jul",
  "calendar.monthShort.aug",
  "calendar.monthShort.sep",
  "calendar.monthShort.oct",
  "calendar.monthShort.nov",
  "calendar.monthShort.dec",
];

const MONTH_SHORT_KEY_BY_LABEL: Record<string, string> = {
  jan: "calendar.monthShort.jan",
  feb: "calendar.monthShort.feb",
  mar: "calendar.monthShort.mar",
  apr: "calendar.monthShort.apr",
  mei: "calendar.monthShort.may",
  may: "calendar.monthShort.may",
  jun: "calendar.monthShort.jun",
  jul: "calendar.monthShort.jul",
  agu: "calendar.monthShort.aug",
  aug: "calendar.monthShort.aug",
  sep: "calendar.monthShort.sep",
  okt: "calendar.monthShort.oct",
  oct: "calendar.monthShort.oct",
  nov: "calendar.monthShort.nov",
  des: "calendar.monthShort.dec",
  dec: "calendar.monthShort.dec",
};

export function monthShortKey(label: string): string {
  return MONTH_SHORT_KEY_BY_LABEL[label.trim().toLowerCase()] ?? label;
}

export function dayShortKey(label: string): string {
  return `calendar.dayShort.${label.trim().toLowerCase()}`;
}
