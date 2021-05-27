import React from "react";
import Button from "../../components/UI/Button";
import classes from "./ProductLinkPage.module.css";
import useWindow from "../../hooks/useWindow";
import desktopImage from "../../assets/category-headphones/desktop/image-xx99-mark-two.jpg";
import tabletImage from "../../assets/category-headphones/tablet/image-xx99-mark-two.jpg";

const ProductLinkPage = () => {
  const imageurl = useWindow() >= 768 ? desktopImage : tabletImage;

  return (
    <>
      <div className={classes.Product}>
        <div className="imageContainer">
          <img src={imageurl} alt="XX99 Mark II Headphones" />
        </div>
        <aside>
          <h3>New Product</h3>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <Button>SEE PRODUCT</Button>
        </aside>
      </div>
    </>
  );
};

export default ProductLinkPage;
