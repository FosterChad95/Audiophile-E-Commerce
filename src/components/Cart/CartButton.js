import classes from "./CartButton.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ReactLogo } from "../../assets/shared/desktop/icon-cart.svg";
const CartButton = () => {
  return (
    <div>
      <Link to="/cart" className={classes.button}>
        <ReactLogo className={classes.logo} />
      </Link>
    </div>
  );
};

export default CartButton;
