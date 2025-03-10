import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader/MainHeader";
import Nav from "./components/Nav";
import HomePage from "./views/HomePage";
import Footer from "./components/Footer";
import Contact from "./views/Contact";
import Branches from "./views/Branches";
import ProductDetails from "./views/ProductDetails";
import CheckOut from "./views/CheckOut";
import { APIURL } from "./utils/constants";
import { useAuth } from "./store/context";
import SuccessPayment from "./views/successPayment";
import Orders from "./views/Orders";
import { loadStripe } from "@stripe/stripe-js";
import { ToastContainer } from "react-toastify";
import Main from "./dashboard/Main";
import Layout from "./dashboard/Layout";
import Users from "./dashboard/view/Users";
import Products from "./dashboard/view/Products";
import OrdersDash from "./dashboard/view/Orders";
import Details from "./dashboard/view/Details";
import UsersList from "./dashboard/view/UsersList";
import ProductList from "./dashboard/view/ProductList";
import OrdersList from "./dashboard/view/OrdersList";
import UserDetails from "./dashboard/view/UserDetails";
import ProductDetailsDash from "./dashboard/view/ProductDetails";
import AddProduct from "./dashboard/view/AddProduct";
import { Header } from "./components";

function App() {
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
  return show ? (
    <Routes>
      <Route
        path="*"
        element={
          <>
            <h1>404 Not Found</h1>
          </>
        }
      />
      <Route
        path="/"
        element={
          <>
            <Header />
            <MainHeader alertRef={alertRef} />
            <Nav />
            <HomePage alertRef={alertRef} />
            <Footer />
          </>
        }
      />
      <Route path="/dashborad" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="ordersdash" element={<OrdersDash />}>
          <Route path="details" element={<Details />} />
          <Route index element={<OrdersList />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path="userDetails" element={<UserDetails />} />
          <Route index element={<UsersList />} />
        </Route>
        <Route path="products" element={<Products />}>
          <Route
            path="productDetailsdashborad"
            element={<ProductDetailsDash />}
          />
          <Route path="addProductDash" element={<AddProduct />} />
          <Route index element={<ProductList />} />
        </Route>
      </Route>
      <Route
        path="/:category"
        element={
          <>
            <Header />
            <MainHeader alertRef={alertRef} />
            <Nav />
            <HomePage alertRef={alertRef} />
            <Footer />
          </>
        }
      />
      <Route
        path="/contact"
        element={
          <>
            <Header />
            <MainHeader alertRef={alertRef} />
            <Nav />
            <Contact />
            <Footer />
          </>
        }
      />
      <Route
        path="/branches"
        element={
          <>
            <Header />
            <MainHeader alertRef={alertRef} />
            <Nav />
            <Branches />
            <Footer />
          </>
        }
      />
      <Route
        path="/productDetails/:category/:id"
        element={
          <>
            <Header />
            <MainHeader alertRef={alertRef} />
            <Nav />
            <ProductDetails alertRef={alertRef} />
            <Footer />
          </>
        }
      />
      <Route
        path="/checkOut"
        element={
          <>
            <CheckOut alertRef={alertRef} />
          </>
        }
      />
      <Route
        path="/successPay"
        element={
          <>
            <SuccessPayment />
          </>
        }
      />
      <Route
        path="/Orders"
        element={
          <>
            <Header />
            <MainHeader alertRef={alertRef} />
            <Nav />
            <Orders />
            <Footer />
          </>
        }
      />
    </Routes>
  ) : (
    <div className="animate-spin w-5 h-5 border border-s-orange-500 border-t-orange-500 border-b-orange-500 border-e-transparent rounded-full absolute left-1/2 top-1/2"></div>
  );
}

export default App;
