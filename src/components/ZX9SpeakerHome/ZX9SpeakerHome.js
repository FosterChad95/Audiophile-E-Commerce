import React, { useContext } from "react";
import classes from "./ZX9SpeakerHome.module.css";
import SpeakerImage from "../../assets/home/desktop/image-speaker-zx9.png";
import ButtonBlack from "../../components/UI/ButtonBlack";
import { ReactComponent as ReactIcon } from "../../assets/home/desktop/pattern-circles.svg";
import { DataContext } from "../../store/DataProvider";

const ZX9SpeakerHome = () => {
  const dataCtx = useContext(DataContext);

  return (
    <>
      <div className={classes.ZX}>
        <img src={SpeakerImage} alt="ZX9 Speaker" />
        <ReactIcon className={classes.circle} />
        <div>
          <h1>ZX9 Speaker</h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <ButtonBlack
            to="product-detail/ZX9 Speaker"
            className={classes.btn}
            onClick={() => dataCtx.nameChange("ZX9 Speaker")}
          >
            See Product
          </ButtonBlack>
        </div>
      </div>
    </>
  );
};

export default ZX9SpeakerHome;
