import React from "react";
import Toggler from "./Toggler";
import { FcSportsMode } from "react-icons/fc";
import { FcRight } from "react-icons/fc";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import shopCart from "../assets/shopping_cart.png";
type Props = {};

const Header = (props: Props) => {
  const { t } = useTranslation();

  return (
    <Link
      to={""}
      className="text-xs md:text-lg uppercase flex items-center cursor-pointer justify-center p-1 bg-orange-600 hover:underline dark:text-white"
    >
      <FcSportsMode />
      <p>{t("headerOff")}</p>
      <FcSportsMode />
      <FcRight />
    </Link>
  );
};
export default Header;
