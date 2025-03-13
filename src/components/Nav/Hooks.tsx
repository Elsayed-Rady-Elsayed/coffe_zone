import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../store/context";
import { APIURL } from "../../utils/constants";

const Hooks = () => {
    const { t, i18n } = useTranslation();
      const [category, setCategory] = useState("foods");
      const { dispatch, user, basket } = useAuth();
      const userId = localStorage.getItem("userId");
      const [orderNum, setOrderNum] = useState(0);
      useEffect(() => {
        if (userId) {
          fetch(`${APIURL}/users/${userId}`)
            .then((res) => res.json())
            .then((data) => {
              setOrderNum(data.orders.length);
            });
        }
      }, []);
    
      useEffect(() => {
        fetch(`${APIURL}/${category}`)
          .then((res) => res.json())
          .then((res) => {
            dispatch({ type: "SET_PRODUCTS", product: res });
            return res;
          })
          .catch((e) => {
            console.log(e);
          });
      }, [category]);
  return {t, i18n, category, setCategory, dispatch, user, basket, userId, orderNum, setOrderNum};
};

export default Hooks;
