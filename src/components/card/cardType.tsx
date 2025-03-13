type CardProps = {
  img: string;
  title: string;
  price: number;
  outStock: boolean;
  id: number;
  refAlert: any;
  item: {
    id: number;
    title_en: string;
    title_ar: string;
    price: number;
    image: string;
    availablility: boolean;
    category: string;
  };
};

const cardVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

export type { CardProps };
export { cardVariants };
