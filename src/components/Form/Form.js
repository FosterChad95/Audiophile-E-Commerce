import React, { useState, useContext } from "react";
import { CartContext } from "../../store/CartProvider";
import { Link } from "react-router-dom";
import classes from "./Form.module.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { ReactComponent as ReactLogo } from "../../assets/shared/desktop/payment.svg";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#d87d4a",
      color: "black",
      fontWeight: 500,
      fontFamily: "inherit",
      fontSize: "16px",

      ":-webkit-autofill": {
        color: "#fce883",
      },
      "::placeholder": {
        color: "rgba(0,0,0,.5)",
      },
    },
    invalid: {
      iconColor: "red",
      color: "red",
    },
  },
  hidePostalCode: true,
};

const ResetButton = ({ onClick }) => (
  <Link to="/" type="button" className="ResetButton" onClick={onClick}>
    <svg width="32px" height="32px" viewBox="0 0 32 32">
      <path
        fill="#d87d4a"
        d="M15,7.05492878 C10.5000495,7.55237307 7,11.3674463 7,16 C7,20.9705627 11.0294373,25 16,25 C20.9705627,25 25,20.9705627 25,16 C25,15.3627484 24.4834055,14.8461538 23.8461538,14.8461538 C23.2089022,14.8461538 22.6923077,15.3627484 22.6923077,16 C22.6923077,19.6960595 19.6960595,22.6923077 16,22.6923077 C12.3039405,22.6923077 9.30769231,19.6960595 9.30769231,16 C9.30769231,12.3039405 12.3039405,9.30769231 16,9.30769231 L16,12.0841673 C16,12.1800431 16.0275652,12.2738974 16.0794108,12.354546 C16.2287368,12.5868311 16.5380938,12.6540826 16.7703788,12.5047565 L22.3457501,8.92058924 L22.3457501,8.92058924 C22.4060014,8.88185624 22.4572275,8.83063012 22.4959605,8.7703788 C22.6452866,8.53809377 22.5780351,8.22873685 22.3457501,8.07941076 L22.3457501,8.07941076 L16.7703788,4.49524351 C16.6897301,4.44339794 16.5958758,4.41583275 16.5,4.41583275 C16.2238576,4.41583275 16,4.63969037 16,4.91583275 L16,7 L15,7 L15,7.05492878 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z"
      />
    </svg>
  </Link>
);

const CardField = ({ onChange }) => (
  <div className={classes.cardrow}>
    <CardElement options={CARD_OPTIONS} onChange={onChange} />
  </div>
);

const Form = ({ onFormValid, onProcessing }) => {
  const cartCtx = useContext(CartContext);
  //Button State
  const [active, setActive] = useState(1);
  //Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const [nameIsValid, setNameIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [phoneIsValid, setPhoneIsValid] = useState(true);
  const [addressIsValid, setAddressIsValid] = useState(true);
  const [zipIsValid, setZipIsValid] = useState(true);

  //Stripe State
  const elements = useElements();
  const stripe = useStripe();
  const [error, setError] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [cardComplete, setCardComplete] = useState(false);

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
        const reg = /^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
        setPhone(event.target.value.trim());
        setPhoneIsValid(event.target.value.match(reg));
        break;
      case "address":
        setAddress(event.target.value.trim());
        setAddressIsValid(event.target.value.trim() !== "");
        break;
      case "zip-code":
        setZip(event.target.value.trim());
        setZipIsValid(event.target.value.trim().length === 5);
        break;

      default:
        onFormValid(false);
    }
  };

  const reset = () => {
    setError(null);
    onProcessing(false);
    setPaymentMethod(null);
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setZip("");
    setCountry("");
    setRegion("");
    cartCtx.clearCart();
  };

  const submitFormHandler = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    if (error) {
      elements.getElement("card").focus();
      return;
    }

    if (cardComplete) {
      onProcessing(true);
    }

    const payload =
      active === 2
        ? "Cash"
        : await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
            billing_details: {
              name: name,
              email: email,
              phone: phone,
            },
          });

    onProcessing(false);

    if (payload.error) {
      setError(payload.error);
    } else {
      active === 2
        ? setPaymentMethod(payload)
        : setPaymentMethod(payload.paymentMethod);
    }
  };

  if (
    nameIsValid &&
    emailIsValid &&
    phoneIsValid &&
    addressIsValid &&
    zipIsValid &&
    name &&
    email &&
    phone &&
    address &&
    zip &&
    (active === 1 ? cardComplete : true)
  ) {
    onFormValid(true);
  } else {
    onFormValid(false);
  }

  return paymentMethod ? (
    <>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>
        <div className={classes.resultTitle} role="alert">
          Payment successful
        </div>
        <div className={classes.resultMessage}>
          Thanks for your order. No money was charged, but we generated a
          PaymentMethod: {paymentMethod.id ? paymentMethod.id : paymentMethod}
        </div>
        <ResetButton onClick={reset} />
      </div>
    </>
  ) : (
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
              required
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
              required
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
              required
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
              required
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
              required
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
              <div className={classes.cardgroup}>
                <CardField
                  onChange={(e) => {
                    setError(e.error);
                    setCardComplete(e.complete);
                  }}
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
