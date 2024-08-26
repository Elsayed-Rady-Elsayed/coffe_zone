import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { APIURL } from "../utils/constants";

type Props = {
  mainCategory: string;
  subCategoy: string;
  id: number;
};

const MayLikeCard = (props: Props) => {
  const [pList, setProducts] = useState([]);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    fetch(`${APIURL}/${props.mainCategory}?category=${props.subCategoy}`)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [props.subCategoy]);

  return (
    <div
      className={`${
        i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
      } flex gap-5 flex-wrap justify-between`}
    >
      {pList.map((el: any, idx) => {
        if (idx < 5 && el.id != props.id) {
          return (
            <div className="relative w-52" key={idx}>
              <Link
                onClick={() => {
                  window.location.href = `/productDetails/${props.subCategoy}/${el.id} `;
                }}
                to={`/productDetails/${props.subCategoy}/${el.id} `}
                className="card bg-black text-center h-fit cursor-pointer dark:text-white relative"
              >
                <div
                  className={`bg-contain w-full h-60 bg-center bg-no-repeat hover:scale-105`}
                  style={{
                    backgroundImage: `url('${el.image}')`,
                  }}
                ></div>
                <p className="my-2 text-sm">
                  {el.title_en} - {el.title_ar}
                </p>
                <p>
                  {t("le")} {el.price}
                </p>
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
};
export default MayLikeCard;
