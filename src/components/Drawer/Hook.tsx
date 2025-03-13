import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { APIURL } from "../../utils/constants";
import { Link } from "react-router-dom";
import { Anchor, DrawerProps } from "./DrawerType";
import { useAuth } from "../../store/context";
import { useTranslation } from "react-i18next";
import { List } from "@mui/material";

const Hook = (props: DrawerProps) => {
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
    const userId = localStorage.getItem("userId");
    fetch(`${APIURL}/users/${userId}`)
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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 300 }}
      role="presentation"
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
  return { toggleDrawer, list, basketData, counter, state, i18n, t, dispatch };
};

export default Hook;
