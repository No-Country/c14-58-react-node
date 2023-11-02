import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { global, reset } from "./assets/globals";
import { Global } from "@emotion/react";

import { Provider } from "react-redux";
import store from "./redux/store.js";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <Global styles={reset} />
      <Global styles={global} />
      <App />
    </Provider>
  </>
);
