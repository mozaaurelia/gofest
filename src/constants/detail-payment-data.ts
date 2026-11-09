import { ImageSourcePropType } from "react-native";

export type PaymentCustomer = {
  name: string;
  email: string;
  phone: string;
  identity: string;
  birthDate: string;
  gender: string;
};

export const PAYMENT_STEPS = ["Pilih Tiket", "Data Pelanggan", "Pembayaran", "Bayar"] as const;

export const ACTIVE_PAYMENT_STEP = PAYMENT_STEPS.length - 1;

export const PAYMENT_CUSTOMER: PaymentCustomer = {
  name: "guehruer hehehehr",
  email: "mozaaurel05@gmail.com",
  phone: "+62123456789",
  identity: "jerhrjrjr",
  birthDate: "06 May 2001",
  gender: "Wanita",
};

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
