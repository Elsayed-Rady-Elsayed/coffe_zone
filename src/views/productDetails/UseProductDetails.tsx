import React, { useEffect, useRef, useState } from "react";
import { APIURL } from "../../utils/constants";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../store/context";
import { productDetailsTypes } from "./productDetailsType";

const UseProductDetails = (props: productDetailsTypes) => {
  const { dispatch, basket, user, singleProduct } = useAuth();
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
    category: "",
    id: 0,
    quantity: 1,
  });
  useEffect(() => {
    fetch(`${APIURL}/${mainCategory}?id=${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);
  let isExist: boolean;
  const ref = useRef<any>(null);
  // useEffect(() => {
  //   fetch(`${APIURL}/users/${user.id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       data.cart.forEach((el: any) => {
  //         if (el.id == ref.current?.dataset.id) {
  //           console.log("ok");

  //           isExist = true;
  //         }
  //       });
  //       if (!isExist) {
  //         fetch(`${APIURL}/users/${user.id}`, {
  //           method: "PUT",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             id: user.id,
  //             cart: [{ ...productState, quantity: counter }, ...user.cart],
  //             orders: [...user.orders],
  //           }),
  //         });
  //         setTimeout(() => {
  //           window.location.href = `/`;
  //         }, 1000);
  //         props.alertRef.current.classList.remove("hidden");
  //         props.alertRef.current.classList.add("bg-green-500");
  //         props.alertRef.current.innerHTML = t("alertAddedToCart");
  //       }
  //     });
  // }, [user]);
  const addToCart = () => {
    fetch(`${APIURL}/users/${user.id}`)
      .then((res) => res.json())
      .then((data) => {
        data.cart.forEach((el: any) => {
          if (el.id == ref.current?.dataset.id) {
            console.log("ok");

            isExist = true;
          }
        });
        if (!isExist) {
          dispatch({
            type: "ADD_TO_BASKET",
            item: productState,
          });

          fetch(`${APIURL}/users/${user.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: user.id,
              cart: [{ ...productState, quantity: counter }, ...user.cart],
              orders: [...user.orders],
            }),
          });
          setTimeout(() => {
            window.location.href = `/`;
          }, 1000);
          props.alertRef.current.classList.remove("hidden");
          props.alertRef.current.classList.add("bg-green-500");
          props.alertRef.current.innerHTML = t("alertAddedToCart");
        } else {
          props.alertRef.current.classList.remove("hidden");
          props.alertRef.current.classList.add("bg-green-500");
          props.alertRef.current.innerHTML = t("alertExistInCart");
          setTimeout(() => {
            props.alertRef.current.classList.add("hidden");
          }, 1000);
        }
      });
  };
  const imag = useRef<HTMLDivElement>(null);
  const showImage = () => {
    imag.current?.classList.remove("hidden");
  };
  const hideImage = () => {
    imag.current?.classList.add("hidden");
  };
  return {
    addToCart,
    productState,
    counter,
    setCounter,
    ref,
    setProduct,
    t,
    dispatch,
    mainCategory,
    imag,
    showImage,
    hideImage,
  };
};

export default UseProductDetails;
