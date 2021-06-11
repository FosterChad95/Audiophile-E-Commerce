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
        disabled={props.disabled || false}
        form={props.form || ""}
      >
        {props.children}
      </button>
    </Link>
  );
};

export default Button;
