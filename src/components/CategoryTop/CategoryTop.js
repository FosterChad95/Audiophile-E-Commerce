import classes from "./CategoryTop.module.css";
import Header from "../../components/Header/Header";
import React from "react";

const CategoryTop = () => {
  return (
    <div className={classes.CategoryTop}>
      <Header />
      <h1>HEADPHONES</h1>
    </div>
  );
};

export default CategoryTop;
