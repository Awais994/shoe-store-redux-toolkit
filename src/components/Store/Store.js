import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/ProductSlices";
import variableReducer from "./slices/TotalProduct";
import cartReducer from "./slices/CartSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    variable: variableReducer,
    cart: cartReducer,
  },
});

export default store;
