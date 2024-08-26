import { log } from "console";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../store/context";
import i18n from "../i18n";
import MayLikeCard from "../components/mayLikeCard";
import AlertItem from "../components/Alert";
import { APIURL } from "../utils/constants";

type Props = {
  alertRef: any;
};

const ProductDetails = (props: Props) => {
  const { dispatch, basket } = useAuth();
  console.log(props);

  const url = window.location.href.split("/");
  console.log(url);

  const [counter, setCounter] = useState(1);
  const { t } = useTranslation();
  let id = url[url.length - 1];
  let category = url[url.length - 2];
  let mainCategory: string;
  if (category === "Incense" || category === "cosmetics") {
    mainCategory = "nonFoods";
  } else {
    mainCategory = "foods";
  }
  const [productState, setProduct] = useState({
    image: "",
    title_ar: "",
    title_en: "",
    price: "",
    category: "",
    id: 0,
  });
  useEffect(() => {
    fetch(`${APIURL}/${mainCategory}?id=${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);
  console.log(id);

  return (
    <div
      className={`${
        i18n.language === "ar" ? "text-end" : "text-start"
      } container m-auto p-10 md:p-20 `}
    >
      <AlertItem refAlert={props.alertRef} />

      <div className=" flex flex-col md:flex-row my-10 justify-center items-center gap-10 ">
        <img
          src={productState.image}
          alt=""
          className="md:h-72 h-full lg:h-96 w-full flex-1"
        />
        <div className="right md:w-[42%] flex flex-col gap-5">
          <p className="text-[1.5em]">
            {productState.title_en}-{productState.title_ar}
          </p>
          <p>
            {t("le") + " "}
            {productState.price}
          </p>
          <div className="flex gap-5 rounded-full my-2 border border-gray-500 w-fit p-2 px-5">
            <button
              onClick={() => {
                if (counter > 0) {
                  setCounter((prev) => prev - 1);
                }
              }}
            >
              -
            </button>
            <span>{counter}</span>
            <button
              onClick={() => {
                setCounter((prev) => prev + 1);
              }}
            >
              +
            </button>
          </div>
          <button
            onClick={() => {
              dispatch({ type: "ADD_TO_BASKET", item: productState });
              console.log(props.alertRef.current);

              props.alertRef.current.classList.remove("hidden");
              props.alertRef.current.classList.add("bg-green-500");
              props.alertRef.current.innerHTML = t("alertAddedToCart");
            }}
            className="border w-full px-5 py-2 rounded-full border-orange-500"
          >
            {t("addCart")}
          </button>
          <button
            onClick={() => {}}
            className="border w-full px-5 py-2 rounded-full bg-orange-500 mt-2"
          >
            {t("buyNow")}
          </button>
        </div>
      </div>
      <div className="">
        <h3 className="text-2xl capitalize mt-3">{t("mayLike")}</h3>
        <MayLikeCard
          id={productState.id}
          mainCategory={mainCategory}
          subCategoy={productState.category}
        />
      </div>
    </div>
  );
};
export default ProductDetails;
