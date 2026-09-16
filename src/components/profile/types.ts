export type ProfileStat = {
  value: string;
  label: string;
};

export type ProfileData = {
  name: string;
  role: string;
  location: string;
  avatarUri?: string;
  stats: ProfileStat[];
};

export type PortfolioItem = {
  id: string;
  bg: string;
  title?: string;
  subtitle?: string;
};

export type ProfileTabKey = "portfolio" | "about" | "services";
