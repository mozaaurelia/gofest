export type WristbandQA = {
  question: string;
  answer?: string;
  bullets?: string[];
  intro?: string;
};

export const WRISTBAND_QA: WristbandQA[] = [
  {
    question: "When and where is the ticket redemption location ?",
    answer: "The time and place for wristbands exchange will be informed via social media and Dyandra Global's website",
  },
  {
    question: "Where can I access my ticket ?",
    answer: "Tickets can be accessed directly via the ticket link sent to the email address registered at the time of purchase.",
  },
  {
    question: "The following are the requirements for ticket redemption ?",
    bullets: [
      "Printed e-voucher",
      "Original National Identification Card/ Driver's License/ Passport/ Student Card that is still valid (name on the ID must be the same as the one written on the e-voucher).",
    ],
  },
  {
    question: "What happens if my wristband is lost or damaged ?",
    answer:
      "No replacement wristbands will be issued under any circumstances if lost or damaged, regardless of the reason. The organizer is not responsible for lost, stolen, or damaged wristbands. Please ensure you inspect and verify the condition of your wristband while at the ticket box.",
  },
  {
    question: "Can the ticket redemption be represented by someone else ?",
    intro: "If the exchange is represented :",
    bullets: [
      "Printed e-voucher",
      "Letter of Attorney signed on a IDR 10.000 stamp (Materai) by the person that you are representing",
      "A copy of the National Identification Card whose name is written on the e-voucher",
    ],
  },
];
