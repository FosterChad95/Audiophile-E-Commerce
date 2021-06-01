import React from "react";
import Button from "../../components/UI/Button";
import classes from "./ProductLinkPage.module.css";
const ProductLinkPage = ({ name, newOne, description, id, image }) => {
  const { desktop } = image;

  if (id % 2 !== 0) {
    return (
      <>
        <div className={classes.Product}>
          <div className={classes.imageContainerOpp}>
            <img src={desktop} alt={name} />
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
            <img src={desktop} alt={name} />
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
