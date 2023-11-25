import React from 'react'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faPhone,
  faShoppingCart,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
    <div className="container">
      <h1 style={{ color: "orange" }}>NextGen Food Court</h1>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/homepage">
              <FontAwesomeIcon 
                icon={faHome} 
                className="me-1 d-lg-none" 
              />
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/userprofile">
              <FontAwesomeIcon 
                icon={faUser} 
                className="me-1 d-lg-none" 
              />
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/foodchoice">             
              <FontAwesomeIcon 
                icon={faShoppingCart} 
                beat size="1x" 
              />  
              Shopping Cart
            </NavLink>
          </li>
          <li className="nav-item">
            <a 
                className="nav-link d-none d-lg-flex" 
                href="tel:+123456789"
            >
              <FontAwesomeIcon 
                icon={faPhone} 
                className="me-1" 
                beat size="1x"
              />
              Contact
            </a>
            <a
              className="nav-link d-lg-none"
              href="tel:+123456789"
              style={{ display: "flex", alignItems: "center" }}
            >
              <FontAwesomeIcon 
                icon={faPhone} 
                className="me-1" 
              />
              <span>Contact</span>
            </a>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                className="me-1 d-lg-none"
              />
              Log-Out
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
