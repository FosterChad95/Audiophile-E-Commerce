import React, { useContext } from "react";
import classes from "./ZX7SpeakerHome.module.css";
import ButtonBlack from "../../components/UI/ButtonBlack";
import { DataContext } from "../../store/DataProvider";

const ZX7SpeakerHome = (props) => {
  const dataCtx = useContext(DataContext);

  return (
    <>
      <div className={classes.ZX7}>
        <div>
          <h1>ZX7 Speaker</h1>
          <ButtonBlack
            to="ZX7 Speaker"
            onClick={() => dataCtx.nameChange("ZX7 Speaker")}
          >
            SEE PRODUCT
          </ButtonBlack>
        </div>
      </div>
    </>
  );
};

export default ZX7SpeakerHome;
