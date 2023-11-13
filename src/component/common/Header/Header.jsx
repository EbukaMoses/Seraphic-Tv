import React, { useState } from "react";
// import Logo from ""
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [navList, setnavList] = useState(false);

  return (
    <>
      <div className="top-nav">
        <div className="address">
          <span>
            <i class=""></i>
            <a href="tel:+2349099343595">09099343595</a> ,{" "}
            <a href="tel:+2348103212435">08103212435</a>
          </span>
          <span>
            <i class=""></i>Hosanna Estate, Ibro Way Ago Okota, Lagos State,
            Nigeria
          </span>
          <span>
            <i class=""></i>Sun. - Sat.: 24 Hours
          </span>
        </div>
        <div className="socialmedia">
          <a
            title="Facebook"
            href="https://www.facebook.com/profile.php?id=61552933590633"
            target="_blank"
            class="facebook"
          >
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a title="Twitter" href="" target="_blank" class="twitter">
            <i class="fa-brands fa-square-instagram"></i>
          </a>
          <a title="Twitter" href="" target="_blank" class="twitter">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
      <header>
        <div className="header_container flex">
          <div className="logo">
            <a href="/">
              <img src="/public/images/logo.PNG" alt="" />
            </a>
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/services">Our Services</Link>
              </li>
              <li>
                <Link to="/founder">Founder</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="button flex">
            <button>Request Appointment</button>
            {/* <h4>
              <span>2</span>My List
            </h4>
            <button className="btn1">
              <i className="fa fa-sing-out"></i>Sign in
            </button> */}
          </div>
          <div className="toggle">
            <button onClick={() => setnavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
