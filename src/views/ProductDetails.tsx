import { log } from "console";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../store/context";

type Props = {};

const ProductDetails = (props: Props) => {
  const { dispatch, basket } = useAuth();

  const url = window.location.href.split("/");
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
  });
  useEffect(() => {
    fetch(`http://localhost:5000/${mainCategory}?id=${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  console.log(productState);

  return (
    <div className="container m-auto flex flex-col md:flex-row my-10 justify-center items-center gap-10 p-3 md:p-0">
      <img
        src={productState.image}
        alt=""
        className="md:h-72 h-full lg:h-96 w-full md:w-72"
      />
      <div className="right">
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
  );
};
export default ProductDetails;
