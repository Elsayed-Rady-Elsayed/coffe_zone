import React, { useEffect, useRef } from "react";
import { APIURL } from "../../utils/constants";
import { useAuth } from "../../store/context";
import { useTranslation } from "react-i18next";

const Hook = () => {
  const { t } = useTranslation();
  const { dispatch, basket, user } = useAuth();
  let isExist: boolean = false;
  const userId = localStorage.getItem("userId");

  const ref = useRef<any>(null);
  useEffect(() => {
    fetch(`${APIURL}/users/${user.id}`)
      .then((res) => res.json())
      .then((data) => {
        data.cart.forEach((el: any) => {
          if (el.id == ref.current?.dataset.id) {
            isExist = true;
          }
        });
        if (!isExist) {
          fetch(`${APIURL}/users/${user.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: user.id,
              cart: [...basket, ...user.cart],
              orders: user.orders,
            }),
          });
        }
      });
  }, [basket]);

  const addToCart = (props: any) => {
    const min = 1000;
    const max = 1000000;
    const randomLargeInteger =
      Math.floor(Math.random() * (max - min + 1)) + min;
    if (props.outStock) {
      if (!isExist) {
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            ...props.item,
            odrderId: randomLargeInteger,
            userId: userId,
            quantity: 1,
            date: Date(),
          },
        });
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
        props.refAlert.current.classList.remove("hidden");
        props.refAlert.current.classList.add("bg-green-500");
        props.refAlert.current.innerHTML = t("alertAddedToCart");
      } else {
        props.refAlert.current.classList.remove("hidden");
        props.refAlert.current.classList.add("bg-green-500");
        props.refAlert.current.innerHTML = t("alertExistInCart");
        setTimeout(() => {
          props.refAlert.current.classList.add("hidden");
        }, 1000);
      }
    }
  };
  return { t, user, basket, ref, addToCart };
};

export default Hook;
