import { configureStore, createSlice } from "@reduxjs/toolkit";
import modelsReducer from "./slices/modelsSlice";

// slice (State + actions + reducers)
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// action export
export const { increment, decrement, reset } = counterSlice.actions;

// store
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    models: modelsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
