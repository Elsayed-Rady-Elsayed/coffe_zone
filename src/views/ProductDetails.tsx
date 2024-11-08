import { log } from "console";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../store/context";
import i18n from "../i18n";
import MayLikeCard from "../components/mayLikeCard";
import AlertItem from "../components/Alert";
import { APIURL } from "../utils/constants";
import { Link } from "react-router-dom";

type Props = {
  alertRef: any;
};

const ProductDetails = (props: Props) => {
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
  return (
    <div
      className={`${
        i18n.language === "ar" ? "text-end" : "text-start"
      } container m-auto p-10 md:p-20 dark:text-white`}
    >
      <AlertItem refAlert={props.alertRef} />

      <div className=" flex flex-col md:flex-row my-10 justify-center items-center gap-10 ">
        <img
          src={productState.image}
          alt=""
          className="md:h-72 h-full lg:h-96 w-full flex-1"
        />
        <div className="right md:w-[42%] flex flex-col gap-5">
          <p className="text-[1.5em]">
            {productState.title_en}-{productState.title_ar}
          </p>
          <p>
            {t("le") + " "}
            {productState.price}
          </p>
          <div className="flex gap-5 rounded-full my-2 border border-gray-500 w-fit p-2 px-5">
            <button
              onClick={() => {
                if (counter > 0) {
                  setCounter((prev) => prev - 1);
                  setProduct((prev) => ({ ...prev, quantity: counter }));
                }
              }}
            >
              -
            </button>
            <span>{counter}</span>
            <button
              onClick={() => {
                setCounter((prev) => prev + 1);
                setProduct((prev) => ({ ...prev, quantity: counter }));
              }}
            >
              +
            </button>
          </div>
          <button
            ref={ref}
            data-id={productState.id}
            onClick={async () => {
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
                        cart: [
                          { ...productState, quantity: counter },
                          ...user.cart,
                        ],
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
            }}
            className="border w-full px-5 py-2 rounded-full border-orange-500 "
          >
            {t("addCart")}
          </button>
          <Link
            to={"/checkOut"}
            onClick={() => {
              dispatch({ type: "SET_SINGLE_PRODUCT", payload: productState });
            }}
            className="border text-center w-full px-5 py-2 rounded-full bg-orange-500 mt-2 outline-none border-none"
          >
            {t("buyNow")}
          </Link>
        </div>
      </div>
      <div className="">
        <h3 className="text-2xl capitalize mt-3">{t("mayLike")}</h3>
        <MayLikeCard
          id={productState.id}
          mainCategory={mainCategory}
          subCategoy={productState.category}
        />
      </div>
    </div>
  );
};
export default ProductDetails;
