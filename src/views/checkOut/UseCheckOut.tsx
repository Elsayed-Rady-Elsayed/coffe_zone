import React, { useEffect, useState } from "react";
import { APIURL } from "../../utils/constants";
import { useAuth } from "../../store/context";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import checkOutTypes from "./checkOutTypes";
const UseCheckOut = (props: checkOutTypes) => {
  const { t, i18n } = useTranslation();
  const [showErr, setShowErr] = useState(false);
  const { dispatch, user, singleProduct } = useAuth();
  const [userItem, setUser] = useState({
    id: "",
    cart: [],
    orders: [],
  });
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    fetch(`${APIURL}/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        dispatch({ type: "SET_USER", payload: data });
      });
  }, [userId]);
  const [formDelivery, setFormDelivery] = useState({
    email: "",
    region: "",
    firstname: "",
    lastname: "",
    address: "",
    apartment: "",
    city: "",
    government: "",
    phone: "",
    postal: "",
    payment: "",
  });
  const HandleChangeState = (ev: any) => {
    const { name, value } = ev.target;
    setFormDelivery((prev) => ({ ...prev, [name]: value }));
  };
  singleProduct.quantity = isNaN(singleProduct.quantity)
    ? 1
    : singleProduct.quantity;
  const onToken = (token: any) => {
    const min = 1000;
    const max = 1000000;
    const randomLargeInteger =
      Math.floor(Math.random() * (max - min + 1)) + min;
    if (token.id) {
      let order = singleProduct.id
        ? [
            ...user.orders,
            {
              ...singleProduct,
              orderId: singleProduct.id + randomLargeInteger,
              userId: userId,
              totalPrice: singleProduct.price * singleProduct.quantity + 50,
              date: Date(),
            },
          ]
        : [...user.orders, ...user.cart];
      fetch(`${APIURL}/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: user.id,
          cart: user.cart,
          orders: order,
        }),
      }).then((res) => {
        if (!singleProduct.id) {
          fetch(`${APIURL}/users/${userId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: user.id,
              cart: [],
              orders: order,
            }),
          });
        }
        window.location.replace("/successPay");
      });
      // window.location.replace("/");
    }
    console.log(token);
  };
  const HandleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    await emailjs
      .send(
        "service_h1rucpg",
        "template_u7odrdv",
        {
          to_email: formDelivery.email,
          to_name: formDelivery.firstname,
          from_name: "coffee store",
          message: `Hello,${formDelivery.firstname} \n order created successfully to the address ${formDelivery.address},${formDelivery.city},${formDelivery.government},${formDelivery.region}`,
          reply_to: formDelivery.email,
        },
        "QnZR0Tpt9Rw3rl_sw"
      )
      .then((res) => {
        console.log(res);
      });
    if (formDelivery.payment === "cod") {
      window.location.replace("/");
    }
  };
  const checkOut = () => {
    const min = 1000;
    const max = 1000000;
    const randomLargeInteger =
      Math.floor(Math.random() * (max - min + 1)) + min;
    if (
      formDelivery.address &&
      formDelivery.apartment &&
      formDelivery.city &&
      formDelivery.email &&
      formDelivery.firstname &&
      formDelivery.government &&
      formDelivery.lastname &&
      formDelivery.phone &&
      formDelivery.postal &&
      formDelivery.region &&
      formDelivery.payment
    ) {
      setShowErr(false);
      if (formDelivery.payment === "cod") {
        let order = singleProduct.id
          ? [
              ...user.orders,
              {
                ...singleProduct,
                orderId: singleProduct.id + randomLargeInteger,
                userId: userId,
                totalPrice: singleProduct.price * singleProduct.quantity + 50,
                date: Date(),
              },
            ]
          : [...user.orders, ...user.cart];
        fetch(`${APIURL}/users/${userId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: user.id,
            cart: user.cart,
            orders: order,
          }),
        }).then((res) => {
          if (!singleProduct.id) {
            fetch(`${APIURL}/users/${userId}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: user.id,
                cart: [],
                orders: order,
              }),
            });
          }
          window.location.replace("/successPay");
        });
      } else if (formDelivery.payment === "visa") {
      }
    } else {
      setShowErr(true);
      props.alertRef.current.classList.remove("hidden");
      props.alertRef.current.classList.add("bg-red-500");
      props.alertRef.current.innerHTML =
        "please enter all your information correctly";
    }
  };
  return {
    userItem,
    formDelivery,
    HandleChangeState,
    onToken,
    showErr,
    setShowErr,
    t,
    i18n,
    singleProduct,
    user,
    userId,
    HandleSubmit,
    checkOut,
  };
};

export default UseCheckOut;
