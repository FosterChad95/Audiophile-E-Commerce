import React, { useState } from "react";
import classes from "./Form.module.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { ReactComponent as ReactLogo } from "../../assets/shared/desktop/payment.svg";

const Form = ({ onFormValid, onFormSubmit }) => {
  const [active, setActive] = useState(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [card, setCard] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");

  const [nameIsValid, setNameIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [phoneIsValid, setPhoneIsValid] = useState(true);
  const [addressIsValid, setAddressIsValid] = useState(true);
  const [zipIsValid, setZipIsValid] = useState(true);
  const [cardIsValid, setCardIsValid] = useState(true);
  const [expirationIsValid, setExpirationIsValid] = useState(true);
  const [cvvIsValid, setCvvIsValid] = useState(true);

  const valueChangeHandler = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value.trim());
        setNameIsValid(event.target.value.trim() !== "");
        break;
      case "email":
        setEmail(event.target.value.trim());
        setEmailIsValid(
          event.target.value.includes("@") && event.target.value.trim() !== ""
        );
        break;
      case "phone":
        setPhone(event.target.value.trim());
        setPhoneIsValid(
          event.target.value.trim().length === 10 ||
            event.target.value.trim().length === 11
        );
        break;
      case "address":
        setAddress(event.target.value.trim());
        setAddressIsValid(event.target.value.trim() !== "");
        break;
      case "zip-code":
        setZip(event.target.value.trim());
        setZipIsValid(event.target.value.trim().length === 5);
        break;
      case "credit-card":
        setCard(event.target.value.trim());
        setCardIsValid(event.target.value.trim().length === 16);
        break;
      case "card-expiration-date":
        const regex = new RegExp(
          /^((0[1-9])|(1[0-2]))\/((2009)|(20[1-2][0-9]))$/
        );
        setExpiration(event.target.value.trim());
        setExpirationIsValid(regex.test(event.target.value.trim()));
        break;
      case "card-cvv-number":
        setCvv(event.target.value.trim());
        setCvvIsValid(event.target.value.trim().length === 3);
        break;

      default:
        onFormValid(false);
    }
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    onFormSubmit({
      name,
      email,
      phone,
      address,
      zip,
      country,
      region,
      card: card ? card : "",
      expiration: expiration ? expiration : "",
      cvv: cvv ? cvv : "",
    });
  };

  if (
    nameIsValid &&
    emailIsValid &&
    phoneIsValid &&
    addressIsValid &&
    zipIsValid &&
    cardIsValid &&
    cvvIsValid &&
    expirationIsValid &&
    name &&
    email &&
    phone &&
    address &&
    zip &&
    (active === 1 ? cvv && card && expiration : true)
  ) {
    onFormValid(true);
  } else {
    onFormValid(false);
  }

  return (
    <>
      <form onSubmit={submitFormHandler} id="checkout" className={classes.form}>
        <h1>Checkout</h1>
        <section className={classes.section}>
          <h3>Billing Details</h3>
          <div
            className={`${classes.fieldodd} ${
              !nameIsValid ? classes.invalid : ""
            }`}
          >
            <label htmlFor="name">Name</label>
            {!nameIsValid && <h5>Wrong Format</h5>}
            <input
              type="text"
              name="name"
              placeholder="Alexei Ward"
              onChange={valueChangeHandler}
            />
          </div>
          <div
            className={`${classes.fieldeven} ${
              !emailIsValid ? classes.invalid : ""
            }`}
          >
            <label htmlFor="email">Email Address</label>
            {!emailIsValid && <h5>Wrong Format</h5>}
            <input
              type="email"
              name="email"
              placeholder="alexei@gmail.com"
              onChange={valueChangeHandler}
            />
          </div>
          <div
            className={`${classes.fieldodd} ${
              !phoneIsValid ? classes.invalid : ""
            }`}
          >
            <label htmlFor="phone">Phone Number</label>
            {!phoneIsValid && <h5>Wrong Format</h5>}
            <input
              type="text"
              name="phone"
              placeholder="+1202-555-0136"
              onChange={valueChangeHandler}
            />
          </div>
        </section>
        <section className={classes.section}>
          <h3>Shipping Info</h3>
          <div
            className={`${classes.fieldlong} ${
              !addressIsValid ? classes.invalid : ""
            }`}
          >
            <label htmlFor="address">Address</label>
            {!addressIsValid && <h5>Wrong Format</h5>}
            <input
              type="text"
              name="address"
              id="long"
              placeholder="1137 Williams Avenue"
              onChange={valueChangeHandler}
            />
          </div>
          <div
            className={`${classes.fieldodd} ${
              !zipIsValid ? classes.invalid : ""
            }`}
          >
            <label htmlFor="zip-code">ZIP Code</label>
            {!zipIsValid && <h5>Wrong Format</h5>}
            <input
              type="text"
              name="zip-code"
              placeholder="10001"
              onChange={valueChangeHandler}
            />
          </div>

          <CountryDropdown
            value={country}
            name="country"
            onChange={(val) => setCountry(val)}
            classes={` ${classes.fieldCountry}`}
          />

          <RegionDropdown
            country={country}
            value={region}
            name="region"
            onChange={(val) => setRegion(val)}
            classes={`${classes.fieldodd} ${classes.fieldCity} `}
          />
        </section>
        <section className={classes.section}>
          <h3>Payment Details</h3>
          <div className={`${classes.fieldodd} `}>
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
              defaultChecked={active === 1 ? true : false}
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
              defaultChecked={active === 2 ? true : false}
            />
            <label htmlFor="payment2">Cash on Delivery</label>
          </div>
          {active === 1 ? (
            <>
              <div
                className={`${classes.fieldodd} ${
                  !cardIsValid ? classes.invalid : ""
                }`}
              >
                <label htmlFor="credit-card">Credit Card Number</label>
                {!cardIsValid && <h5>Wrong Format</h5>}
                <input
                  type="tel"
                  placeholder="xxxx xxxx xxxx xxxx"
                  name="credit-card"
                  onChange={valueChangeHandler}
                />
              </div>
              <div
                className={`${classes.fieldeven} ${
                  !expirationIsValid ? classes.invalid : ""
                }`}
              >
                <label htmlFor="card-expiration-date">
                  Card Expiration Date
                </label>
                {!expirationIsValid && <h5>Wrong Format</h5>}
                <input
                  type="text"
                  name="card-expiration-date"
                  placeholder="10/2021"
                  onChange={valueChangeHandler}
                />
              </div>
              <div
                className={`${classes.fieldodd} ${
                  !cvvIsValid ? classes.invalid : ""
                }`}
              >
                <label htmlFor="card-cvv-number">Card CVV Number</label>
                {!cvvIsValid && <h5>Wrong Format</h5>}
                <input
                  type="text"
                  name="card-cvv-number"
                  placeholder="456"
                  onChange={valueChangeHandler}
                />
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
