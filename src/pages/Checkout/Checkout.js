import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import classes from "./Checkout.module.css";
import Form from "../../components/Form/Form";
import Summary from "../../components/Summary/Summary";

const Checkout = () => {
  const [formData, setFormData] = useState("");
  const [formValid, setFormValid] = useState(false);

  const submitCheckoutHandler = (event) => {
    if (!formValid) return;
  };

  const validateFormHandler = (event) => {
    setFormValid(event);
  };

  return (
    <>
      <div className={classes.top}>
        <Header />
      </div>
      <div className={classes.background}>
        <Link to={`/home`} className={classes.back}>
          &larr; &nbsp; Go Back
        </Link>
        <Form onFormValid={validateFormHandler} />
        <Summary onSubmit={submitCheckoutHandler} onButtonActive={!formValid} />
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
