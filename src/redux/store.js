import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./features/authSlice/authSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
});
