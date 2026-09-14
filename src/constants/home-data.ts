import { ImageSourcePropType } from "react-native";

export type HeroEvent = {
  id: string;
  title: string;
  subtitle?: string;
  tour?: string;
  venue: string;
  date: string;
  image: ImageSourcePropType;
  /** Warna dominan/aksen poster untuk tint metalik background (konsisten gfColors) */
  accent: string;
};

export const HERO_EVENTS: HeroEvent[] = [
  { id: "h1", title: "Dewa 19", subtitle: "Konser 39 Tahun", tour: "Tour Dunia 2026", venue: "GBK Stadium, Jakarta", date: "SATURDAY, 14 SEP 2026", image: require("../../assets/images/dewa.jpg"), accent: "#2FA8C0" },
  { id: "h2", title: "Kahitna", subtitle: "Konser 40 Tahun", tour: "Tour Dunia 2026", venue: "Beach Club, Bali", date: "SUNDAY, 28 SEP 2026", image: require("../../assets/images/kahitna.jpg"), accent: "#8FD14F" },
  { id: "h3", title: "Ten2Five", subtitle: "Konser 25 Tahun", tour: "Tour Spesial 2026", venue: "Istora Senayan, Jakarta", date: "MONDAY, 5 OKT 2026", image: require("../../assets/images/ten2five.jpg"), accent: "#5B6EE1" },
];