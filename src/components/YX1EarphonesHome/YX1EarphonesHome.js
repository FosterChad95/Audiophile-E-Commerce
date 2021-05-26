import React from "react";
import classes from "./YX1EarphonesHome.module.css";
import EarphoneImage from "../../assets/home/desktop/image-earphones-yx1.jpg";
import ButtonBlack from "../../components/UI/ButtonBlack";

const YX1EarphonesHome = (props) => {
  return (
    <>
      <div className={classes.YX1}>
        <img src={EarphoneImage} alt="YX1 Earphones" />
        <div>
          <h1>YX1 Earphones</h1>
          <ButtonBlack>SEE PRODUCT</ButtonBlack>
        </div>
      </div>
    </>
  );
};

export default YX1EarphonesHome;
