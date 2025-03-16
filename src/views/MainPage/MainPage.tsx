import { CarusalSlider, MainPageGrid, SpecialCard } from "../../components";
import {
  faCoffee,
  faMortarPestle,
  faMountainSun,
} from "@fortawesome/free-solid-svg-icons";
import Hooks from "./Hooks";

const MainPage = () => {
  const { allCategories } = Hooks();
  return (
    <div className="mt-5 flex flex-col ">
      <CarusalSlider />
      <MainPageGrid
        icon={faMortarPestle}
        text="shop spices"
        list={allCategories.spices}
        link="/"
      />
      <MainPageGrid
        icon={faMountainSun}
        text="shop Nuts"
        list={allCategories.nuts}
        link="/"
      />
      <MainPageGrid
        icon={faCoffee}
        text="For Coffee Lovers"
        list={allCategories.coffedrinks}
        link="/"
      />
      <SpecialCard />
      <MainPageGrid
        text="✨ALL NATURAL Honey✨"
        list={allCategories.honey}
        link="/"
      />
      <img
        src="https://hajarafa.com/cdn/shop/files/arafa_post_rings.jpg?v=1713693965&width=550"
        alt=""
        className="my-5"
      />
      <MainPageGrid
        text="SNACKS ON THE GO🍿"
        list={allCategories.honey}
        link="/"
      />{" "}
      <img
        src="https://hajarafa.com/cdn/shop/files/HAJ_RAFA_NUTS.jpg?v=1713695430&width=550"
        alt=""
        className="my-5"
      />
      <MainPageGrid
        icon={faCoffee}
        text="For Coffee Lovers"
        list={allCategories.coffedrinks}
        link="/"
      />
    </div>
  );
};

export default MainPage;
