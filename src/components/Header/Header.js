import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
const Header = () => {
  return (
    <header className="header-area">
      <div className="container">
        <div className="row align-items-center row-header">
          <div className="logo_header">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="__contact-mobile">
            <div className="__contact-list ">
              <ul className="contact">
                <li className="social">
                  <a href="/contact">
                    <i className="fas fa-phone-alt"></i> 12345678
                  </a>
                </li>
                <li className="social">
                  <a href="/contact">
                    <i className="fas fa-envelope"></i> abc@xyz.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="social_contact">
              <ul className="contact-social">
                <li className="social">
                  <a href="/contact">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="social">
                  <a href="/contact">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="social">
                  <a href="/contact">
                    <i className="fas fa-envelope"></i>
                  </a>
                </li>
                <li className="social">
                  <a href="/contact">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
