import React, { useState } from "react";
import BasicMenu from "./DropDown";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../store/context";

type Props = {};

const Filter = (props: Props) => {
  const { t, i18n } = useTranslation();
  const { dispatch, product } = useAuth();
  const [newProducts, setNewProducts] = useState([]);
  const data = useQuery({
    queryKey: ["foods"],
    queryFn: () =>
      fetch(`http://localhost:3000/foods`)
        .then((res) => res.json())
        .then((res) => {
          dispatch({ type: "SET_PRODUCTS", product: res });
          return res;
        })
        .catch((e) => {
          console.log(e);
        }),
  });
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
        <BasicMenu
          name={t("avilable")}
          items={
            <form className="rounded-lg">
              <div
                className="p-3 flex gap-4 px-5 hover:bg-gray-200"
                onClick={() => {
                  setNewProducts(
                    product.filter((el: any) => {
                      return el.availablility;
                    })
                  );
                  dispatch({ type: "SET_PRODUCTS", product: newProducts });
                }}
              >
                <input type="checkbox" id="inStock" />
                <label htmlFor="inStock">{t("inStock")}</label>
              </div>
              <div
                className="p-3 flex gap-4 px-5 hover:bg-gray-200"
                onClick={() => {
                  setNewProducts(
                    product.filter((el: any) => {
                      return !el.availablility;
                    })
                  );
                  dispatch({
                    type: "SET_PRODUCTS",
                    product: newProducts,
                  });
                }}
              >
                <input type="checkbox" id="outstock" />
                <label htmlFor="outstock">{t("outStock")}</label>
              </div>
              <div
                className="p-3 flex gap-4 px-5 hover:bg-gray-200"
                onClick={() => {
                  setNewProducts(data.data);
                  dispatch({
                    type: "SET_PRODUCTS",
                    product: newProducts,
                  });
                }}
              >
                <input type="checkbox" id="both" />
                <label htmlFor="both">{t("both")}</label>
              </div>
            </form>
          }
        />
        <BasicMenu
          name={t("price")}
          items={
            <form className="flex gap-5 p-2 rounded-lg flex-col md:flex-row">
              <div>
                <span>{t("le")}</span>
                <input
                  type="text"
                  className="border ms-2 p-2 rounded-full"
                  placeholder={t("from")}
                />
              </div>
              <div>
                <span>{t("le")}</span>
                <input
                  type="text"
                  className="border ms-2 p-2 rounded-full"
                  placeholder={t("to")}
                />{" "}
              </div>
            </form>
          }
        />
      </div>
      <div
        className={`${
          i18n.language === "ar" ? "md:flex-row-reverse" : "md:flex-row"
        } left flex gap-4 text-gray-600 dark:text-white`}
      >
        <span className="text-sm md:text-lg">{t("sortBy")}</span>
        <BasicMenu
          name={t("alph")}
          items={
            <div className="p-1">
              <div className="p-2 cursor-pointer hover:bg-gray-200">
                {t("alph")}{" "}
              </div>
              <div className="p-2 cursor-pointer hover:bg-gray-200">
                {t("revAlpha")}{" "}
              </div>
            </div>
          }
        />
        <p className="hidden md:block">14 {t("products")}</p>
      </div>
    </div>
  );
};
export default Filter;