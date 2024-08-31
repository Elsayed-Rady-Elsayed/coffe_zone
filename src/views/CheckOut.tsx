import React, { useEffect, useState } from "react";
import home from "../assets/home.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/context";
import { getBasketTotal } from "../store/appReducre";
import { APIURL } from "../utils/constants";
import { useTranslation } from "react-i18next";
import AlertItem from "../components/Alert";
import { log } from "console";
type Props = {
  alertRef: any;
};

const CheckOut = (props: Props) => {
  const { t, i18n } = useTranslation();
  const nav = useNavigate();
  const [showErr, setShowErr] = useState(false);
  const { basket, dispatch, user, singleProduct } = useAuth();
  console.log(singleProduct);

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
  return (
    <div className="">
      <AlertItem refAlert={props.alertRef} />
      <div
        className={` text-xl mt-5 flex items-center justify-between p-2 px-3 text-center bg-white z-50 shadow-sm md:shadow-none border-b`}
      >
        <Link to={"/"}>
          <img src={home} className="" alt="" />
        </Link>
        <img
          className="w-20 md:w-36 lg:w-44"
          src="https://hajarafa.com/cdn/shop/files/Haj_arafa_new_logo.png?v=1709123942&width=280"
          alt="logo"
        />
        <span></span>
      </div>
      <div className="content border-b flex md:flex-row flex-col-reverse p-1">
        <div
          className={`left p-2 md:p-9 w-full md:w-1/2 border-e ${
            i18n.language === "ar" ? "text-end" : "text-start"
          }`}
        >
          <form
            onSubmit={(ev) => {
              ev.preventDefault();
            }}
          >
            <h3 className="capitalize text-2xl">{t("checkOutContact")}</h3>
            <input
              name="email"
              value={formDelivery.email}
              onChange={HandleChangeState}
              type="email"
              placeholder={t("checkOutGemail")}
              className={`${
                i18n.language === "ar" ? "text-end" : "text-start"
              } border w-full p-2 rounded-md focus:border-orange-500 outline-none ${
                formDelivery.region === ""
                  ? "border-red-300"
                  : "border-green-200"
              }`}
            />
            <h3 className="capitalize text-2xl mt-6 mb-2">
              {t("checkOutDelivery")}
            </h3>
            <select
              name="region"
              value={formDelivery.region}
              onChange={HandleChangeState}
              className={`${
                i18n.language === "ar" ? "text-end" : "text-start"
              } border w-full p-2 rounded-md focus:border-orange-500 outline-none ${
                formDelivery.region === ""
                  ? "border-red-300"
                  : "border-green-200"
              }`}
              id="region"
            >
              <option value="" disabled selected>
                {t("checkOutCountry")}
              </option>
              <option value="egypt">egypt</option>
            </select>
            <div className="name flex gap-2 mt-2">
              <input
                name="firstname"
                value={formDelivery.firstname}
                onChange={HandleChangeState}
                type="text"
                placeholder={t("checkOutFirstName")}
                className={`${
                  i18n.language === "ar" ? "text-end" : "text-start"
                } border w-full p-2 rounded-md focus:border-orange-500 outline-none ${
                  formDelivery.firstname === ""
                    ? "border-red-300"
                    : "border-green-200"
                }`}
              />
              <input
                name="lastname"
                value={formDelivery.lastname}
                onChange={HandleChangeState}
                type="text"
                placeholder={t("checkOutSecName")}
                className={`${
                  i18n.language === "ar" ? "text-end" : "text-start"
                } border w-full p-2 rounded-md focus:border-orange-500 outline-none ${
                  formDelivery.lastname === ""
                    ? "border-red-300"
                    : "border-green-200"
                }`}
              />
            </div>
            <input
              name="address"
              value={formDelivery.address}
              onChange={HandleChangeState}
              type="text"
              placeholder={t("checkOutAddress")}
              className={`${
                i18n.language === "ar" ? "text-end" : "text-start"
              } border w-full mt-2 p-2 rounded-md focus:border-orange-500 outline-none ${
                formDelivery.address === ""
                  ? "border-red-300"
                  : "border-green-200"
              }`}
            />
            <input
              name="apartment"
              value={formDelivery.apartment}
              onChange={HandleChangeState}
              type="text"
              placeholder={t("checkOutAppart")}
              className={`${
                i18n.language === "ar" ? "text-end" : "text-start"
              } border w-full mt-2 p-2 rounded-md focus:border-orange-500 outline-none ${
                formDelivery.apartment === ""
                  ? "border-red-300"
                  : "border-green-200"
              }`}
            />
            <div className="address flex gap-2 mt-2">
              <input
                name="city"
                value={formDelivery.city}
                onChange={HandleChangeState}
                type="text"
                placeholder={t("checkOutCity")}
                className={`${
                  i18n.language === "ar" ? "text-end" : "text-start"
                } border w-full p-2 rounded-md focus:border-orange-500 outline-none ${
                  formDelivery.city === ""
                    ? "border-red-300"
                    : "border-green-200"
                }`}
              />
              <select
                name="government"
                value={formDelivery.government}
                onChange={HandleChangeState}
                className={`${
                  i18n.language === "ar" ? "text-end" : "text-start"
                } border w-full p-2 rounded-md focus:border-orange-500 outline-none ${
                  formDelivery.government === ""
                    ? "border-red-300"
                    : "border-green-200"
                }`}
                id="GovernMent"
              >
                <option value="" disabled selected>
                  {t("checkOutGove")}
                </option>{" "}
                <option value="qalupia">qalupia</option>
              </select>
              <input
                name="postal"
                value={formDelivery.postal}
                onChange={HandleChangeState}
                type="text"
                placeholder={t("checkOutPostal")}
                className={`${
                  i18n.language === "ar" ? "text-end" : "text-start"
                } border w-full p-2 rounded-md focus:border-orange-500 outline-none ${
                  formDelivery.postal === ""
                    ? "border-red-300"
                    : "border-green-200"
                }`}
              />
            </div>
            <input
              name="phone"
              value={formDelivery.phone}
              onChange={HandleChangeState}
              type="text"
              placeholder={t("checkOutPhone")}
              className={`${
                i18n.language === "ar" ? "text-end" : "text-start"
              } border w-full mt-2 p-2 rounded-md focus:border-orange-500 outline-none ${
                formDelivery.phone === ""
                  ? "border-red-300"
                  : "border-green-200"
              }`}
            />
            <div className="mt-2 flex flex-col border rounded-md">
              <div
                className={`${
                  i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
                } gap-3 p-2 border-b flex`}
              >
                <input
                  name="payment"
                  value={"visa"}
                  onChange={HandleChangeState}
                  type="radio"
                  className="me-3"
                  id="payWithVisa"
                />
                <label htmlFor="payWithVisa">{t("checkOutvisa")}</label>
              </div>

              <div
                className={`gap-3 ${
                  i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
                } p-2 border-b flex`}
              >
                <input
                  type="radio"
                  value={"cod"}
                  onChange={HandleChangeState}
                  className="me-3"
                  name="payment"
                  id="payWithorder"
                />
                <label htmlFor="payWithorder">{t("checkOutcod")}</label>
              </div>
            </div>
            <button
              onClick={() => {
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
                      ? [...user.orders, singleProduct]
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
                    let order = singleProduct.id
                      ? [...user.orders, singleProduct]
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
                  }
                } else {
                  setShowErr(true);
                  props.alertRef.current.classList.remove("hidden");
                  props.alertRef.current.classList.add("bg-red-500");
                  props.alertRef.current.innerHTML =
                    "please enter all your information correctly";
                }
              }}
              className="rounded w-full p-2 mt-5 bg-orange-500 text-white"
            >
              {t("checkOutComplete")}
            </button>
          </form>
        </div>
        <div className="right p-1 md:p-9 md:w-1/2 w-full">
          {singleProduct.id ? (
            <div className="flex gap-3 mb-5">
              <img
                src={singleProduct.image}
                className="rounded-md w-20 border h-20"
                alt=""
              />
              <div className="content w-full flex justify-between items-center">
                <div className="start">
                  <p className="text-sm">
                    {singleProduct.title_en}-{singleProduct.title_ar}
                  </p>
                  <p className="text-xs">{singleProduct.quantity} items</p>
                  <p className="text-xs">10% off on all</p>
                </div>
                <div className="end">
                  <p className="text-xs line-through text-gray-400">
                    EGP{singleProduct.price - singleProduct.price * 0.1}
                  </p>
                  <p className="text-sm">EGP{singleProduct.price}</p>
                </div>
              </div>
            </div>
          ) : (
            userItem.cart.map((el: any, idx: number) => {
              if (el.quantitiy > 0)
                return (
                  <div key={idx} className="flex gap-3 mb-5">
                    <img
                      src={el.image}
                      className="rounded-md w-20 border h-20"
                      alt=""
                    />
                    <div className="content w-full flex justify-between items-center">
                      <div className="start">
                        <p className="text-sm">
                          {el.title_en}-{el.title_ar}
                        </p>
                        <p className="text-xs">{el.quantitiy} items</p>
                        <p className="text-xs">10% off on all</p>
                      </div>
                      <div className="end">
                        <p className="text-xs line-through text-gray-400">
                          EGP{el.price - el.price * 0.1}
                        </p>
                        <p className="text-sm">EGP{el.price}</p>
                      </div>
                    </div>
                  </div>
                );
            })
          )}
          <div className={` mt-5 flex flex-col gap-1`}>
            <div
              className={`sub flex justify-between items-center ${
                i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <p className="capitalize text-sm">{t("subTotal")}</p>
              <p className="text-sm">
                {t("le")}
                {singleProduct.id
                  ? singleProduct.price * singleProduct.quantity
                  : getBasketTotal(userItem.cart)}
              </p>
            </div>
            <div
              className={`shipping flex justify-between items-center
              ${i18n.language === "ar" ? "flex-row-reverse" : "flex-row"}
              `}
            >
              <p className="capitalize text-sm">{t("shipping")}</p>
              <p className="text-sm">{t("le")}50</p>
            </div>
            <div
              className={`total flex justify-between items-center ${
                i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <p className="capitalize text-md font-bold">{t("total")}</p>
              <p className="text-md font-bold">
                {t("le")}
                {singleProduct.id
                  ? singleProduct.price * singleProduct.quantity + 50
                  : getBasketTotal(userItem.cart) + 50}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckOut;
