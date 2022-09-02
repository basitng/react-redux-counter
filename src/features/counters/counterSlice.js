import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  initialState,
  name: "Counter",
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count <= 0) {
        state.count = 0;
        return;
      }
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByValue: (state, action) => {
      state.count += action.payload;
    },
    decrementByValue: (state, action) => {
      if (state.count <= 0) {
        state.count = 0;
        return;
      }
      state.count -= action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  reset,
  incrementByValue,
  decrementByValue,
} = counterSlice.actions;
export default counterSlice.reducer;
