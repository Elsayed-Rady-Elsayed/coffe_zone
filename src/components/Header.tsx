import React from "react";
import Toggler from "./Toggler";
import { FcSportsMode } from "react-icons/fc";
import { FcRight } from "react-icons/fc";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import shopCart from "../assets/shopping_cart.png";
type Props = {};

const Header = (props: Props) => {
  const { t, i18n } = useTranslation();
  let content = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <Link
      to={""}
      className="text-xs md:text-lg uppercase flex items-center cursor-pointer p-1 bg-orange-600 hover:underline dark:text-white overflow-hidden gap-5"
    >
      {content.map((e: any, idx) => {
        return (
          <div key={idx} className="flex items-center translate">
            <FcSportsMode />
            <div
              className={`${
                i18n.language === "ar" ? "w-60 md:w-96" : "w-44 md:w-64"
              }`}
            >
              {t("headerOff")}
            </div>
            <FcSportsMode />
            <FcRight />
          </div>
        );
      })}
    </Link>
  );
};
export default Header;
