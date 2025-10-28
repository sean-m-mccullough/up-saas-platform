import { configureStore } from "@reduxjs/toolkit";

import Products from "../features/products/productSlice";


export const store = configureStore({
  reducer: {
    products: Products,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;