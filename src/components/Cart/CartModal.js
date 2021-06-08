import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./CartModal.module.css";
import { CartContext } from "../../store/CartProvider";
import NumberInput from "../../components/UI/NumberInput";
import Button from "../UI/Button";

const firstWord = (name) => {
  const ind = name.indexOf(" ");
  return name.substring(0, ind);
};

const BackDrop = () => {
  const cartCtx = useContext(CartContext);

  return <div onClick={cartCtx.toggleCart} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const CartModal = () => {
  const cartCtx = useContext(CartContext);
  const storage = JSON.parse(localStorage.getItem("cartItems"));

  console.log(storage);

  const submitCartHandler = () => {};

  if (cartCtx.items.length === 0) {
    return (
      <>
        <BackDrop />
        <ModalOverlay>
          <h1 className={classes.modalNone}>
            Please Add Something To Your Cart
          </h1>
        </ModalOverlay>
      </>
    );
  }

  return (
    <>
      <BackDrop />
      <ModalOverlay>
        <div className={classes.top}>
          <h4>{`CART (${cartCtx.totalAmount})`}</h4>
          <button onClick={() => cartCtx.clearCart()} className={classes.btn}>
            Remove All
          </button>
        </div>
        <div>
          {cartCtx.items.map((cartItem) => (
            <div className={classes.items} key={cartItem.id}>
              <img src={cartItem.image.desktop} alt={cartItem.name} />
              <div>
                <h4>{firstWord(cartItem.name)}</h4>
                <p>{cartItem.price}</p>
              </div>
              <NumberInput
                buttonOff={true}
                className={classes.toggle}
                val={cartItem.amount}
              />
            </div>
          ))}
        </div>
        <div className={classes.total}>
          <h3>TOTAL</h3>
          <h2>{`$ ${cartCtx.totalPrice.toLocaleString("en-US")}`}</h2>
        </div>

        <Button className={classes.checkoutBtn} onClick={submitCartHandler}>
          Checkout
        </Button>
      </ModalOverlay>
    </>
  );
};

export default CartModal;
