import React from "react";
import case1 from "../../../images/cases/case-studies1.jpg";
import case2 from "../../../images/cases/case-studies2.jpg";
import case3 from "../../../images/cases/case-studies3.jpg";
import case4 from "../../../images/cases/case-studies4.jpg";
import case5 from "../../../images/cases/case-studies5.jpg";
const HomeCase = () => {
  return (
    <div className="home_case">
      <div className="container">
        <div className="section-title">
          <h2>Case Studies</h2>
          <h2>Have a Look Our Work Showcase</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse.
          </p>{" "}
          <a href="/">View Project Details</a>
        </div>
        <div className="row home_case-list">
          <div className="single-case">
            <div className="case-img">
              <img src={case1} alt="case" />
            </div>
            <div className="content-case">
              <h3>Joe’s Company Software Development Case</h3>
              <p>
                Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing
                elit, sed do eiudvi smod tempor incididunt ipsum dolor.
              </p>{" "}
              <a href="/">View Project Details</a>
            </div>
          </div>
          <div className="single-case">
            <div className="case-img">
              {" "}
              <img src={case2} alt="case" />
            </div>
            <div className="content-case">
              <h3>Ride Share App UX Studies & Development Case</h3>
              <p>
                Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing
                elit, sed do eiudvi smod tempor incididunt ipsum dolor.
              </p>{" "}
              <a href="/">View Project Details</a>
            </div>
          </div>
          <div className="single-case">
            <div className="case-img">
              {" "}
              <img src={case3} alt="case" />
            </div>
            <div className="content-case">
              <h3>Restaurant Management & Web Developing</h3>
              <p>
                Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing
                elit, sed do eiudvi smod tempor incididunt ipsum dolor.
              </p>
              <a href="/">View Project Details</a>
            </div>
          </div>
          <div className="single-case">
            <div className="case-img">
              {" "}
              <img src={case4} alt="case" />
            </div>
            <div className="content-case">
              <h3>IT Software Company Development Case</h3>
              <p>
                Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing
                elit, sed do eiudvi smod tempor incididunt ipsum dolor.
              </p>{" "}
              <a href="/">View Project Details</a>
            </div>
          </div>
          <div className="single-case">
            <div className="case-img">
              {" "}
              <img src={case5} alt="case" />
            </div>
            <div className="content-case">
              <h3>Parking Management & Web Developing</h3>
              <p>
                Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing
                elit, sed do eiudvi smod tempor incididunt ipsum dolor.
              </p>{" "}
              <a href="/">View Project Details</a>
            </div>
          </div>
          <div className="single-case">
            <div className="case-img">
              {" "}
              <img src={case5} alt="case" />
            </div>
            <div className="content-case">
              <h3>Temperature App UX Studies & Development Case</h3>
              <p>
                Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing
                elit, sed do eiudvi smod tempor incididunt ipsum dolor.
              </p>{" "}
              <a href="/">View Project Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeCase;
