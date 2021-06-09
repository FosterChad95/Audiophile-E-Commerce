import React from "react";
import classes from "./ProductItem.module.css";
import NumberInput from "../UI/NumberInput";
const ProductItem = ({ name, description, newOne, image, item, price }) => {
  const { desktop } = image;

  return (
    <>
      <div className={classes.Product}>
        <div className={classes.imageContainer}>
          <img src={desktop} alt={name} />
        </div>
        <aside className={classes.asideright}>
          {newOne && <h3>New Product</h3>}
          <h1>{name}</h1>
          <p>{description}</p>
          <p className={classes.price}>{`$ ${price.toLocaleString(
            "en-US"
          )}`}</p>
          <NumberInput price={price} item={item[0]} />
        </aside>
      </div>
    </>
  );
};

export default ProductItem;
