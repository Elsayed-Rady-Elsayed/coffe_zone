import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { getBasketTotal } from "../../store/appReducre";
import cart from "../../assets/shopping_cart (1).png";
import { Link } from "react-router-dom";
import { DrawerProps } from "./DrawerType";
import Hook from "./Hook";

export default function Drawer(props: DrawerProps) {
  const { toggleDrawer, list, t, basketData, state, i18n, dispatch } =
    Hook(props);
  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <span
            onClick={toggleDrawer(anchor, true)}
            className="cursor-pointer hover:text-2xl dark:text-white relative"
          >
            <span className="absolute -bottom-2 -right-1 dark:text-black dark:bg-white w-4 flex items-center justify-center h-4 text-[11px] rounded-full bg-black text-white">
              {basketData.cart.length}
            </span>
            <img src={cart} alt="" />
          </span>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
            <hr />
            {basketData.cart.length > 0 ? (
              <div className="chekOut p-2 capitalize">
                <div
                  className={`flex justify-between ${
                    i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <span>{t("total")}</span>
                  <span>
                    {t("le")} {getBasketTotal(basketData.cart)}
                  </span>
                </div>
                <Link
                  to={"/checkOut"}
                  onClick={() => {
                    dispatch({ type: "SET_SINGLE_PRODUCT", payload: {} });
                  }}
                  className="w-full block border bg-orange-500 text-center rounded-full p-2 mt-2 border-orange-500"
                >
                  {t("checkOut")}
                </Link>
              </div>
            ) : (
              ""
            )}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
