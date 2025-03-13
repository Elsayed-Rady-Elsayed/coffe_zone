import React from "react";
import Hook from "../card/Hook";
import { CardProps } from "../card/cardType";
import { useTranslation } from "react-i18next";
import { BtnProps } from "./sharedBtnType";

const SharedButt = ({
  handleClick,
  disapled,
  text,
  lowOpacity,
  btnWidth,
}: BtnProps) => {
  return (
    <button
      disabled={disapled}
      onClick={handleClick}
      className={`${btnWidth} ${
        !lowOpacity ? "opacity-40 cursor-not-allowed" : ""
      } border w-full p-2 border-orange-500 text-orange-500 rounded-full mt-2 text-xs md:text-sm`}
    >
      {text}
    </button>
  );
};

export default SharedButt;
