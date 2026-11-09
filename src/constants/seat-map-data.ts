export type SeatCategory = {
  labelKey: string;
};

export type BenefitItem = string;

export type BenefitGroup = {
  titleKey: string;
  itemKeys: BenefitItem[];
};

export const SEAT_CATEGORIES: SeatCategory[] = [
  { labelKey: "seatmap.category.vip" },
  { labelKey: "seatmap.category.cat1" },
  { labelKey: "seatmap.category.cat2" },
  { labelKey: "seatmap.category.cat3" },
  { labelKey: "seatmap.category.cat4" },
];

export const SEAT_BENEFITS: BenefitGroup[] = [
  {
    titleKey: "seatmap.benefit.group.vip",
    itemKeys: [
      "seatmap.benefit.sendOff",
      "seatmap.benefit.soundcheck",
      "seatmap.benefit.groupPhoto",
      "seatmap.benefit.signedPoster",
      "seatmap.benefit.signedPolaroid",
      "seatmap.benefit.laminatedPass",
      "seatmap.benefit.photocard",
    ],
  },
  {
    titleKey: "seatmap.benefit.group.cat1",
    itemKeys: [
      "seatmap.benefit.signedPoster",
      "seatmap.benefit.signedPolaroid",
      "seatmap.benefit.photocard",
    ],
  },
  {
    titleKey: "seatmap.benefit.group.cat234",
    itemKeys: ["seatmap.benefit.photocard"],
  },
];

export const SEAT_MAP_COPY = {
  categoryTitle: "Which categories are available?",
  categorySubtitle: "There are several categories available, including:",
  benefitTitle: "What are the fan benefits for each ticket category?",
} as const;
