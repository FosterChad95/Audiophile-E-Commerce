import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Headphones from "./pages/Headphones/Headphones";
import Home from "./pages/Home/Home";
import Speakers from "./pages/Speakers/Speakers";
import Earphones from "./pages/Earphones/Earphones";
import classes from "./App.module.css";
import Checkout from "./pages/Checkout/Checkout";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { DataContext } from "./store/DataProvider";

const App = () => {
  const dataCtx = useContext(DataContext);

  return (
    <div className={classes.app}>
      <Switch>
        <Route path="/product-detail/:productId">
          <ProductDetail product={dataCtx.name} />
        </Route>
        <Route path="/headphones">
          <Headphones />
        </Route>
        <Route path="/speakers">
          <Speakers />
        </Route>
        <Route path="/earphones">
          <Earphones />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
