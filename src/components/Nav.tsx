import React, { useState } from "react";
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

type Props = {};

const Nav = (props: Props) => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`container mt-3 m-auto flex justify-center gap-3 md:gap-5 text-gray-500 font-semibold text-md dark:text-white text-sm md:text-lg ${
        i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <Link to="" className="capitalize hover:underline">
        {t("shopAll")}
      </Link>
      <BasicMenu
        name={t("foods")}
        items={
          <>
            <Link to={""} className="flex gap-2 items-center p-2">
              <img src={coffeeImg} className="w-5" alt="" />
              Coffee & Drinks
            </Link>
            <Link to={""} className="flex gap-2 items-center p-2">
              <img src={bnuts} className="w-6" alt="" />
              Nuts
            </Link>
            <Link to={""} className="flex gap-2 items-center p-2">
              <img src={legumes} className="w-6" alt="" />
              Legumes
            </Link>
            <Link to={""} className="flex gap-2 items-center p-2">
              <img src={honey} className="w-6" alt="" />
              Honey
            </Link>
            <Link to={""} className="flex gap-2 items-center p-2">
              <img src={salt} className="w-6" alt="" />
              Spices
            </Link>
            <Link to={""} className="flex gap-2 items-center p-2">
              <img src={chips} className="w-6" alt="" />
              Snacks
            </Link>
            <Link to={""} className="flex gap-2 items-center p-2">
              <img src={cutlet} className="w-6" alt="" />
              Yamish & Dates
            </Link>
            <Link to={""} className="flex gap-2 items-center p-2">
              <img src={healthy} className="w-6" alt="" />
              Healthy Corner
            </Link>
            <Link to={""} className="flex gap-2 items-center p-2">
              <img src={chocolate} className="w-6" alt="" />
              Sweets & Chocolates
            </Link>
            <Link to={""} className="flex gap-2 items-center p-2">
              Dr.Baby products
            </Link>
          </>
        }
      />
      <BasicMenu
        name={t("non_food")}
        items={
          <>
            <Link to={""} className="flex gap-2 items-center p-2">
              <FcBusinesswoman />
              Cosmetics
            </Link>
            <Link to={""} className="flex gap-2 items-center p-2">
              <FcFlashOn />
              Inscense
            </Link>
          </>
        }
      />
      <Link to="" className="capitalize hover:underline hidden md:block">
        {t("contact")}
      </Link>
      <Link to="" className="capitalize hover:underline hidden md:block">
        {t("branches")}
      </Link>
    </div>
  );
};
export default Nav;
