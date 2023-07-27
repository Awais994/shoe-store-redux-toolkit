import { shoe } from "../../products/shoeList";
import { createSlice } from "@reduxjs/toolkit";

export const prdouctSlice = createSlice({
  name: "products",
  initialState: shoe,
  reducers: {
    addProduct: (state, action) => {
      return state.map((item) => {
        // Find the item
        if (item.id !== action.payload) {
          return item;
        }

        // Add it to the cart
        return {
          ...item,
          added: true,
          quantity: item.quantity + 1,
        };
      });
    },
    removeQuantity: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload) {
          return item;
        }
        return {
          ...item,
          added: item.quantity !== 0 ? true : false,
          quantity: item.quantity - 1,
        };
      });
    },
    removeSingleProduct: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload) {
          return item;
        }
        return {
          ...item,
          added: false,
          quantity: 0,
        };
      });
    },
    removeAllProduct: (state) => {
      return shoe;
    },
    detailAddProduct: (state, action) => {
      return state.map((item) => {
        // Find the item
        if (item.id !== action.payload.id) {
          return item;
        }

        // Add it to the cart
        return {
          ...item,
          added: true,
          quantity: action.payload.quantity,
        };
      });
    },
  },
});

export const {
  addProduct,
  removeSingleProduct,
  removeQuantity,
  removeAllProduct,
  detailAddProduct,
} = prdouctSlice.actions;

export default prdouctSlice.reducer;
