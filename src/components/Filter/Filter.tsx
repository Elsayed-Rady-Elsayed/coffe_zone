import React, { useState } from "react";
import BasicMenu from "../DropDown/DropDown";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../store/context";
import { APIURL } from "../../utils/constants";
import Hooks from "./Hooks";

type Props = {};

const Filter = (props: Props) => {
  const {
    t,
    i18n,
    dispatch,
    product,
    from,
    setFrom,
    to,
    setTo,
    newProducts,
    setNewProducts,
    data,
  } = Hooks();
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
              <div className="p-3 flex gap-4 px-5 hover:bg-gray-200">
                <input
                  onChange={(v) => {
                    if (v.target.checked) {
                      dispatch({
                        type: "SET_PRODUCTS",
                        product: data.data.filter((el: any) => {
                          return el.availablility;
                        }),
                      });
                    } else {
                      setNewProducts(data.data);
                      dispatch({ type: "SET_PRODUCTS", product: newProducts });
                    }
                  }}
                  name="avalilability"
                  type="radio"
                  id="inStock"
                />
                <label htmlFor="inStock">{t("inStock")}</label>
              </div>
              <div className="p-3 flex gap-4 px-5 hover:bg-gray-200">
                <input
                  onChange={(v) => {
                    if (v.target.checked) {
                      dispatch({
                        type: "SET_PRODUCTS",
                        product: data.data.filter((el: any) => {
                          return !el.availablility;
                        }),
                      });
                    } else {
                      dispatch({
                        type: "SET_PRODUCTS",
                        product: data.data,
                      });
                    }
                  }}
                  type="radio"
                  name="avalilability"
                  id="outstock"
                />
                <label htmlFor="outstock">{t("outStock")}</label>
              </div>
              <div className="p-3 flex gap-4 px-5 hover:bg-gray-200">
                <input
                  onChange={(v) => {
                    if (v.target.checked) {
                      dispatch({
                        type: "SET_PRODUCTS",
                        product: data.data,
                      });
                    }
                  }}
                  name="avalilability"
                  type="radio"
                  id="both"
                />
                <label htmlFor="both">{t("both")}</label>
              </div>
            </form>
          }
        />
        <BasicMenu
          name={t("price")}
          items={
            <div>
              <button
                className="p-2 underline text-orange-600"
                onClick={() => {
                  dispatch({
                    type: "SET_PRODUCTS",
                    product: data.data,
                  });
                }}
              >
                {t("reset")}
              </button>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="flex gap-5 p-2 rounded-lg flex-col md:flex-row"
              >
                <div>
                  <span>{t("le")}</span>
                  <input
                    type="text"
                    className="border ms-2 p-2 rounded-full"
                    placeholder={t("from")}
                    value={from}
                    onChange={(e) => {
                      setFrom(Number(e.target.value));
                    }}
                  />
                </div>
                <div>
                  <span>{t("le")}</span>
                  <input
                    type="text"
                    className="border ms-2 p-2 rounded-full"
                    placeholder={t("to")}
                    value={to}
                    onChange={(e) => {
                      setTo(Number(e.target.value));
                    }}
                  />{" "}
                </div>
                <input
                  type="button"
                  value={t("find")}
                  onClick={() => {
                    dispatch({
                      type: "SET_PRODUCTS",
                      product: data.data.filter((el: any) => {
                        return el.price <= to && el.price >= from;
                      }),
                    });
                  }}
                  className="bg-orange-500 rounded-lg p-1 text-white cursor-pointer"
                />
              </form>
            </div>
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
              <div
                className="p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                {t("reset")}
              </div>
              <div
                className="p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => {
                  setNewProducts(data.data);
                  dispatch({
                    type: "SET_PRODUCTS",
                    product: data.data.sort((el: any, el2: any) => {
                      if (i18n.language === "ar") {
                        if (el.title_ar < el2.title_ar) {
                          return -1;
                        } else if (el.title_ar > el.title_ar) {
                          return 1;
                        } else {
                          return 0;
                        }
                      } else {
                        if (el.title_en < el2.title_en) {
                          return -1;
                        } else if (el.title_en > el.title_en) {
                          return 1;
                        } else {
                          return 0;
                        }
                      }
                    }),
                  });
                }}
              >
                {t("alph")}{" "}
              </div>
              <div
                className="p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => {
                  setNewProducts(data.data);
                  dispatch({
                    type: "SET_PRODUCTS",
                    product: data.data.sort((el: any, el2: any) => {
                      if (i18n.language === "ar") {
                        if (el.title_ar > el2.title_ar) {
                          return -1;
                        } else if (el.title_ar < el.title_ar) {
                          return 1;
                        } else {
                          return 0;
                        }
                      } else {
                        if (el.title_en > el2.title_en) {
                          return -1;
                        } else if (el.title_en < el.title_en) {
                          return 1;
                        } else {
                          return 0;
                        }
                      }
                    }),
                  });
                }}
              >
                {t("revAlpha")}{" "}
              </div>
            </div>
          }
        />
        <p className="hidden md:block">
          {product.length} {t("products")}
        </p>
      </div>
    </div>
  );
};
export default Filter;
