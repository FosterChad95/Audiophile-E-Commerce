import React, { useState, useContext } from "react";
import Button from "./Button";
import CartContext from "../../store/CartProvider";
import classes from "./NumberInput.module.css";

const NumberInput = () => {
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
    cartCtx.amount = value;
  };

  return (
    <>
      <div className={classes.container}>
        <button className={classes.toggle} onClick={removeItem}>
          -
        </button>
        <span className={classes.amount}>{value}</span>
        <button className={classes.toggle} onClick={addItem}>
          +
        </button>
        <Button to={"/"} onClick={handleSubmitAmount}>
          Add to Cart
        </Button>
      </div>
    </>
  );
};

export default NumberInput;
