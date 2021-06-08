import React, { useContext } from "react";
import classes from "./CartModal.module.css";
import { CartContext } from "../../store/CartProvider";
import NumberInput from "../../components/UI/NumberInput";

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
      <div className="content">{props.children}</div>
    </div>
  );
};

const CartModal = () => {
  const cartCtx = useContext(CartContext);

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
            <div className={classes.items} key={cartItem.item[0].id}>
              <img
                src={cartItem.item[0].image.desktop}
                alt={cartItem.item[0].name}
              />
              <div>
                <h4>{firstWord(cartItem.item[0].name)}</h4>
                <p>{cartItem.price}</p>
              </div>
              <NumberInput buttonOff={true} className={classes.toggle} />
            </div>
          ))}
        </div>
      </ModalOverlay>
    </>
  );
};

export default CartModal;
