import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

const Hook = () => {
  const { i18n } = useTranslation();
  const refInout = useRef<HTMLDivElement | null>(null);
  const changeLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
    window.localStorage.setItem("lang", i18n.language);
  };
  const sharedIconStyle = "cursor-pointer hover:text-2xl dark:text-white";
  const sharedContainerStyle = "flex gap-2 items-center";
  return { refInout, changeLang, sharedContainerStyle, sharedIconStyle };
};

export default Hook;
