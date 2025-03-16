import { useEffect, useState } from "react";
import { useAuth } from "../../store/context";
import { MainPageProps } from "./MainPageType";
import { Card } from "../../components";

const Hooks = () => {
  const { product } = useAuth();
  const [allCategories, setallCategories] = useState({
    spices: [],
    nuts: [],
    coffedrinks: [],
  });
  useEffect(() => {
    setallCategories({
      ...allCategories,
      nuts: product.filter((el: MainPageProps) => el.category === "nuts"),
      coffedrinks: product.filter(
        (el: MainPageProps) => el.category === "coffedrinks"
      ),
      spices: product.filter((el: MainPageProps) => el.category === "spices"),
    });
  }, [product]);
  const ListToShow =
    allCategories.spices.length > 0 &&
    allCategories.spices.map((el: MainPageProps) => {
      return (
        <Card
          refAlert={null}
          id={el.id}
          img={el.image}
          title={el.title_en}
          price={el.price}
          outStock={el.availablility}
          item={el}
        />
      );
    });
  return { allCategories };
};

export default Hooks;
