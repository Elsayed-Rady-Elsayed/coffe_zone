import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../store/context";
import { useQuery } from "@tanstack/react-query";
import { APIURL } from "../../utils/constants";
import { SearchProps } from "./SearchTypes";

const Hooks = () => {
  const { t, i18n } = useTranslation();
  const [search, setSearch] = useState("");
  const { dispatch, product } = useAuth();
  const SavedProducts = product;
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
  const EndSearch = (props: SearchProps) => {
    props.refinp.current?.classList.add("hidden");
    dispatch({ type: "SET_PRODUCTS", product: data.data });
  };

  const startSearch = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(ev.target.value);
    dispatch({
      type: "SET_PRODUCTS",
      product: data.data.filter((el: any) => {
        return (
          el.title_en.toLowerCase().includes(ev.target.value.toLowerCase()) ||
          el.title_ar.toLowerCase().includes(ev.target.value.toLowerCase())
        );
      }),
    });
  };

  return {
    t,
    i18n,
    search,
    setSearch,
    SavedProducts,
    data,
    dispatch,
    EndSearch,
    startSearch,
  };
};

export default Hooks;
