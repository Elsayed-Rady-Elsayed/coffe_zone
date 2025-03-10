import React, { useEffect, useRef, useState } from "react";
import BasicMenu from "../components/DropDown";
import Filter from "../components/Filter";
import Card from "../components/card/Card";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../store/context";
import i18n from "../i18n";
import { Alert } from "@mui/material";
import AlertItem from "../components/Alert/Alert";
import { APIURL } from "../utils/constants";
import { motion } from "framer-motion";

type Props = {
  alertRef: any;
};

const HomePage = (props: Props) => {
  const { dispatch, product, category } = useAuth();
  const url = window.location.href;
  const urlComponent = url.split("/");
  const alertRef = useRef<any>();
  console.log(urlComponent[3]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      urlComponent[3] === ""
        ? `${APIURL}/foods`
        : `${APIURL}/${urlComponent[3]}`
    )
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: "SET_PRODUCTS", product: res });
        return res;
      })
      .catch((e) => {
        console.log(e);
      });
  }, [urlComponent[3]]);

  return (
    <div className="container p-2 md:p-0 m-auto mt-2 md:mt-10 dark:text-white min-h-[60vh] overflow-hidden">
      <AlertItem refAlert={props.alertRef} />
      <Filter />
      {data[0] ? (
        <div className="relative">
          <div className="animate-spin border border-l-orange-500 border-t-orange-500 border-b-orange-500 w-7 h-7 rounded-full absolute left-1/2 top-1/2"></div>
        </div>
      ) : (
        ""
      )}
      {product.length > 0 ? (
        <div className="cards p-2 grid gap-2 md:gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {product.map(
            (
              el: {
                title_en: string;
                title_ar: string;
                price: number;
                image: string;
                availablility: boolean;
                id: number;
                category: string;
              },
              idx: number
            ) => {
              return (
                <Card
                  refAlert={props.alertRef}
                  id={el.id}
                  item={el}
                  outStock={el.availablility}
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
        <div className="text-center mt-5 dark:text-white">No Items</div>
      )}
    </div>
  );
};
export default HomePage;
