import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../store/context";
import { useQuery } from "@tanstack/react-query";

type Props = {
  refinp: any;
};

const Search = (props: Props) => {
  const { t, i18n } = useTranslation();
  const [search, setSearch] = useState("");
  const { dispatch, product } = useAuth();
  const SavedProducts = product;
  const data = useQuery({
    queryKey: ["foods"],
    queryFn: () =>
      fetch(`http://localhost:5000/foods`)
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
      className="absolute z-20 bg-white w-[100%] p-5 left-0 shadow-lg hidden dark:text-white dark:bg-stone-800"
      ref={props.refinp}
    >
      <form className="flex gap-10">
        <input
          className="border w-full p-1 rounded-full dark:bg-stone-600"
          type="text"
          value={search}
          onChange={(ev) => {
            setSearch(ev.target.value);
            dispatch({
              type: "SET_PRODUCTS",
              product: data.data.filter((el: any) => {
                return (
                  el.title_en
                    .toLowerCase()
                    .includes(ev.target.value.toLowerCase()) ||
                  el.title_ar
                    .toLowerCase()
                    .includes(ev.target.value.toLowerCase())
                );
              }),
            });
          }}
          placeholder={t("searchPlaceHolder")}
        />
        <span
          className="cursor-pointer p-2"
          onClick={() => {
            props.refinp.current?.classList.add("hidden");
            dispatch({ type: "SET_PRODUCTS", product: data.data });
          }}
        >
          x
        </span>
      </form>
    </div>
  );
};
export default Search;
