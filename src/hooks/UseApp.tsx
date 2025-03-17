import React, { useEffect, useRef, useState } from "react";
import { APIURL } from "../utils/constants";
import { useAuth } from "../store/context";
import { useTranslation } from "react-i18next";

const UseApp = () => {
  const alertRef = useRef<any>();
  const { i18n } = useTranslation();
  if (window.localStorage.getItem("dark") === "true") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  useEffect(() => {
    if (window.localStorage.getItem("lang")) {
      window.localStorage.getItem("lang") === "ar"
        ? i18n.changeLanguage("ar")
        : i18n.changeLanguage("en");
    }
  }, []);
  const userId = localStorage.getItem("userId");
  const { dispatch } = useAuth();
  useEffect(() => {
    if (!userId) {
      fetch("https://api.ipify.org?format=json")
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("userId", data.ip);
          const dataFetch = {
            id: data.ip,
            cart: [],
            orders: [],
          };
          dispatch({ type: "SET_USER", payload: dataFetch });
          fetch(`${APIURL}/users`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(dataFetch),
          })
            .then((res) => console.log(res.json()))
            .catch((e) => {
              console.log(e);
            });
        });
    } else {
      fetch(`${APIURL}/users/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: "SET_USER", payload: data });
        });
    }
  }, []);
  let [show, setShow] = useState(false);
  setTimeout(() => {
    setShow(true);
  }, 1000);
  return { alertRef, show };
};

export default UseApp;
