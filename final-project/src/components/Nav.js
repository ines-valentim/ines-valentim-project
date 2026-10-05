import './Nav.css';
import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Little Lemon Logo */}
        <Link to="/" className="logo">
          <img
            src="/assets/Logo.svg"
            alt="Little Lemon logo"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/menu">Menu</Link>
          </li>

          <li>
            <Link to="/reservations">Reservations</Link>
          </li>

          <li>
            <Link to="/order-online">Order Online</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Nav;