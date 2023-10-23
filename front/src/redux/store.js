import { configureStore } from "@reduxjs/toolkit";
import petsReducer from "./slices/pets";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    pets: petsReducer,
  },
  middleware: [thunk],
});

export default store;
