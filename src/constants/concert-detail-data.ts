export type ConcertDetail = {
  id: string;
  title: string;
  posterFrom: string;
  posterTo: string;
  date: string;
  timeRange: string;
  address: string;
};

export const CONCERT_DETAILS: ConcertDetail[] = [
  {
    id: "h1",
    title: "Bumi Harmoni Fest",
    posterFrom: "#1B222D",
    posterTo: "#2FA8C0",
    date: "14 Sep 2026",
    timeRange: "19:00 - 22:00 WIB",
    address: "GBK Stadium, Senayan, Jakarta Pusat, DKI Jakarta",
  },
  {
    id: "h2",
    title: "Sunset Beats",
    posterFrom: "#1F2A1E",
    posterTo: "#8FD14F",
    date: "28 Sep 2026",
    timeRange: "18:00 - 23:00 WIB",
    address: "Beach Club, Kuta, Bali",
  },
  {
    id: "h3",
    title: "Djakarta Sound Fest",
    posterFrom: "#1A1E33",
    posterTo: "#5B6EE1",
    date: "5 Okt 2026",
    timeRange: "19:30 - 22:30 WIB",
    address: "Istora Senayan, Jakarta Pusat, DKI Jakarta",
  },
  {
    id: "h4",
    title: "Kota Kilau",
    posterFrom: "#2A2410",
    posterTo: "#F4D35E",
    date: "2 Nov 2026",
    timeRange: "19:00 - 22:00 WIB",
    address: "JX International, Surabaya, Jawa Timur",
  },
];

export function getConcertDetailById(id: string | string[] | undefined): ConcertDetail | undefined {
  if (!id) return undefined;
  const targetId = Array.isArray(id) ? id[0] : id;
  return CONCERT_DETAILS.find((c) => c.id === targetId);
}