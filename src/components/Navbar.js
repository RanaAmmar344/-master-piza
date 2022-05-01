import React from "react";
import { a } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="/">Home</a>
            
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/clients">Clients</a>
          </li>
          <li>
            <a href="/prices">Prices</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
