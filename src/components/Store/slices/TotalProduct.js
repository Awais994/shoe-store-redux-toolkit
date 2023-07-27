import { createSlice } from "@reduxjs/toolkit";

export const variableSlice = createSlice({
  name: "variables",
  initialState: {
    totalAmount: 0,
    totalProduct: 0,
  },
  reducers: {
    addItems: (state, action) => {
      let num = 0;
      let list = 0;
      if (action.payload.length !== 0) {
                action &&
                  action.payload &&
                  action.payload.length &&
                  action.payload.map((info) => {
                    num += info.price * info.quantity
                    list += info.quantity
                  });
      }
      state.totalAmount = num;
      state.totalProduct = list;
    },
  },
});

export const { addItems } = variableSlice.actions;

export default variableSlice.reducer;
