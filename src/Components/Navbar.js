import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import logo from '../Assets/logo.jpg'
const Navbar = () => {
  return (
    <nav style={{display:"flex",alignItems:"center" ,justifyContent:"space-around"}}>
        
      <Link to='/' >
        <h1>Pack <span style={{color:"#00bcd4"}}>Your Bags</span></h1>
      </Link>
      <ul>
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
