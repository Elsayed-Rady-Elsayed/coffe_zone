import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainHeader from "./components/MainHeader";
import Nav from "./components/Nav";
import HomePage from "./views/HomePage";
import Footer from "./components/Footer";
import Contact from "./views/Contact";
import Branches from "./views/Branches";
import ProductDetails from "./views/ProductDetails";

function App() {
  const [category, setCategory] = useState("");
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
  return (
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
            <ProductDetails />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
