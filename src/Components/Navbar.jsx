import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "../CSS/Navbar.module.css";
// import logo from "../Assets/logo.jpg";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 40) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  return (
    <nav className={classes.nav + " " + (show && classes.hidden)}>
      <Link to="/">
        <h1 className={classes["nav-h1"]}>
          Pack{" "}
          <span
            style={{
              color: "#2A5AFF",
              fontWeight: "200",
              fontSize: "2rem",
              letterSpacing: "-0.1rem",
            }}
          >
            Your Bags
          </span>
        </h1>
      </Link>
      <ul className={classes["nav-ul"]}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/plantour">Plan Tour</Link>
        </li>
        <li>
          <Link to="/join">Join</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
