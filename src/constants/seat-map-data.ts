export type SeatCategory = {
  label: string;
};

export type BenefitItem = string;

export type BenefitGroup = {
  title: string;
  items: BenefitItem[];
};

export const SEAT_CATEGORIES: SeatCategory[] = [
  { label: "VIP (seating)" },
  { label: "Cat 1 (seating)" },
  { label: "Cat 2 (seating)" },
  { label: "Cat 3 (seating)" },
  { label: "Cat 4 (seating)" },
];

export const SEAT_BENEFITS: BenefitGroup[] = [
  {
    title: "VIP",
    items: [
      "Send-Off: All ticket holders (ALL)",
      "Soundcheck: All ticket holders (ALL)",
      "Group Photo (1:10): Raffle system (RAFFLE)",
      "Signed Poster: Raffle system (RAFFLE)",
      "Signed Polaroid: Raffle system (RAFFLE)",
      "VIP Laminated Pass & Lanyard: All ticket holders (ALL)",
      "Photocard: All ticket holders (ALL)",
    ],
  },
  {
    title: "CAT 1",
    items: [
      "Signed Poster: Raffle system (RAFFLE)",
      "Signed Polaroid: Raffle system (RAFFLE)",
      "Photocard: All ticket holders (ALL)",
    ],
  },
  {
    title: "CAT 2, CAT 3, & CAT 4",
    items: ["Photocard: All ticket holders (ALL)"],
  },
];

export const SEAT_MAP_COPY = {
  categoryTitle: "Which categories are available?",
  categorySubtitle: "There are several categories available, including:",
  benefitTitle: "What are the fan benefits for each ticket category?",
} as const;
