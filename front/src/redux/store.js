import { configureStore } from "@reduxjs/toolkit";
import petsReducer from "./slices/pets";
import userReducer from "./slices/user"
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    pets: petsReducer,
    user: userReducer,
  },
  middleware: [thunk],
});

export default store;
