import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Headphones from "./pages/Headphones/Headphones";
import Home from "./pages/Home/Home";
import Speakers from "./pages/Speakers/Speakers";
import Earphones from "./pages/Earphones/Earphones";
import classes from "./App.module.css";
import Cart from "./pages/Cart/Cart";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { ContextProvider } from "./store/CartProvider";

const App = () => {
  const [name, setName] = useState("");

  const buttonClickHandler = (e) => {
    setName(e);
  };

  return (
    <div className={classes.app}>
      <Switch>
        <Route path="/product-detail/:productId">
          <ContextProvider>
            <ProductDetail product={name} />
          </ContextProvider>
        </Route>
        <Route path="/headphones">
          <Headphones headphoneData={buttonClickHandler} />
        </Route>
        <Route path="/speakers">
          <Speakers speakerData={buttonClickHandler} />
        </Route>
        <Route path="/earphones">
          <Earphones earphoneData={buttonClickHandler} />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
