import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../store/context";
import { Link, useNavigate } from "react-router-dom";
import Alert from "./Alert";
import AlertItem from "./Alert";
import { APIURL } from "../utils/constants";
import { use } from "i18next";
import { motion } from "framer-motion";

type Props = {
  img: string;
  title: string;
  price: number;
  outStock: boolean;
  id: number;
  refAlert: any;
  item: {
    id: Number;
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
  const { dispatch, basket, user } = useAuth();
  let isExist: boolean;
  const ref = useRef<any>(null);
  useEffect(() => {
    fetch(`${APIURL}/users/${user.id}`)
      .then((res) => res.json())
      .then((data) => {
        data.cart.forEach((el: any) => {
          if (el.id == ref.current?.dataset.id) {
            isExist = true;
          }
        });
        if (!isExist) {
          fetch(`${APIURL}/users/${user.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: user.id,
              cart: [...basket, ...user.cart],
              orders: user.orders,
            }),
          });
        }
      });
  }, [basket]);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={
        {
          // opacity: 1,
        }
      }
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="relative"
    >
      {!props.outStock ? (
        <div className="z-10 bg-red-500 text-white p-2 w-full absolute top-1/3 text-center">
          {t("outOfStock")}
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
        ref={ref}
        data-id={props.item.id}
        onClick={async (e: any) => {
          if (props.outStock) {
            if (!isExist) {
              dispatch({
                type: "ADD_TO_BASKET",
                item: { ...props.item, quantity: 1, date: Date() },
              });
              setTimeout(() => {
                window.location.href = "/";
              }, 1000);
              props.refAlert.current.classList.remove("hidden");
              props.refAlert.current.classList.add("bg-green-500");
              props.refAlert.current.innerHTML = t("alertAddedToCart");
            } else {
              props.refAlert.current.classList.remove("hidden");
              props.refAlert.current.classList.add("bg-green-500");
              props.refAlert.current.innerHTML = t("alertExistInCart");
              setTimeout(() => {
                props.refAlert.current.classList.add("hidden");
              }, 1000);
            }
          }
        }}
        disabled={props.outStock === false ? true : false}
        className={`${
          !props.outStock ? "opacity-40 cursor-not-allowed" : ""
        } border w-full p-2 border-orange-500 text-orange-500 rounded-full mt-2 text-xs md:text-sm`}
      >
        {t("addCart")}
      </button>
    </motion.div>
  );
};
export default Card;
