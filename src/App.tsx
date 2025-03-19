import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader/MainHeader";
import Nav from "./components/Nav/Nav";
import HomePage from "./views/homePage/HomePage";
import Footer from "./components/Footer/Footer";
import Contact from "./views/contact/Contact";
import Branches from "./views/branches/Branches";
import ProductDetails from "./views/productDetails/ProductDetails";
import CheckOut from "./views/checkOut/CheckOut";
import { APIURL } from "./utils/constants";
import { useAuth } from "./store/context";
import SuccessPayment from "./views/successPayment/successPayment";
import Orders from "./views/orders/Orders";
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
import MainPage from "./views/MainPage/MainPage";
import UseApp from "./hooks/UseApp";

function App() {
  const { alertRef, show } = UseApp();
  return show ? (
    <Routes>
      <Route
        path="*"
        element={
          <>
            <h1>404 Not Found page</h1>
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
            <MainPage />
            <Footer />
          </>
        }
      />
      <Route
        path="/ShopAll"
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
        path="/mainPage"
        element={
          <>
            <Header />
            <MainHeader alertRef={alertRef} />
            <Nav />
            <MainPage />
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
