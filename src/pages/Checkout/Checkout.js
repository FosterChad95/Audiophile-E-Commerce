import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import classes from "./Checkout.module.css";
import Form from "../../components/Form/Form";

const Checkout = () => {
  return (
    <>
      <div className={classes.top}>
        <Header />
      </div>
      <div className={classes.background}>
        <Link to={`/home`} className={classes.back}>
          &larr; &nbsp; Go Back
        </Link>
        <Form />
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
