import { CarusalSlider, MainPageGrid } from "../../components";
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
    </div>
  );
};

export default MainPage;
