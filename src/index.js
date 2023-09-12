import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle ";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <GlobalStyle />
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
