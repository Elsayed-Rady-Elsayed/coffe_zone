import { CarusalSlider, CategoryHeader, ViewMore } from "../../components";
import { faMortarPestle } from "@fortawesome/free-solid-svg-icons";
import Hooks from "./Hooks";

const MainPage = () => {
  const { ListToShow } = Hooks({ category: "spices" });
  return (
    <div className="mt-5 flex flex-col">
      <CarusalSlider />
      <CategoryHeader icon={faMortarPestle} text="shop spices" />
      <div className="container m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {ListToShow}
      </div>
      <ViewMore text="view more" />
    </div>
  );
};

export default MainPage;
