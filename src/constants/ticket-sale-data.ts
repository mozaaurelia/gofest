export type TicketSaleItem = {
  id: string;
  category: string;
  features: string[];
  price: number;
  deadline: string;
};

export const TICKET_SALE_ITEMS: TicketSaleItem[] = [
  {
    id: "vip-b",
    category: "VIP B",
    features: ["Seated", "Price exclude tax 10% & admin fee 5%"],
    price: 3000000,
    deadline: "Penjualan berakhir pada 17 Okt 2026 • 19:00",
  },
  {
    id: "vip-acd",
    category: "VIP A-C-D",
    features: ["Seated", "Price exclude tax 10% & admin fee 5%"],
    price: 3000000,
    deadline: "Penjualan berakhir pada 17 Okt 2026 • 19:00",
  },
  {
    id: "cat-1-abc",
    category: "CAT 1 A-B-C",
    features: ["Seated", "Price exclude tax 10% & admin fee 5%"],
    price: 3000000,
    deadline: "Penjualan berakhir pada 17 Okt 2026 • 19:00",
  },
];

export function formatRupiah(n: number): string {
  if (n === 0) return "Rp. 0";
  return "Rp. " + n.toLocaleString("id-ID");
}
