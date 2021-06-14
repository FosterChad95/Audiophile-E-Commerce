import React, { useContext } from "react";
import { CartContext } from "../../store/CartProvider";
import { firstWord } from "../../helpers/helpers";
import classes from "./Summary.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

const Summary = ({ onButtonActive, onProcessing }) => {
  const cartCtx = useContext(CartContext);

  const shippingPrice = (cartCtx.totalPrice / 10).toFixed(0);

  return (
    <>
      <div className={classes.summary}>
        <h1>Summary</h1>
        <div>
          {cartCtx.items.map((cartItem) => (
            <div className={classes.items} key={cartItem.id}>
              <img src={cartItem.image.desktop} alt={cartItem.name} />
              <div>
                <h4>{firstWord(cartItem.name)}</h4>
                <p>{`$ ${cartItem.price}`}</p>
              </div>
              <div className={classes.toggles}>
                <div className={classes.amount}>
                  <h5>{`X ${cartItem.amount}`}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={classes.costs}>
          <div className={classes.total}>
            <p>TOTAL</p>
            <h3>{`$ ${cartCtx.totalPrice}`}</h3>
          </div>
          <div className={classes.shipping}>
            <p>SHIPPING</p>
            <h3>
              {cartCtx.totalPrice > 1000 ? `$ ${0}` : `$ ${shippingPrice}`}
            </h3>
          </div>
          <div className={classes.grand}>
            <p>Grand TOTAL</p>
            <h3>{`$ ${cartCtx.totalPrice + +shippingPrice}`}</h3>
          </div>
        </div>
        {onProcessing ? (
          <LoadingSpinner />
        ) : (
          <button
            className={classes.checkoutBtn}
            disabled={onButtonActive}
            form="checkout"
            type="submit"
          >
            Continue
          </button>
        )}
      </div>
    </>
  );
};

export default Summary;
