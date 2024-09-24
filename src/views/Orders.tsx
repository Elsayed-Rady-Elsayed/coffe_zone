import React, { ReactElement, useEffect, useState } from "react";
import { useAuth } from "../store/context";
import { useTranslation } from "react-i18next";
import { APIURL } from "../utils/constants";

type Props = {};

const Orders = (props: Props) => {
  const { user, dispatch } = useAuth();
  const [userOrder, setUserOrders] = useState([]);
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    if (userId) {
      fetch(`${APIURL}/users/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          setUserOrders(data.orders);
          dispatch({ type: "SET_USER", payload: data });
        });
    }
  }, []);
  const { t, i18n } = useTranslation();
  const ordersItems =
    userId &&
    userOrder.map((el: any, idx: number) => {
      if (!isNaN(el.price))
        return (
          <div
            key={idx}
            className={`flex flex-col  gap-3 m-2 ${
              i18n.language === "ar"
                ? "md:flex-row-reverse md:justify-start"
                : "md:flex-row"
            } `}
          >
            <img
              className="w-full md:w-40 md:h-40 border rounded-lg"
              src={el.image}
              alt=""
            />
            <div
              className={`flex flex-col gap-1 justify-center ${
                i18n.language === "ar" ? "items-end" : "items-start"
              }`}
            >
              <p className="text-lg font-semibold">
                {el.title_en}-{el.title_ar}
              </p>
              <p className="font-bold">
                {t("le") + " "}
                {el.price * el.quantity}
              </p>
              <p>
                {el.quantity + " "}
                {t("item")}
              </p>
              <button
                className="bg-red-600 p-1 rounded-lg text-white"
                onClick={async () => {
                  let orders = user.orders.filter((e: any) => {
                    return el.id != e.id;
                  });
                  await fetch(`${APIURL}/users/${userId}`, {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      id: user.id,
                      cart: user.cart,
                      orders: orders,
                    }),
                  });
                  window.location.href = "/Orders";
                }}
              >
                cancel order
              </button>
            </div>
          </div>
        );
    });
  return (
    <div className="container m-auto p-2  my-5 dark:text-white ">
      {!userOrder.length ? (
        <div className="text-center mt-5 dark:text-white h-[30vh]">
          No Items
        </div>
      ) : (
        ordersItems
      )}
    </div>
  );
};
export default Orders;
