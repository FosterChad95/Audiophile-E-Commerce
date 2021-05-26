import React from "react";
import classes from "./ButtonBlack.module.css";
import { Link } from "react-router-dom";

const ButtonBlack = (props) => {
  return (
    <Link to={props.to}>
      <button
        onClick={props.onClick}
        type={props.type || "button"}
        className={classes.button}
      >
        {props.children}
      </button>
    </Link>
  );
};

export default ButtonBlack;
