import React, { useState } from "react";
import BasicMenu from "../components/DropDown";
import Filter from "../components/Filter";
import Card from "../components/Card";
import { useQuery } from "@tanstack/react-query";
import { title } from "process";

type Props = {};

const HomePage = (props: Props) => {
  const data = useQuery({
    queryKey: ["foods"],
    queryFn: () =>
      fetch(`http://localhost:3000/foods`)
        .then((res) => res.json())
        .catch((e) => {
          console.log(e);
        }),
  });
  if (data.isLoading) {
    console.log("loading");
  }
  if (data.isSuccess) {
    console.log(data);
  }

  return (
    <div className="container p-2 md:p-0 m-auto mt-2 md:mt-10">
      <p className="text-md md:text-3xl font-semibold p-2">Coffee Packs</p>
      <Filter />
      {data.isPending || data.isError || data.isLoading ? (
        <div className="relative">
          <div className="animate-spin border border-l-orange-500 border-t-orange-500 border-b-orange-500 w-7 h-7 rounded-full absolute left-1/2 top-1/2"></div>
        </div>
      ) : (
        ""
      )}
      {!data.isPending &&
      data.isSuccess &&
      data.isFetched &&
      data.data.length > 0 ? (
        <div className="cards p-2 grid gap-2 md:gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.data.map(
            (
              el: {
                title_en: string;
                title_ar: string;
                price: number;
                image: string;
              },
              idx: number
            ) => {
              return (
                <Card
                  key={idx}
                  img={el.image}
                  title={`${el.title_en} - ${el.title_ar}`}
                  price={el.price}
                />
              );
            }
          )}
        </div>
      ) : (
        <div className="text-center mt-5">No Items</div>
      )}
    </div>
  );
};
export default HomePage;
