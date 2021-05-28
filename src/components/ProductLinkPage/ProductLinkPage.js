import React from "react";
import Button from "../../components/UI/Button";
import classes from "./ProductLinkPage.module.css";

const ProductLinkPage = ({ name, newOne, description, image }) => {
  console.log(image);
  return (
    <>
      <div className={classes.Product}>
        <div className="imageContainer">
          <img src="" alt={name} />
        </div>
        <aside>
          {newOne && <h3>New Product</h3>}
          <h1>{name}</h1>
          <p>{description}</p>
          <Button>SEE PRODUCT</Button>
        </aside>
      </div>
    </>
  );
};

export default ProductLinkPage;
