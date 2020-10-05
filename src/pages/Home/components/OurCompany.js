import React from "react";
import company_img from "../../../images/company-img.jpg";

const OurCompany = () => {
  return (
    <div className="home_company">
      <div className="container home_company-content">
        <div className="row align-items-center row_home_company ">
          <div className="home_company-title">
            <h2>Our Company</h2>
            <h2>Innovative It Helping Service All Over the World</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the rea dable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more or less normal
              distribution of letters, as opposed to using Content here,content
              here normal distribution looking at its.
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form variations
              passages.
            </p>
            <div style={{ display: "flex" }}>
              <a className="box-btn" href="/about">
                Know More{" "}
              </a>
            </div>
          </div>
          <div className="home_company-img">
            <img
              alt="company-img"
              className="company-img"
              src={company_img}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurCompany;
