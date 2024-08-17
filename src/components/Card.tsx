import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
  img: string;
  title: string;
  price: number;
};

const Card = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="card text-center h-fit cursor-pointer dark:text-white">
      <div
        className={`bg-contain w-full h-60 bg-center bg-no-repeat`}
        style={{
          backgroundImage: `url('${props.img}')`,
        }}
      ></div>
      <p className="my-2 text-sm">{props.title}</p>
      <p>
        {t("le")} {props.price}
      </p>
      <button className="border w-full p-2 border-orange-500 text-orange-500 rounded-full mt-2">
        {t("addCart")}
      </button>
    </div>
  );
};
export default Card;
