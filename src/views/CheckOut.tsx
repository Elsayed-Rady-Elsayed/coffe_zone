import React, { useEffect, useState } from "react";
import home from "../assets/home.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/context";
import { getBasketTotal } from "../store/appReducre";
import { APIURL } from "../utils/constants";
import { useTranslation } from "react-i18next";
import AlertItem from "../components/Alert/Alert";
import logo from "../assets/Coffee Foundation New.png";
import CheckOutCard from "../components/CheckOut";
import emailjs from "@emailjs/browser";
import StripeCheckout from "react-stripe-checkout";
type Props = {
  alertRef: any;
};

const CheckOut = (props: Props) => {
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
  return (
    <div className="h-[100vh]">
      <AlertItem refAlert={props.alertRef} />
      <div
        className={` text-xl flex items-center justify-between p-2 px-3 text-center bg-white z-50 shadow-sm md:shadow-none border-b dark:border-stone-900 dark:bg-stone-900 dark:text-white`}
      >
        <Link to={"/"}>
          <img src={home} className="" alt="" />
        </Link>
        <img className="w-20 md:w-36 lg:w-44" src={logo} alt="logo" />
        <span></span>
      </div>
      <div className="content border-b flex md:flex-row flex-col-reverse p-1 dark:border-stone-900 dark:bg-stone-900 dark:text-white">
        <div
          className={`left p-2 md:p-9 w-full md:w-1/2 border-e dark:border-stone-900 dark:bg-stone-900 dark:text-white ${
            i18n.language === "ar" ? "text-end" : "text-start"
          }`}
        >
          <form
            onSubmit={async (ev) => {
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
            }}
          >
            <h3 className="capitalize text-2xl">{t("checkOutContact")}</h3>
            <CheckOutInputField
              value={formDelivery.email}
              placeholder={t("checkOutGemail")}
              HandleChangeState={HandleChangeState}
              language={i18n.language}
              region={formDelivery.region}
              name={"email"}
              type={"email"}
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
              } dark:border-gray-300 dark:bg-stone-900 dark:text-white`}
              id="region"
            >
              <option value="" disabled selected>
                {t("checkOutCountry")}
              </option>
              <option value="egypt">egypt</option>
            </select>
            <div className="name flex gap-2 mt-1">
              <CheckOutInputField
                value={formDelivery.firstname}
                placeholder={t("checkOutFirstName")}
                HandleChangeState={HandleChangeState}
                language={i18n.language}
                region={formDelivery.firstname}
                name={"firstname"}
                type={"text"}
              />
              <CheckOutInputField
                value={formDelivery.lastname}
                placeholder={t("checkOutSecName")}
                HandleChangeState={HandleChangeState}
                language={i18n.language}
                region={formDelivery.lastname}
                name={"lastname"}
                type={"text"}
              />
            </div>
            <CheckOutInputField
              value={formDelivery.address}
              placeholder={t("checkOutAddress")}
              HandleChangeState={HandleChangeState}
              language={i18n.language}
              region={formDelivery.lastname}
              name={"address"}
              type={"text"}
            />
            <CheckOutInputField
              value={formDelivery.apartment}
              placeholder={t("checkOutAppart")}
              HandleChangeState={HandleChangeState}
              language={i18n.language}
              region={formDelivery.lastname}
              name={"apartment"}
              type={"text"}
            />
            <div className="address flex gap-2">
              <CheckOutInputField
                value={formDelivery.city}
                placeholder={t("checkOutCity")}
                HandleChangeState={HandleChangeState}
                language={i18n.language}
                region={formDelivery.city}
                name={"city"}
                type={"text"}
              />
              <select
                name="government"
                value={formDelivery.government}
                onChange={HandleChangeState}
                className={`mt-2 ${
                  i18n.language === "ar" ? "text-end" : "text-start"
                } border w-full p-2 rounded-md focus:border-orange-500 outline-none ${
                  formDelivery.government === ""
                    ? "border-red-300"
                    : "border-green-200"
                } dark:border-gray-300 dark:bg-stone-900 dark:text-white`}
                id="GovernMent"
              >
                <option value="" disabled selected>
                  {t("checkOutGove")}
                </option>{" "}
                <option value="qalupia">qalupia</option>
              </select>
              <CheckOutInputField
                value={formDelivery.postal}
                placeholder={t("checkOutPostal")}
                HandleChangeState={HandleChangeState}
                language={i18n.language}
                region={formDelivery.postal}
                name={"postal"}
                type={"text"}
              />
            </div>
            <CheckOutInputField
              value={formDelivery.phone}
              placeholder={t("checkOutPhone")}
              HandleChangeState={HandleChangeState}
              language={i18n.language}
              region={formDelivery.phone}
              name={"phone"}
              type={"text"}
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
              {formDelivery.payment === "visa" ? (
                <StripeCheckout
                  token={onToken}
                  stripeKey="pk_test_51PjqFPGUQ74IbSPH0L2MidoMM1735USQdADG38jT6HjimtYRVdMmgldekh6PXOyJ7Vs8El8x5LLzLVnIHvujNgTf003WWQlQkk"
                  triggerEvent="onClick"
                  name="ادفع الكترونيا لشراء المنتجات المحدده"
                  amount={
                    singleProduct.id
                      ? singleProduct.price * singleProduct.quantity + 50
                      : getBasketTotal(userItem.cart) + 50
                  }
                  currency="EGP"
                  description="بمجرد ان تضغط علي دفع سيتم خصم المبلغ من البطاقه "
                  email={formDelivery.email ? formDelivery.email : ""}
                  label={t("paynow")}
                  // billingAddress={true}
                  // shippingAddress={true}
                  allowRememberMe={true}
                />
              ) : (
                ""
              )}
            </div>
            {formDelivery.payment === "visa" ? (
              ""
            ) : (
              <button
                onClick={() => {
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
                              totalPrice:
                                singleProduct.price * singleProduct.quantity +
                                50,
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
                }}
                className="rounded w-full p-2 mt-5 bg-orange-500 text-white"
              >
                {t("checkOutComplete")}
              </button>
            )}
          </form>
        </div>
        <div className="right p-1 md:p-9 md:w-1/2 w-full">
          {singleProduct.id ? (
            <CheckOutCard
              image={singleProduct.image}
              title_en={singleProduct.title_en}
              title_ar={singleProduct.title_ar}
              quantity={singleProduct.quantity}
              price={singleProduct.price}
            />
          ) : (
            userItem.cart.map((el: any, idx: number) => {
              return (
                <CheckOutCard
                  key={idx}
                  image={el.image}
                  title_en={el.title_en}
                  title_ar={el.title_ar}
                  quantity={el.quantity}
                  price={el.price}
                />
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

const CheckOutInputField = (props: any) => {
  return (
    <input
      name={props.name}
      value={props.value}
      onChange={props.HandleChangeState}
      type={props.type}
      placeholder={props.placeholder}
      className={`mt-2 ${
        props.language === "ar" ? "text-end" : "text-start"
      } border w-full p-2 rounded-md focus:border-orange-500 outline-none ${
        props.region === "" ? "border-red-300" : "border-green-200"
      } dark:border-gray-300 dark:bg-stone-900 dark:text-white`}
    />
  );
};

export default CheckOut;
