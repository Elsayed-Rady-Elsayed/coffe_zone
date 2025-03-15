type MainPageProps = {
  id: number;
  img: string;
};

const CarusalVariant = {
  hidden: { x: "-100%" },
  visible: { x: "0%", transition: { duration: 1, ease: "easeInOut" } },
  exit: { x: "100%" },
};
const CarusalList: MainPageProps[] = [
  {
    id: 1,
    img: "https://hajarafa.com/cdn/shop/files/web_banner._jpg.jpg?v=1720082147&width=1100",
  },
  {
    id: 2,
    img: "https://hajarafa.com/cdn/shop/files/web_banner._jpg.jpg?v=1720082147&width=1100",
  },
  {
    id: 3,
    img: "https://hajarafa.com/cdn/shop/files/web_banner._jpg.jpg?v=1720082147&width=1100",
  },
];
export type { MainPageProps };
export { CarusalList, CarusalVariant };
