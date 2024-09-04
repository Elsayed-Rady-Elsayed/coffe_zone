import React from "react";
export const initialState = {
  user: {},
  basket: [],
  products: [],
  category: "Shop All",
  singleProduct: {},
};
export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => {
    return amount + item.price * item.quantity;
  }, 0);

const AppReducre = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        singleProduct: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.title,
      };
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.product,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_CART":
      let newBasket = [...state.basket];
      const idx = state.basket.findIndex((item) => {
        return item.id === action.id;
      });
      if (idx >= 0) {
        if (newBasket.length == 1) {
          newBasket = [];
        } else {
          newBasket.splice(idx, 1);
        }
      } else {
        alert("error occured while removing item");
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};
export default AppReducre;
