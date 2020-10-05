import React from "react";
import feature_img from "../../../images/feature-img.png";
const Feature = () => {
  return (
    <div className="feature">
      <div className="container">
        <div className="row align-items-center row-feature">
          <div className="feature-left">
            <div className="feature-title">
              <h2>Features</h2>
              <h2>We Have Also Some Features That Provided by Zoko</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt consectetur, beatae quod eaque reprehenderit non ab
                quibusdam doloribus voluptatibus! Voluptatum aspernatur quasi id
                dolore doloremque quo vero
              </p>
            </div>
            <ul>
              <li>
                <i className="far fa-check-circle"></i>
                Freelancing Training Course
              </li>
              <li>
                <i className="far fa-check-circle"></i>
                Technological Consultation
              </li>
              <li>
                <i className="far fa-check-circle"></i>
                Monthly Paid Workspace
              </li>
              <li>
                <i className="far fa-check-circle"></i>
                IT Learning Institute
              </li>
              <li>
                <i className="far fa-check-circle"></i>
                Digital Marketing
              </li>
            </ul>

            <div style={{display:"flex"}}><a className="box-btn letsTalk" href="/">
              Lets Talk!
            </a></div>
          </div>
          <div className="feature-right">
            <img alt="feature-img" src={feature_img} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feature;
