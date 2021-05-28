import React from "react";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className={classes.modal}>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
    </div>
  );
};

export default ErrorModal;
