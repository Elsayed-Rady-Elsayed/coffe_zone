import React, { useTransition } from "react";
import { SlHandbag } from "react-icons/sl";
import { SlMagnifier } from "react-icons/sl";
import { LiaGlobeSolid } from "react-icons/lia";
import Toggler from "./Toggler";
import { useTranslation } from "react-i18next";
import Drawer from "./Drawer";

type Props = {};

const MainHeader = (props: Props) => {
  const { i18n } = useTranslation();
  const changeLang = (lng: any) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div
      className={`container m-auto text-xl mt-5 flex items-center justify-between p-2 px-3`}
    >
      <div className="flex gap-2 items-center">
        <span className="cursor-pointer hover:text-2xl dark:text-white">
          <SlMagnifier />
        </span>
        <span className="cursor-pointer mt-1 hover:text-2xl dark:text-white">
          <Toggler />
        </span>
      </div>
      <img
        className="w-20 md:w-36 lg:w-44"
        src="https://hajarafa.com/cdn/shop/files/Haj_arafa_new_logo.png?v=1709123942&width=280"
        alt="logo"
      />

      <div className="flex gap-2 items-center">
        <span
          className="cursor-pointer hover:text-2xl dark:text-white"
          onClick={() => {
            changeLang(i18n.language === "en" ? "ar" : "en");
          }}
        >
          <LiaGlobeSolid />
        </span>
        <Drawer />
      </div>
    </div>
  );
};
export default MainHeader;
