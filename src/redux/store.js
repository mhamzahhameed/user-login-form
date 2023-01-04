import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./app/index";
const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default store;
