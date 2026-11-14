export type PaymentMethodOption = {
  id: string;
  label: string;
};

export type PaymentMethod = {
  key: string;
  label: string;
  badge?: string;
  options: PaymentMethodOption[];
};

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    key: "creditCard",
    label: "Credit Card",
    options: [{ id: "credit-debit", label: "Credit / Debit Card" }],
  },
  {
    key: "virtualAccount",
    label: "Virtual Account",
    options: [
      { id: "bca-va", label: "BCA Virtual Account" },
      { id: "mandiri-va", label: "Mandiri Virtual Account" },
      { id: "bni-va", label: "BNI Virtual Account" },
    ],
  },
  {
    key: "paylater",
    label: "PayLater",
    badge: "Promo",
    options: [
      { id: "kredivo", label: "Kredivo" },
      { id: "indodana", label: "Indodana" },
    ],
  },
  {
    key: "qr",
    label: "QR",
    options: [{ id: "qris", label: "QRIS" }],
  },
];

export const PAYMENT_FEES = {
  protection: 10000,
  platform: 15987,
};

export function calcPaymentSummary(basePrice: number) {
  const localTax = Math.round(basePrice * 0.1);
  const adminFee = Math.round(basePrice * 0.05);
  const total = basePrice + localTax + adminFee + PAYMENT_FEES.protection + PAYMENT_FEES.platform;

  return { localTax, adminFee, total };
}
