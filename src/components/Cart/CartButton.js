import classes from "./CartButton.module.css";
import React from "react";
import { ReactComponent as ReactLogo } from "../../assets/shared/desktop/icon-cart.svg";
const CartButton = () => {
  return (
    <div>
      <button className={classes.button}>
        <ReactLogo className={classes.logo} />
      </button>
    </div>
  );
};

export default CartButton;
