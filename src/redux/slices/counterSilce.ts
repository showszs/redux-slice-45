import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state, action) => {
      state.count -= action.payload;
    },
    incrementAsync: () => {},
    decrementAsync: () => {},
  },
});

export const { increment, decrement, incrementAsync, decrementAsync } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
