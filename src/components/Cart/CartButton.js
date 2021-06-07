import classes from "./CartButton.module.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ReactLogo } from "../../assets/shared/desktop/icon-cart.svg";
import { CartContext } from "../../store/CartProvider";
import CartModal from "./CartModal";

const CartButton = () => {
  const cartCtx = useContext(CartContext);

  const toggleCartHandler = () => {
    cartCtx.toggleCart();
  };

  return (
    <div>
      <Link className={classes.button} onClick={toggleCartHandler}>
        <ReactLogo className={classes.logo} />
      </Link>
    </div>
  );
};

export default CartButton;
