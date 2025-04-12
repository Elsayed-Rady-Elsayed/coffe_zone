import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "productSlice",
  initialState: { product: [] },
  reducers: {
    SET_PRODUCTS: (state, action) => {
      // state.product = action.product;
    },
  },
});
