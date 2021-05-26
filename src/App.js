import React from "react";
import { Switch, Route } from "react-router-dom";
import Headphones from "./pages/Headphones/Headphones";
import Home from "./pages/Home/Home";
import Speakers from "./pages/Speakers/Speakers";
import Earphones from "./pages/Earphones/Earphones";
import classes from "./App.module.css";
import Cart from "./pages/Cart/Cart";

const App = () => {
  return (
    <div className={classes.app}>
      <Switch>
        <Route path="/headphones">
          <Headphones />
        </Route>
        <Route path="/speakers">
          <Speakers />
        </Route>
        <Route path="/earphones">
          <Earphones />
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
