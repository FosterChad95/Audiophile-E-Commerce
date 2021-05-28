import React from "react";
import Button from "../../components/UI/Button";
import classes from "./ProductLinkPage.module.css";
import useWindow from "../../hooks/useWindow";

const ProductLinkPage = ({ name, newOne, description, images }) => {
  const imageurl = useWindow();

  console.log(images);

  let image;
  if (imageurl > 1200) {
    image = "desktop";
  } else if (imageurl > 700 && imageurl < 1200) {
    image = "tablet";
  } else {
    image = "mobile";
  }

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
