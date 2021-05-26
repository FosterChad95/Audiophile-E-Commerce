import classes from "./Footer.module.css";
import React from "react";
import { ReactComponent as ReactLogo } from "../../assets/shared/desktop/logo.svg";
import { NavLink } from "react-router-dom";
import Facebook from "../../assets/shared/desktop/icon-facebook.svg";
import Twitter from "../../assets/shared/desktop/icon-twitter.svg";
import Instagram from "../../assets/shared/desktop/icon-instagram.svg";

const Footer = () => {
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.left}>
          <ReactLogo />
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className={classes.copy}>Copyright 2021. All Rights Reserved</p>
        </div>
        <div className={classes.right}>
          <nav>
            <ul>
              <li>
                <NavLink to="/" className={classes.link}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/headphones"
                  className={classes.link}
                  activeClassName={classes.active}
                >
                  Headphones
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/speakers"
                  className={classes.link}
                  activeClassName={classes.active}
                >
                  Speakers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/earphones"
                  className={classes.link}
                  activeClassName={classes.active}
                >
                  Earphones
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className={classes.icons}>
            <img src={Facebook} alt="Facebook Logo" />
            <img src={Twitter} alt="Twitter Logo" />
            <img src={Instagram} alt="Instagram Logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
