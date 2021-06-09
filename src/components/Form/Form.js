import React from "react";
import classes from "./Form.module.css";
const Form = () => {
  return (
    <>
      <form className={classes.form}>
        <h1>Checkout</h1>
        <section className={classes.section}>
          <h3>Billing Details</h3>
          <div className={classes.field}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Alexei Ward" />
          </div>
          <div className={classes.field}>
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" placeholder="alexei@gmail.com" />
          </div>
          <div className={classes.field}>
            <label htmlFor="phone">Phone Number</label>
            <input type="text" name="phone" placeholder="+1202-555-0136" />
          </div>
        </section>
        <section className={classes.section}>
          <h3>Shipping Info</h3>
          <div className={classes.field}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="long"
              placeholder="1137 Williams Avenue"
            />
          </div>
          <div className={classes.field}>
            <label htmlFor="zip-code">ZIP Code</label>
            <input type="text" name="zip-code" placeholder="10001" />
          </div>
          <div className={classes.field}>
            <label htmlFor="city">City</label>
            <input type="text" name="city" placeholder="New York" />
          </div>
          <div className={classes.field}>
            <label htmlFor="country">Country</label>
            <input type="text" name="country" placeholder="United States" />
          </div>
        </section>
        <section className={classes.section}>
          <h3>Payment Details</h3>
          <div className={classes.field}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              placeholder="1137 Williams Avenue"
            />
          </div>
          <div className={classes.field}>
            <button aria-label="Credit Card Option">Credit Card</button>
            <button aria-label="Cash On Delivery Option">
              Cash on Delivery
            </button>
          </div>
          <div className={classes.field}>
            <label htmlFor="Credit-Card-Number">Credit Card Number</label>
            <input type="tel" placeholder="xxxx xxxx xxxx xxxx" name="city" />
          </div>
          <div className={classes.field}>
            <label htmlFor="card-expiration-date">Card Expiration Date</label>
            <input type="number" name="card-expiration-date" />
          </div>
          <div className={classes.field}>
            <label htmlFor="card-cvv-number">Card CVV Number</label>
            <input type="number" name="card-cvv-number" />
          </div>
        </section>
      </form>
    </>
  );
};

export default Form;
