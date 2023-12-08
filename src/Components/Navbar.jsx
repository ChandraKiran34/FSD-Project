import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "../CSS/Navbar.module.css";
import { useLocation } from "react-router-dom";
// import logo from "../Assets/logo.jpg";
import { useAuth } from "../FireBase/AuthContexts";
import { FaPerson, FaUser } from "react-icons/fa6";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const { user } = useAuth();
  const { logout } = useAuth();
  const controlNavbar = () => {
    if (window.scrollY > 40) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
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
        <h1 className={classes["nav-h1"]} style={{color:"white"}}>
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
          {user ? (
            <li className={classes.dropdown}>
              <span className={classes.dropdownLink} style={{color:"white"}}><FaUser /></span>
              {user && (
                <div className={classes.dropdownContent}>
                  <Link to="/userdashboard">Dashboard</Link>
                  <span onClick={handleLogout}>Logout</span>
                </div>
              )}
            </li>
          ) : (
            <Link to="/signin">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
