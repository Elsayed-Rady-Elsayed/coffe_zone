import React, { ReactElement, useEffect } from "react";
import { useAuth } from "../store/context";
import { useTranslation } from "react-i18next";
import { APIURL } from "../utils/constants";

type Props = {};

const Orders = (props: Props) => {
  const { user, dispatch } = useAuth();
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    if (userId) {
      fetch(`${APIURL}/users/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: "SET_USER", payload: data });
        });
    }
  }, [userId]);
  const { t, i18n } = useTranslation();
  console.log(user.orders);
  const ordersItems = user.orders.map((el: any) => {
    return (
      <div
        className={`flex flex-col md:flex-row gap-3 ${
          i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
        }`}
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
            {el.price}
          </p>
          <p>
            {el.quantitiy + " "}
            item
          </p>
          <p>
            {t("total") + " "}
            333
            {" " + t("le")}
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className="container m-auto p-2  my-5 dark:text-white">
      {!user.orders ? (
        <div className="text-center mt-5 dark:text-white">No Items</div>
      ) : (
        ordersItems
      )}
    </div>
  );
};
export default Orders;
