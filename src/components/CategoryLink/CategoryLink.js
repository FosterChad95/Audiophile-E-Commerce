import classes from "./CategoryLink.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ReactIcon } from "../../assets/shared/desktop/icon-arrow-right.svg";
import headphoneImage from "../../assets/shared/desktop/image-headphones.png";
import earphoneImage from "../../assets/shared/desktop/image-earphones.png";
import speakerImage from "../../assets/shared/desktop/image-speakers.png";

const CategoryLink = (props) => {
  return (
    <div className={classes.categories}>
      <div className={classes.category}>
        <img src={headphoneImage} alt="headphones" />
        <h2>Headphones</h2>
        <Link to="/headphones" className={classes.link}>
          <span>Shop</span>
          <ReactIcon className={classes.icon} />
        </Link>
      </div>
      <div className={classes.category}>
        <img src={speakerImage} alt="Speakers" />
        <h2>Speakers</h2>
        <Link to="/speakers" className={classes.link}>
          <span>Shop</span>
          <ReactIcon className={classes.icon} />
        </Link>
      </div>
      <div className={classes.category}>
        <img src={earphoneImage} alt="Earphones" />
        <h2>Earphones</h2>
        <Link to="earphones" className={classes.link}>
          <span>Shop</span>
          <ReactIcon className={classes.icon} />
        </Link>
      </div>
    </div>
  );
};

export default CategoryLink;
