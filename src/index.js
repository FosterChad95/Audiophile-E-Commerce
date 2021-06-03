import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./store/CartProvider";
import DataProvider from "./store/DataProvider";

ReactDOM.render(
  <BrowserRouter>
    <ContextProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </ContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
