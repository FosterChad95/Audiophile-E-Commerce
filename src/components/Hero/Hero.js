import classes from "./Hero.module.css";
import Header from "../Header/Header";
import MainHead from "../MainHead.js/MainHead";
import React from "react";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <Header />
      <MainHead />
    </div>
  );
};

export default Hero;
