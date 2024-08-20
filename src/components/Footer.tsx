import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

type Props = {};

const Footer = (props: Props) => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`mt-10 py-5 text-xs md:text-lg uppercase flex flex-col items-center cursor-pointer justify-center p-1 bg-orange-600 dark:text-white `}
    >
      <p className="mt-9">{t("quikLink")}</p>
      <ul
        className={`mt-9 flex flex-col items-center ${
          i18n.language === "ar" ? "md:flex-row-reverse" : "md:flex-row"
        } gap-2 md:gap-6`}
      >
        <li>
          <Link to="/" className="text-sm capitalize hover:underline">
            {t("search")}
          </Link>
        </li>
        <li>
          <Link to="/" className="text-sm capitalize hover:underline">
            {t("shopAll")}
          </Link>
        </li>
        <li>
          <Link to="/branches" className="text-sm capitalize hover:underline">
            {t("OurStore")}
          </Link>
        </li>
        <li>
          <Link to="" className="text-sm capitalize hover:underline">
            {t("policy")}
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-sm capitalize hover:underline">
            {t("contactUs")}
          </Link>
        </li>
      </ul>
      <ul className="mt-9 flex gap-5 mb-9">
        <li>
          <a href="">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="">
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <div
        className="w-full bg-black/10"
        style={{
          height: "0.3px",
        }}
      ></div>
      <p className="text-sm p-10 text-black dark:text-white">
        {t("copyRight")}
      </p>
    </div>
  );
};
export default Footer;
