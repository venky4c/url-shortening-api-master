import React from "react";

const Header = () => (
  <div className="header">
    <nav class="navbar navbar-expand-sm fixed-top navbar-light bg-light">
      <div class="container">
        <img
          className="title"
          src={require("../assets/images/icons/logo.svg")}
          alt=""
        />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar1"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar1">
          <ul class="navbar-nav nav nav-fill w-100">
            <li class="nav-item">
              <a class="nav-link" href="#features">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#pricing">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#resources">
                Resources
              </a>
            </li>
          </ul>
          <div className="right-menu">
            <span class="nav-item">Login</span>
            <button className="signup-btn">Sign up</button>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
