import React, { useState, useContext } from "react";
import Button from "./Button";
import { CartContext } from "../../store/CartProvider";
import classes from "./NumberInput.module.css";

const NumberInput = ({ price, item, buttonOff, className, val }) => {
  const cartCtx = useContext(CartContext);
  const [value, setValue] = useState(1);

  const addItem = () => {
    if (value < 1) return;
    setValue((prevVal) => prevVal + 1);
  };

  const removeItem = () => {
    if (value < 1) return;
    setValue((prevVal) => prevVal - 1);
  };

  const handleSubmitAmount = () => {
    cartCtx.addItem({
      ...item,
      amount: value,
      price: price,
    });
    cartCtx.toggleCart();
  };

  return (
    <>
      <div className={className || classes.container}>
        <button className={className || classes.toggle} onClick={removeItem}>
          -
        </button>
        <span className={className || classes.amount}>{val || value}</span>
        <button className={className || classes.toggle} onClick={addItem}>
          +
        </button>

        {buttonOff ? (
          ""
        ) : (
          <Button onClick={handleSubmitAmount}>Add to Cart</Button>
        )}
      </div>
    </>
  );
};

export default NumberInput;
