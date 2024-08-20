import React from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../store/context";
import { Link } from "react-router-dom";

type Props = {
  img: string;
  title: string;
  price: number;
  outStock: boolean;
  id: number;

  item: {
    title_en: string;
    title_ar: string;
    price: number;
    image: string;
    availablility: boolean;
    category: string;
  };
};

const Card = (props: Props) => {
  const { t } = useTranslation();
  const { dispatch, basket } = useAuth();
  return (
    <div className="relative">
      {!props.outStock ? (
        <div className="z-10 bg-red-500 text-white p-2 w-full absolute top-1/3 text-center">
          out of stock
        </div>
      ) : (
        ""
      )}
      <Link
        to={
          props.outStock
            ? `/productDetails/${props.item.category}/${props.id}`
            : ""
        }
        className="card text-center h-fit cursor-pointer dark:text-white relative"
      >
        <div
          className={`bg-contain w-full h-60 bg-center bg-no-repeat hover:scale-105`}
          style={{
            backgroundImage: `url('${props.img}')`,
          }}
        ></div>
        <p className="my-2 text-sm">{props.title}</p>
        <p>
          {t("le")} {props.price}
        </p>
      </Link>
      <button
        onClick={() => {
          if (props.outStock) {
            dispatch({ type: "ADD_TO_BASKET", item: props.item });
            alert("product added tp basket");
          }
        }}
        disabled={props.outStock == false ? true : false}
        className={`${
          !props.outStock ? "opacity-40 cursor-not-allowed" : ""
        } border w-full p-2 border-orange-500 text-orange-500 rounded-full mt-2 text-xs md:text-sm`}
      >
        {t("addCart")}
      </button>
    </div>
  );
};
export default Card;
