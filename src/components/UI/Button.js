import classes from "./Button.module.css";
import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link to={props.to}>
      <button
        onClick={props.onClick}
        type={props.type || "button"}
        className={props.className || classes.button}
      >
        {props.children}
      </button>
    </Link>
  );
};

export default Button;
