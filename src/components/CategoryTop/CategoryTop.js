import classes from "./CategoryTop.module.css";
import Header from "../../components/Header/Header";
import React from "react";

const CategoryTop = ({ heading }) => {
  return (
    <div className={classes.CategoryTop}>
      <Header />
      <h1>{heading}</h1>
    </div>
  );
};

export default CategoryTop;
