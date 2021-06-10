import React, { useState } from "react";
import { ReactComponent as ReactLogo } from "../../assets/shared/desktop/payment.svg";

import classes from "./Form.module.css";
const Form = () => {
  const [active, setActive] = useState(1);

  return (
    <>
      <form className={classes.form}>
        <h1>Checkout</h1>
        <section className={classes.section}>
          <h3>Billing Details</h3>
          <div className={classes.fieldodd}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Alexei Ward" />
          </div>
          <div className={classes.fieldeven}>
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" placeholder="alexei@gmail.com" />
          </div>
          <div className={classes.fieldodd}>
            <label htmlFor="phone">Phone Number</label>
            <input type="text" name="phone" placeholder="+1202-555-0136" />
          </div>
        </section>
        <section className={classes.section}>
          <h3>Shipping Info</h3>
          <div className={classes.fieldlong}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="long"
              placeholder="1137 Williams Avenue"
            />
          </div>
          <div className={classes.fieldodd}>
            <label htmlFor="zip-code">ZIP Code</label>
            <input type="text" name="zip-code" placeholder="10001" />
          </div>
          <div className={classes.fieldeven}>
            <label htmlFor="city">City</label>
            <input type="text" name="city" placeholder="New York" />
          </div>
          <div className={classes.fieldodd}>
            <label htmlFor="country">Country</label>
            <input type="text" name="country" placeholder="United States" />
          </div>
        </section>
        <section className={classes.section}>
          <h3>Payment Details</h3>
          <div className={classes.fieldodd}>
            <h4>Payment Method</h4>
          </div>
          <div
            className={`${classes.fieldpayment} ${
              active === 1 && classes.active
            }`}
          >
            <input
              name="payment"
              id="payment1"
              type="radio"
              onClick={() => setActive(1)}
            />
            <label htmlFor="payment1">Credit Card</label>
          </div>
          <div
            className={`${classes.fieldpayment} ${
              active === 2 && classes.active
            }`}
          >
            <input
              id="payment2"
              name="payment"
              type="radio"
              onClick={() => setActive(2)}
            />
            <label htmlFor="payment2">Cash on Delivery</label>
          </div>
          {active === 1 ? (
            <>
              <div className={classes.fieldodd}>
                <label htmlFor="Credit-Card-Number">Credit Card Number</label>
                <input
                  type="tel"
                  placeholder="xxxx xxxx xxxx xxxx"
                  name="city"
                />
              </div>
              <div className={classes.fieldeven}>
                <label htmlFor="card-expiration-date">
                  Card Expiration Date
                </label>
                <input
                  type="text"
                  name="card-expiration-date"
                  placeholder="10/2021"
                />
              </div>
              <div className={classes.fieldodd}>
                <label htmlFor="card-cvv-number">Card CVV Number</label>
                <input type="text" name="card-cvv-number" placeholder="456" />
              </div>
            </>
          ) : (
            <div className={classes.cash}>
              <ReactLogo />
              <p>
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          )}
        </section>
      </form>
    </>
  );
};

export default Form;
