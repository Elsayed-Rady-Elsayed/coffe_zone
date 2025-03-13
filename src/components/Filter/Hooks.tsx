import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../store/context";
import { useQuery } from "@tanstack/react-query";
import { APIURL } from "../../utils/constants";

const Hooks = () => {
  const { t, i18n } = useTranslation();
  const { dispatch, product } = useAuth();
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [newProducts, setNewProducts] = useState([]);
  const data = useQuery({
    queryKey: ["foods"],
    queryFn: () =>
      fetch(`${APIURL}/foods`)
        .then((res) => res.json())
        .then((res) => {
          dispatch({ type: "SET_PRODUCTS", product: res });
          return res;
        })
        .catch((e) => {
          console.log(e);
        }),
  });
  const setByAvilable = (v: React.ChangeEvent<HTMLInputElement>) => {
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
  };
  const setByNotAvilable = (v: React.ChangeEvent<HTMLInputElement>) => {
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
  };
  const setByBoth = (v: React.ChangeEvent<HTMLInputElement>) => {
    if (v.target.checked) {
      dispatch({
        type: "SET_PRODUCTS",
        product: data.data,
      });
    }
  };
  const setSort = () => {
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
  };
  const setSortRev = () => {
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
  };
  return {
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
    setByAvilable,
    setByNotAvilable,
    setByBoth,
    setSort,setSortRev
  };
};

export default Hooks;
