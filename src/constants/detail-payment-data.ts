import { ImageSourcePropType } from "react-native";
import type { AuthUser } from "@/services/auth";

export type PaymentCustomer = {
  name: string;
  email: string;
  phone: string;
  identity: string;
  birthDate: string;
  gender: string;
};

const MONTH_NAMES = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

function formatBirthDate(value?: string): string {
  if (!value) return "-";
  const [day, month, year] = value.split(" ");
  const monthIndex = Number(month) - 1;
  return day && year && MONTH_NAMES[monthIndex]
    ? `${day} ${MONTH_NAMES[monthIndex]} ${year}`
    : value;
}

function formatGender(value?: string): string {
  if (value === "male") return "Pria";
  if (value === "female") return "Wanita";
  return value || "-";
}

export function toPaymentCustomer(user: AuthUser | null): PaymentCustomer {
  return {
    name: [user?.firstName, user?.lastName].filter(Boolean).join(" ") || "-",
    email: user?.email || "-",
    phone: "-",
    identity: "-",
    birthDate: formatBirthDate(user?.birthDate),
    gender: formatGender(user?.gender),
  };
}

export const QRIS_DESCRIPTION =
  "Quick Response Code Indonesian Standard atau biasa disingkat QRIS (dibaca KRIS) adalah penyatuan berbagai macam QR dari berbagai Penyelenggara Jasa Sistem Pembayaran (PJSP) menggunakan QR Code. QRIS dikembangkan oleh industri sistem pembayaran bersama dengan Bank Indonesia agar proses transaksi dengan QR Code dapat lebih mudah, cepat, dan terjaga.";

type FallbackEvent = {
  title: string;
  date: string;
  time: string;
  address: string;
  image: ImageSourcePropType;
};

export const DETAIL_PAYMENT_FALLBACK_EVENT: FallbackEvent = {
  title: "MEN I TRUST ASIA TOUR 2026: LIVE IN JAKARTA",
  date: "12 Nov 2026",
  time: "17:00 - 23:00 WIB",
  address: "Tennis Indoor Senayan - Jl. Pintu Satu Senayan, Bung Karno Sports Complex",
  image: require("../../assets/images/dewa.jpg"),
};
