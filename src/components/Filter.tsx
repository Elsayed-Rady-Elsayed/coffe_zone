import React from "react";
import BasicMenu from "./DropDown";
import { useTranslation } from "react-i18next";

type Props = {};

const Filter = (props: Props) => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className={`filter flex justify-between p-3  ${
        i18n.language === "ar" ? "md:flex-row-reverse" : "md:flex-row"
      } gap-3 dark:text-white flex-col`}
    >
      <div
        className={`${
          i18n.language === "ar" ? "md:flex-row-reverse" : "md:flex-row"
        } left flex gap-4 text-gray-600 dark:text-white`}
      >
        <span className="text-sm md:text-lg">{t("filter")}</span>
        <BasicMenu name={t("avilable")} items={<></>} />
        <BasicMenu name={t("price")} items={<></>} />
      </div>
      <div
        className={`${
          i18n.language === "ar" ? "md:flex-row-reverse" : "md:flex-row"
        } left flex gap-4 text-gray-600 dark:text-white`}
      >
        <span className="text-sm md:text-lg">{t("sortBy")}</span>
        <BasicMenu name={t("alph")} items={<></>} />
        <p className="hidden md:block">14 {t("products")}</p>
      </div>
    </div>
  );
};
export default Filter;
