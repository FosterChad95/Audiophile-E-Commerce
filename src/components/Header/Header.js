import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
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
        <CartButton />
        <span className={classes.line}>&nbsp;</span>
      </div>
    </React.Fragment>
  );
};

export default Header;
