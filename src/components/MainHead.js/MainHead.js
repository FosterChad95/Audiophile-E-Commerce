import classes from "./MainHead.module.css";
import Button from "../../components/UI/Button";
import React, { useContext } from "react";
import { DataContext } from "../../store/DataProvider";

const MainHead = () => {
  const dataCtx = useContext(DataContext);

  const linkClickHandler = () => {
    dataCtx.nameChange("XX99 Mark II Headphones");
  };

  return (
    <React.Fragment>
      <div className={classes.MainHead}>
        <h3>New Product</h3>
        <h1>XX99 Mark II Headphones</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button
          onClick={linkClickHandler}
          to="product-detail/XX99 Mark II Headphones"
        >
          See Product
        </Button>
      </div>
    </React.Fragment>
  );
};

export default MainHead;
