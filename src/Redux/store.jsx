import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./reducer";

export const store = configureStore({
  reducer: {
    note: noteReducer,
  },
});

export default store;
