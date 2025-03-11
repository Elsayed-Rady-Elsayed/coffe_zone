import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { HeaderOfferProps } from "./headerTypes";

const Hook = () => {
  const { t, i18n } = useTranslation();
  const [showedItem, setShowedItem] = useState(0);
  const arrowStyle = "w-5 cursor-pointer";
  let content: HeaderOfferProps[] = [
    {
      text: t("headerOff1"),
      link: "/ramadanBox",
    },
    {
      text: t("headerOff2"),
      link: "/all",
    },
  ];
  const incrementIndex = () => {
    if (showedItem < content.length - 1) {
      setShowedItem((prev) => prev + 1);
    } else {
      setShowedItem(showedItem === 0 ? 0 : (prev) => prev - 1);
    }
  };
  const decrementIndex = () => {
    if (showedItem > 0) {
      setShowedItem((prev) => prev - 1);
    } else {
      setShowedItem(showedItem === content.length - 1 ? 0 : (prev) => prev + 1);
    }
  };
  return { incrementIndex, decrementIndex, showedItem, content, arrowStyle };
};

export default Hook;
