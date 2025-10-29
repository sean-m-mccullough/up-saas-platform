import { configureStore } from "@reduxjs/toolkit";

import Products from "../features/products/productSlice";
import Cart from "../features/cart/cartSlice";


export const store = configureStore({
  reducer: {
    products: Products,
    cart: Cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;