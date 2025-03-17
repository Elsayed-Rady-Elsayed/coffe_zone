type HomePageTypes = {
  title_en: string;
  title_ar: string;
  price: number;
  image: string;
  availablility: boolean;
  id: number;
  category: string;
};
type alertType = {
  alertRef: React.RefObject<HTMLDivElement> | null;
};

export type { HomePageTypes, alertType };
