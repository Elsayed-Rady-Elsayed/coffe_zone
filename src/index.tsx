import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./i18n";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalProvider } from "./store/context";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./store/store";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();

root.render(
  <BrowserRouter>
    <div className="dark:bg-stone-900">
      <QueryClientProvider client={queryClient}>
        <GlobalProvider>
          <Provider store={store}>
            <ToastContainer />
            <App />
          </Provider>
        </GlobalProvider>
      </QueryClientProvider>
    </div>
  </BrowserRouter>
);
