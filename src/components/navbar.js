import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import { RiChatDeleteLine } from "react-icons/ri";
import logo from "./images/logo 2.jpg";
import "./style/navbar.css";

const Navbar = () => {
  const [togl, setTogl] = useState(false);
  let navigateLogo = useNavigate();

  return (
    <>
      <nav className="Nav">
        <div
          className="navLogo"
          onClick={() => {
            navigateLogo("/contact");
          }}
        >
          <img src={logo} alt="LOGO" className="logo-img" />
        </div>
        <ul
          className={togl ? "navTogl" : "nav-list"}
          onClick={() => {
            setTogl(false);
          }}
        >
          <Link to="/" className="home">
            <li>Home</li>
          </Link>
          <Link to="/shope" className="shope">
            <li>Shop </li>
          </Link>

          <Link to="/about" className="about">
            <li>About </li>
          </Link>

          <Link to="/contact" className="contact">
            <li>Contact</li>
          </Link>

          <Link to="/cart" className="cart">
            <li>Cart</li>
          </Link>

          <Link to="/admin" className="admin">
            <li>Admin</li>
          </Link>
        </ul>
        <button
          className="togleBtn"
          onClick={() => {
            setTogl(!togl);
          }}
        >
          {togl ? (
            <div>
              <RiChatDeleteLine />
            </div>
          ) : (
            <div>
              <TfiMenuAlt />
            </div>
          )}
        </button>
      </nav>
    </>
  );
};
export default Navbar;
