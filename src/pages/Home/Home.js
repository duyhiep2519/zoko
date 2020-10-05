import React from "react";
import "./Home.css";
import banner_img_1 from "../../images/banner-img-1.png";
import BoxIntro from "../../components/Box/BoxIntro";
import OurCompany from "./components/OurCompany";
import Choose from "./components/Choose";
import Process from "./components/Process";
import HomeCase from "./components/HomeCase";
import Feature from "./components/Feature";
const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <div className="container">
          <div className="row align-items-center row-banner">
          
            <div className="banner-content">
              <h1 style={{ color: "#fff", fontSize: "55px" }}>
                Trusted Effective Service and Solutions
              </h1>
              <p style={{ color: "#fff" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, et sed
                do eiusmod tempor incididunt labore dolore magna aliqua. Quis
                ipsum suspendisse.
              </p>
              <div className="banner-btn">
                <a className="box-btn" href="/contact">
                  Contact Us{" "}
                </a>
                <a className="box-btn" href="/about">
                  {" "}
                  Know More
                </a>
              </div>
            </div>
            <div className="banner-img">
              <img src={banner_img_1} alt="banner-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="home_service">
        <div className="container">
          {" "}
          <div className="section_title">
            <h2>Smart Services</h2>
            <h2>Provide All Kind of Tech Solutions</h2>
            <p style={{ color: "#7a7e9a" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse.
            </p>
          </div>
          <BoxIntro />
        </div>
      </div>
      <OurCompany />
      <Choose />
      <Process />
      <HomeCase />
      <Feature />
    </div>
  );
};
export default Home;
