import { ImageSourcePropType } from "react-native";

export type ConcertDetail = {
  id: string;
  title: string;
  subtitle?: string;
  tour?: string;
  posterFrom: string;
  posterTo: string;
  date: string;
  timeRange: string;
  address: string;
  image: ImageSourcePropType;
};

export const CONCERT_DETAILS: ConcertDetail[] = [
  {
    id: "h1",
    title: "Dewa 19",
    subtitle: "Konser 39 Tahun",
    tour: "Tour Dunia 2026",
    posterFrom: "#222A36",
    posterTo: "#2FA8C0",
    date: "14 Sep 2026",
    timeRange: "19:00 - 22:00 WIB",
    address: "GBK Stadium, Senayan, Jakarta Pusat, DKI Jakarta",
    image: require("../../assets/images/dewa.jpg"),
  },
  {
    id: "h2",
    title: "Kahitna",
    subtitle: "Konser 40 Tahun",
    tour: "Tour Dunia 2026",
    posterFrom: "#2E2A26",
    posterTo: "#8FD14F",
    date: "28 Sep 2026",
    timeRange: "18:00 - 23:00 WIB",
    address: "Beach Club, Kuta, Bali",
    image: require("../../assets/images/kahitna.jpg"),
  },
  {
    id: "h3",
    title: "Ten2Five",
    subtitle: "Konser 25 Tahun",
    tour: "Tour Spesial 2026",
    posterFrom: "#1F2B2E",
    posterTo: "#5B6EE1",
    date: "5 Okt 2026",
    timeRange: "19:30 - 22:30 WIB",
    address: "Istora Senayan, Jakarta Pusat, DKI Jakarta",
    image: require("../../assets/images/ten2five.jpg"),
  },
];

export function getConcertDetailById(id: string | string[] | undefined): ConcertDetail | undefined {
  if (!id) return undefined;
  const targetId = Array.isArray(id) ? id[0] : id;
  return CONCERT_DETAILS.find((c) => c.id === targetId);
}