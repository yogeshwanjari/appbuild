import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href="">TACOS</a>
          </li>
          <li>
            <a href="">BEER</a>
          </li>
          <li>
            <a href="">WINES</a>
          </li>
          <li>
            <a href="">DESSERTS</a>
          </li>
          <li>
            <a href="">RESERVATION</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;