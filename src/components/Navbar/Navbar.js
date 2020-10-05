import React from "react";
import DropDown from "../Dropdown/DropDown";
import "./Navbar.css";
import logo from'../../images/logo.png'
const Navbar = () => {
  return (
    <>
      <div className="navbar ">
        <div>
          <ul className="main-nav-list">
            <li className="nav-item">
              <a className="nav-item dropdown-toggle" href="/">
                Home{" "}
                <DropDown
                  array={["Home Demo One", "Home Demo Two", "Home Demo Three"]}
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-item" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-item dropdown-toggle" href="/solution">
                Solution
                <DropDown array={["Solutions", "Solutions Details"]} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-item dropdown-toggle" href="/case_studies">
                Case Studies
                <DropDown array={["Case Studies", "Case Studies Details"]} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-item dropdown-toggle" href="/pages">
                Pages
                <DropDown
                  array={[
                    "Team",
                    "Pricing",
                    "Testimonials",
                    "Sign In",
                    "Sign Up",
                    "FAQ",
                    "Terms And Conditions",
                    "Privacy Policy",
                    "404 Error Page",
                  ]}
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-item dropdown-toggle" href="/blog">
                Blog
                <DropDown array={["Blog", "Blog Details"]} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-item" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <form>
            <input type="text" placeholder="Search..." />
            <button type="submit" className="btn-search">
              <i className="fas fa-search"></i>
            </button>
          </form>
          <a style={{ margin: "auto" }} className="box-btn" href="/">
            Get Started
          </a>
        </div>
      </div>

      {/* tablet, mobile */}

      <div className="navbar_tablet">
        
        <div className="logo_navbar">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <input
          type="checkbox"
          id="navbar_tablet-input"
          className="navbar_tablet-input"
          hidden
        />
        <label htmlFor="navbar_tablet-input" className="nav_overlay"></label>
        <label htmlFor="navbar_tablet-input" className="navbar_tablet-open">
          <i className="fas fa-bars"></i>
        </label>

        <ul className="main-nav-list_tablet">
          <li>
            {" "}
            <label htmlFor="navbar_tablet-input" className="navbar_tablet-close">
              <i className="fas fa-times"></i>
            </label>
          </li>
          <li className="nav-item_tablet">
            <a className="nav-item_tablet dropdown-toggle" href="/">
              Home{" "}
              <DropDown
                array={["Home Demo One", "Home Demo Two", "Home Demo Three"]}
              />
            </a>
          </li>
          <li className="nav-item_tablet">
            <a className="nav-item_tablet" href="/about">
              About
            </a>
          </li>
          <li className="nav-item_tablet">
            <a className="nav-item_tablet dropdown-toggle" href="/solution">
              Solution
              <DropDown array={["Solutions", "Solutions Details"]} />
            </a>
          </li>
          <li className="nav-item_tablet">
            <a className="nav-item_tablet dropdown-toggle" href="/case_studies">
              Case Studies
              <DropDown array={["Case Studies", "Case Studies Details"]} />
            </a>
          </li>
          <li className="nav-item_tablet">
            <a className="nav-item_tablet dropdown-toggle" href="/pages">
              Pages
              <DropDown
                array={[
                  "Team",
                  "Pricing",
                  "Testimonials",
                  "Sign In",
                  "Sign Up",
                  "FAQ",
                  "Terms And Conditions",
                  "Privacy Policy",
                  "404 Error Page",
                ]}
              />
            </a>
          </li>
          <li className="nav-item_tablet">
            <a className="nav-item_tablet dropdown-toggle" href="/blog">
              Blog
              <DropDown array={["Blog", "Blog Details"]} />
            </a>
          </li>
          <li className="nav-item_tablet">
            <a className="nav-item_tablet" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
