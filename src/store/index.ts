import { configureStore } from "@reduxjs/toolkit";
import modelsReducer from "./slices/modelsSlice";

// store
export const store = configureStore({
  reducer: {
    models: modelsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
