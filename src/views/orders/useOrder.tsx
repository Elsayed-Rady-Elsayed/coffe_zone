import { useEffect, useState } from "react";
import { useAuth } from "../../store/context";
import { APIURL } from "../../utils/constants";
import { useTranslation } from "react-i18next";

const useOrder = () => {
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
  const canselOrder = async (el: any) => {
    let orders = user.orders.filter((e: any) => {
      return el.orderId !== e.orderId;
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
  };
  return { canselOrder, userOrder, t, i18n, userId };
};

export default useOrder;
