import { useEffect, useState } from "react";
import { useAuth } from "../../store/context";
import { MainPageProps } from "./MainPageType";
import { Card } from "../../components";

const Hooks = ({ category }: { category: string }) => {
  const { product } = useAuth();
  const [spices, setSpices] = useState([]);
  useEffect(() => {
    setSpices(product.filter((el: any) => el.category === category));
  }, [product]);
  const ListToShow =
    spices.length > 0 &&
    spices.map((el: MainPageProps) => {
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
  return { spices, product, ListToShow };
};

export default Hooks;
