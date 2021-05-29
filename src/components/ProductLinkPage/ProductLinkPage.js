import React from "react";
import Button from "../../components/UI/Button";
import classes from "./ProductLinkPage.module.css";

const ProductLinkPage = ({ name, newOne, description, id, image }) => {
  let img;
  console.log(image);

  if (name === "XX59 Headphones") {
    img = XX59;
  } else if (name === "XX99 Mark I Headphones") {
    img = XX991;
  } else if (name === "XX99 Mark II Headphones") {
    img = XX992;
  } else if (name === "ZX7 Speaker") {
    img = ZX7;
  } else {
    img = ZX9;
  }
  if (id % 2 !== 0) {
    return (
      <>
        <div className={classes.Product}>
          <div className={classes.imageContainerOpp}>
            <img src={img} alt={name} />
          </div>
          <aside className={classes.asideleft}>
            {newOne && <h3>New Product</h3>}
            <h1>{name}</h1>
            <p>{description}</p>
            <Button>SEE PRODUCT</Button>
          </aside>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={classes.Product}>
          <div className="imageContainer">
            <img src={img} alt={name} />
          </div>
          <aside className={classes.asideright}>
            {newOne && <h3>New Product</h3>}
            <h1>{name}</h1>
            <p>{description}</p>
            <Button>SEE PRODUCT</Button>
          </aside>
        </div>
      </>
    );
  }
};

export default ProductLinkPage;
