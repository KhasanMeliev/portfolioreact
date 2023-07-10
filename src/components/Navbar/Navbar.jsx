import React from "react";
import "./styles.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/home" style={{ color: "white" }}>
          khasan
        </a>
      </div>
      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" className="hamburger">
          &#9776;
        </label>
        <div className="menu">
          <a href="/home">
            <li>Home</li>
          </a>
          <a href="/about">
            <li>About</li>
          </a>
          <a href="/portfolio">
            <li>Portfolio</li>
          </a>
          <a href="/blog">
            <li>Blog</li>
          </a>
          <a href="/contact">
            <li>Contact</li>
          </a>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;