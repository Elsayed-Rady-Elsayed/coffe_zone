import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { SlHandbag } from "react-icons/sl";
import { useAuth } from "../store/context";
import { useTranslation } from "react-i18next";
import { getBasketTotal } from "../store/appReducre";
import cart from "../assets/shopping_cart (1).png";
import { Link } from "react-router-dom";
import { APIURL } from "../utils/constants";
import { useEffect } from "react";
type Anchor = "top" | "left" | "bottom" | "right";
type props = {
  alertRef: any;
};
export default function Drawer(props: props) {
  const [counter, setCounter] = React.useState(1);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  const { basket, user, dispatch } = useAuth();
  const { t, i18n } = useTranslation();
  const [basketData, setBasket] = React.useState<any>({
    id: "",
    cart: [],
    orders: [],
  });
  useEffect(() => {
    fetch(`${APIURL}/users/${user.id}`)
      .then((res) => res.json())
      .then((data) => {
        setBasket(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [user]);

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <p className="p-2">Your Cart</p>
      <List>
        {basketData.cart.map((el: any, idx: number) => {
          return (
            <div key={idx} className="flex mb-5">
              <Link
                className="w-24 h-20"
                to={`/productDetails/${el.category}/${el.id}`}
              >
                <img src={el.image} alt="" className="w-24 h-20" />
              </Link>
              <div className="info text-sm flex-1">
                <p>{el.title_en + "-" + el.title_ar}</p>
                <p>
                  {t("le") + " "}
                  {el.price}
                </p>
                <div className="flex gap-5 rounded-full my-2 border border-gray-500 w-fit p-2 px-4">
                  <button
                    onClick={() => {
                      if (basketData.cart[idx].quantity > 0) {
                        setCounter((prev) => prev - 1);
                        basketData.cart[idx].quantity =
                          basketData.cart[idx].quantity - 1;
                        fetch(`${APIURL}/users/${user.id}`, {
                          method: "PUT",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(basketData),
                        });
                      }
                    }}
                  >
                    -
                  </button>
                  <span>{el.quantity}</span>
                  <button
                    onClick={() => {
                      setCounter((prev) => prev + 1);
                      basketData.cart[idx].quantity =
                        basketData.cart[idx].quantity + 1;
                      fetch(`${APIURL}/users/${user.id}`, {
                        method: "PUT",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(basketData),
                      });
                    }}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => {
                    //dispatch({ type: "REMOVE_FROM_CART", id: el.id });
                    fetch(`${APIURL}/users/${user.id}`, {
                      method: "PUT",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        id: user.id,
                        cart: user.cart.filter((i: any) => {
                          return el.id != i.id;
                        }),
                        orders: user.orders,
                      }),
                    });
                    window.location.href = "/";
                    props.alertRef.current?.classList.remove("hidden");
                    props.alertRef.current?.classList.add("bg-green-500");
                    props.alertRef.current.innerHTML = t("removeItemFromCart");
                  }}
                  className="border px-5 py-1 rounded-full border-red-500"
                >
                  {t("removeCart")}
                </button>
              </div>
            </div>
          );
        })}
      </List>
    </Box>
  );
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
            {/* <SlHandbag /> */}
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
