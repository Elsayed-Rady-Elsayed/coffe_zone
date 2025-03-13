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
  return {t, i18n, dispatch, product, from, setFrom, to, setTo, newProducts, setNewProducts, data};
};

export default Hooks;
