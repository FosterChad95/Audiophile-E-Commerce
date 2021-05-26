import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as ReactLogo } from "../../assets/shared/desktop/logo.svg";
import CartButton from "../Cart/CartButton";

const Header = () => {
  return (
    <React.Fragment>
      <div className={classes.header}>
        <ReactLogo className={classes.logo} />
        <nav>
          <ul>
            <li>
              <Link to="/" className={classes.link}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/headphones" className={classes.link}>
                Headphones
              </Link>
            </li>
            <li>
              <Link to="/speakers" className={classes.link}>
                Speakers
              </Link>
            </li>
            <li>
              <Link to="/earphones" className={classes.link}>
                Earphones
              </Link>
            </li>
          </ul>
        </nav>
        <CartButton />
        <span className={classes.line}>&nbsp;</span>
      </div>
    </React.Fragment>
  );
};

export default Header;
