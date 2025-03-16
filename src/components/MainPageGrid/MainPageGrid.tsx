import React from "react";
import CategoryHeader from "../categoryHeader/CategoryHeader";
import { MainPageProps } from "../../views/MainPage/MainPageType";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Card from "../card/Card";
import ViewMore from "../ViewMore/ViewMore";
type MainPageGridProps = {
  icon?: IconDefinition;
  text: string;
  list: MainPageProps[];
  link: string;
};
const MainPageGrid = ({ icon, text, list, link }: MainPageGridProps) => {
  return (
    <div className="flex flex-col items-center">
      {icon ? (
        <CategoryHeader icon={icon} text={text} />
      ) : (
        <h3 className="container m-auto font-semibold capitalize md:text-3xl text-xl flex justify-start w-full">
          {text}
        </h3>
      )}
      <div className="container m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-2 md:p-0">
        {list.length > 0 &&
          list.map((el: MainPageProps, idx: number) => {
            return (
              idx < 4 && (
                <Card
                  refAlert={null}
                  id={el.id}
                  img={el.image}
                  title={el.title_en}
                  price={el.price}
                  outStock={el.availablility}
                  item={el}
                />
              )
            );
          })}
      </div>
      <ViewMore text="view more" link={link} />
    </div>
  );
};

export default MainPageGrid;
