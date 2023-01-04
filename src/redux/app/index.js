import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  email: "",
  password: "",
  firstName: "",
  lastName: "",
};
const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    requestStart: (state) => {
      state.loading = true;
    },
    requestCompleted: (state) => {
      state.loading = false;
    },
    getEmail: (state, { payload }) => {
      state.email = payload;
    },
    getPassword: (state, { payload }) => {
      state.password = payload;
    },
    getFirstName: (state, { payload }) => {
      state.firstName = payload;
    },
    getlastName: (state, { payload }) => {
      state.lastName = payload;
    },
  },
});
export const {
  requestStart,
  requestCompleted,
  getEmail,
  getPassword,
  getFirstName,
  getlastName,
} = appReducer.actions;

export const selectEmial = (state) => state.app.email;

export default appReducer.reducer;
