import React, { useState } from "react";
import logo from "./logo.svg";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainHeader from "./components/MainHeader";
import Nav from "./components/Nav";
import HomePage from "./views/HomePage";
import Footer from "./components/Footer";

function App() {
  const [category, setCategory] = useState("foods");
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
            <MainHeader />
            <Nav />
            <HomePage />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
