import React from "react";
import se1 from "../../images/services/service1.png";
import se2 from "../../images/services/service2.png";
import se3 from "../../images/services/service3.png";
import se4 from "../../images/services/service4.png";
import se5 from "../../images/services/service5.png";
import se6 from "../../images/services/service6.png";
import "./BoxIntro.css";
const BoxIntro = () => {
  return (
    <div className="row row-service">
      <div className="single-service">
        <div className="service-img">
          <img src={se1} alt="se1" />
        </div>
        <div className="service-content">
          <h3 style={{ color: "#293a5c" }}>Visual Design</h3>
          <p style={{ color: "#7a7e9a" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel
            sit maxime assumenda. maiores, magnam
          </p>
          <a href="/solution">Read More</a>
        </div>
      </div>
      <div className="single-service">
        <div className="service-img">
          {" "}
          <img src={se2} alt="se2" />{" "}
        </div>
        <div className="service-content">
          {" "}
          <h3 style={{ color: "#293a5c" }}>Development</h3>
          <p style={{ color: "#7a7e9a" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel
            sit maxime assumenda. maiores, magnam
          </p>
          <a href="/solution">Read More</a>
        </div>
      </div>
      <div className="single-service">
        <div className="service-img">
          {" "}
          <img src={se3} alt="se3" />{" "}
        </div>
        <div className="service-content">
          {" "}
          <h3 style={{ color: "#293a5c" }}>QA Testing</h3>
          <p style={{ color: "#7a7e9a" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel
            sit maxime assumenda. maiores, magnam
          </p>
          <a href="/solution">Read More</a>
        </div>
      </div>
      <div className="single-service">
        <div className="service-img">
          {" "}
          <img src={se4} alt="se4" />{" "}
        </div>
        <div className="service-content">
          {" "}
          <h3 style={{ color: "#293a5c" }}>IT Management</h3>
          <p style={{ color: "#7a7e9a" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel
            sit maxime assumenda. maiores, magnam
          </p>
          <a href="/solution">Read More</a>
        </div>
      </div>
      <div className="single-service">
        <div className="service-img">
          {" "}
          <img src={se5} alt="se5" />{" "}
        </div>
        <div className="service-content">
          {" "}
          <h3 style={{ color: "#293a5c" }}>Cyber Security</h3>
          <p style={{ color: "#7a7e9a" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel
            sit maxime assumenda. maiores, magnam
          </p>
          <a href="/solution">Read More</a>
        </div>
      </div>
      <div className="single-service">
        <div className="service-img">
          {" "}
          <img src={se6} alt="se6" />{" "}
        </div>
        <div className="service-content">
          {" "}
          <h3 style={{ color: "#293a5c" }}>Wireless Connectivity</h3>
          <p style={{ color: "#7a7e9a" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel
            sit maxime assumenda. maiores, magnam
          </p>
          <a href="/solution">Read More</a>
        </div>
      </div>
    </div>
  );
};
export default BoxIntro;
