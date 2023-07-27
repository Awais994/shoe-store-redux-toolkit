
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "info",
  initialState: {
    personalInfo: { firstName: "", lastName: "", email: "" },
    addressInfo: {
      country: "",
      city: "",
      state: "",
      address: "",
    },
  },
  reducers: {
    addInfo: (state, action) => {
      if (action.payload.firstName !== undefined) {
        state.personalInfo = action.payload;
      } else {
        state.addressInfo = action.payload;
      }
    },
    removeInfo: (state) => {
      state = {
        personalInfo: { firstName: "", lastName: "", email: "" },
        addressInfo: {
          country: "",
          city: "",
          state: "",
          address: "",
        },
      };
    },
  },
});

export const { addInfo, removeInfo } = cartSlice.actions;

export default cartSlice.reducer;
