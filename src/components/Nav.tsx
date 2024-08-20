import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FcBusinesswoman } from "react-icons/fc";
import { FcFlashOn } from "react-icons/fc";
import BasicMenu from "./DropDown";
import { useTranslation } from "react-i18next";
import coffeeImg from "../assets/coffee.png";
import bnuts from "../assets/brazil_nuts.png";
import legumes from "../assets/artichoke.png";
import honey from "../assets/honey.png";
import salt from "../assets/salt_shaker.png";
import chips from "../assets/potato_chips.png";
import cutlet from "../assets/cutlet.png";
import healthy from "../assets/apple_green.png";
import chocolate from "../assets/chocolate.png";
import { useAuth } from "../store/context";
import { useQuery } from "@tanstack/react-query";

type Props = {};

const Nav = (props: Props) => {
  const { t, i18n } = useTranslation();
  const [category, setCategory] = useState("foods");
  const { dispatch } = useAuth();
  const changeCategoy = (e: string) => {
    setCategory(e);
  };
  useEffect(() => {
    fetch(`http://localhost:3000/${category}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: "SET_PRODUCTS", product: res });
        return res;
      })
      .catch((e) => {
        console.log(e);
      });
  }, [category]);

  return (
    <div
      className={`container mt-3 m-auto flex justify-center gap-3 md:gap-5 text-gray-500 font-semibold text-md dark:text-white text-sm md:text-lg ${
        i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <button
        onClick={() => {
          window.location.href = "/";
          changeCategoy("foods");
          dispatch({
            type: "SET_CATEGORY",
            title:
              i18n.language === "ar"
                ? "القهوه و المشروبات"
                : "Coffee And Drinks",
          });
        }}
        className="capitalize hover:underline"
      >
        {t("shopAll")}
      </button>
      <BasicMenu
        name={t("foods")}
        items={
          <>
            <button
              onClick={() => {
                changeCategoy("foods?category=coffedrinks");
                dispatch({
                  type: "SET_CATEGORY",
                  title:
                    i18n.language === "ar"
                      ? "القهوه و المشروبات"
                      : "Coffee And Drinks",
                });
              }}
              className="flex gap-2 items-center p-2"
            >
              <img src={coffeeImg} className="w-5" alt="" />
              Coffee & Drinks
            </button>
            <button
              onClick={() => {
                changeCategoy("foods?category=nuts");
                dispatch({
                  type: "SET_CATEGORY",
                  title:
                    i18n.language === "ar"
                      ? "القهوه و المشروبات"
                      : "Coffee And Drinks",
                });
              }}
              className="flex gap-2 items-center p-2"
            >
              <img src={bnuts} className="w-6" alt="" />
              Nuts
            </button>
            <button
              onClick={() => {
                changeCategoy("foods?category=legumes");
                dispatch({
                  type: "SET_CATEGORY",
                  title:
                    i18n.language === "ar"
                      ? "القهوه و المشروبات"
                      : "Coffee And Drinks",
                });
              }}
              className="flex gap-2 items-center p-2"
            >
              <img src={legumes} className="w-6" alt="" />
              Legumes
            </button>
            <button
              onClick={() => {
                changeCategoy("foods?category=honey");
                dispatch({
                  type: "SET_CATEGORY",
                  title:
                    i18n.language === "ar"
                      ? "القهوه و المشروبات"
                      : "Coffee And Drinks",
                });
              }}
              className="flex gap-2 items-center p-2"
            >
              <img src={honey} className="w-6" alt="" />
              Honey
            </button>
            <button
              onClick={() => {
                changeCategoy("foods?category=spices");
                dispatch({
                  type: "SET_CATEGORY",
                  title:
                    i18n.language === "ar"
                      ? "القهوه و المشروبات"
                      : "Coffee And Drinks",
                });
              }}
              className="flex gap-2 items-center p-2"
            >
              <img src={salt} className="w-6" alt="" />
              Spices
            </button>
            <button
              onClick={() => {
                changeCategoy("foods?category=snacks");
                dispatch({
                  type: "SET_CATEGORY",
                  title:
                    i18n.language === "ar"
                      ? "القهوه و المشروبات"
                      : "Coffee And Drinks",
                });
              }}
              className="flex gap-2 items-center p-2"
            >
              <img src={chips} className="w-6" alt="" />
              Snacks
            </button>
            <button
              onClick={() => {
                changeCategoy("foods?category=yamish");
                dispatch({
                  type: "SET_CATEGORY",
                  title:
                    i18n.language === "ar"
                      ? "القهوه و المشروبات"
                      : "Coffee And Drinks",
                });
              }}
              className="flex gap-2 items-center p-2"
            >
              <img src={cutlet} className="w-6" alt="" />
              Yamish & Dates
            </button>
            <button
              onClick={() => {
                changeCategoy("foods?category=healthy");
                dispatch({
                  type: "SET_CATEGORY",
                  title:
                    i18n.language === "ar"
                      ? "القهوه و المشروبات"
                      : "Coffee And Drinks",
                });
              }}
              className="flex gap-2 items-center p-2"
            >
              <img src={healthy} className="w-6" alt="" />
              Healthy Corner
            </button>
            <button
              onClick={() => {
                changeCategoy("foods?category=sweetandChocolates");
                dispatch({
                  type: "SET_CATEGORY",
                  title:
                    i18n.language === "ar"
                      ? "القهوه و المشروبات"
                      : "Coffee And Drinks",
                });
              }}
              className="flex gap-2 items-center p-2"
            >
              <img src={chocolate} className="w-6" alt="" />
              Sweets & Chocolates
            </button>
            <button
              onClick={() => {
                changeCategoy("foods?category=legumes");
                dispatch({
                  type: "SET_CATEGORY",
                  title:
                    i18n.language === "ar"
                      ? "القهوه و المشروبات"
                      : "Coffee And Drinks",
                });
              }}
              className="flex gap-2 items-center p-2"
            >
              Dr.Baby products
            </button>
          </>
        }
      />
      <BasicMenu
        name={t("non_food")}
        items={
          <>
            <button
              onClick={() => {
                changeCategoy("nonFoods?category=cosmetics");
                dispatch({
                  type: "SET_CATEGORY",
                  title:
                    i18n.language === "ar"
                      ? "القهوه و المشروبات"
                      : "Coffee And Drinks",
                });
              }}
              className="flex gap-2 items-center p-2"
            >
              <FcBusinesswoman />
              Cosmetics
            </button>
            <button
              onClick={() => {
                changeCategoy("nonFoods?category=Incense");
                dispatch({
                  type: "SET_CATEGORY",
                  title:
                    i18n.language === "ar"
                      ? "القهوه و المشروبات"
                      : "Coffee And Drinks",
                });
              }}
              className="flex gap-2 items-center p-2"
            >
              <FcFlashOn />
              Inscense
            </button>
          </>
        }
      />
      <Link
        to="/contact"
        className="capitalize hover:underline hidden md:block"
      >
        {t("contact")}
      </Link>
      <Link
        to="/branches"
        className="capitalize hover:underline hidden md:block"
      >
        {t("branches")}
      </Link>
    </div>
  );
};
export default Nav;
