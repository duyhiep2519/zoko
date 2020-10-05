import React from "react";
import logo from "../../images/logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className=" row row-footer">
          <div className="footer_item1">
            <div className="content">
              <div className="logo">
                <img alt="logo" className="logo" src={logo}></img>
              </div>
              <p style={{ color: "#fff" }}>
                Lorem ipsum dolor sit amet, mattetur adipiscing elit, sed do
                eiusmod.
              </p>
              <div className="subscribe">
                <form className="footer-form">
                  <input
                    className="form-control"
                    type="email"
                    id="email-footer"
                    placeholder="Your email"
                    name="email"
                    required
                  />
                  <button className="box-btn btn-footer" type="submit">
                    Subscribe
                  </button>
                </form>
              </div>
              <ul className="social">
                <li>
                  <a href="/contact">
                    {" "}
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="/contact">
                    {" "}
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/contact">
                    {" "}
                    <i className="fas fa-envelope"></i>
                  </a>
                </li>
                <li>
                  <a href="/contact">
                    {" "}
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_item2">
            <div className="content">
              <h3 style={{ color: "blue" }}>Our Service</h3>
              <ul className="footer-list">
                <li>
                  <a href="/about"> Visual Design</a>
                </li>
                <li>
                  <a href="/about">Development</a>
                </li>
                <li>
                  <a href="/about">QA & Testing</a>
                </li>
                <li>
                  <a href="/about">IT Management</a>
                </li>
                <li>
                  <a href="/about">Cyber Security</a>
                </li>
                <li>
                  <a href="/about">Wireless Connection</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_item3">
            <div className="content">
              <h3 style={{ color: "blue" }}>Quick Links</h3>
              <ul className="footer-list">
                <li>
                  <a href="/faq">FAQs</a>
                </li>
                <li>
                  <a href="/solution">Services</a>
                </li>
                <li>
                  <a href="/career">Career</a>
                </li>
                <li>
                  <a href="/privacy">Privacy & Policy</a>
                </li>
                <li>
                  <a href="/terms">Terms & Conditions</a>
                </li>
                <li>
                  <a href="/data">Data Analysis</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_item2">
            <div className="content">
              <h3 style={{ color: "blue" }}>Contacts</h3>
              <ul className="footer-list">
                <li>
                  <a href="/contact">
                    <i className="fas fa-phone-alt"></i> 12345678
                  </a>
                </li>
                <li>
                  <a href="/contact">
                    <i className="fas fa-envelope"></i> abc@xyz.com
                  </a>
                </li>
                <li>
                  <a href="/contact">
                    <i className="fas fa-envelope"></i> abc@xyz.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
