import classes from "./Gallery.module.css";
import React from "react";

const Gallery = ({ gallery, name }) => {
  const { first, second, third } = gallery;

  return (
    <>
      <div className={classes.gallery}>
        <img
          className={classes.img1}
          src={first.desktop}
          alt={`${name} gallery 1`}
        />
        <img
          className={classes.img2}
          src={second.desktop}
          alt={`${name} gallery 2`}
        />

        <img
          className={classes.img3}
          src={third.desktop}
          alt={`${name} gallery 3`}
        />
      </div>
    </>
  );
};

export default Gallery;
