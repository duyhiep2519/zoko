import React from "react";
import next from "../../../images/process/next.png";
import pro1 from "../../../images/process/process1.png";
import pro2 from "../../../images/process/process2.png";
import pro3 from "../../../images/process/process3.png";
import pro4 from "../../../images/process/process4.png";

const Process = () => {
  return (
    <div className="home_process">
      <div className="container">
        <div className="section-tittle">
          <h2>Working Process</h2>
          <h2>We are popular because of our way of working</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse.
          </p>
          <div className="row">
            <div className="single-process">
              <div className="icon">
                <img src={pro1} alt="icon" />
                <span className="icon">
                  <img alt="next" src={next} />
                </span>
              </div>
              <div className="content">
                {" "}
                <h3>Research Product</h3>
                <p>
                  Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
            <div className="single-process process2">
              <div className="icon">
                <img alt="icon" src={pro2} />
                <span className="icon">
                  <img alt="next" src={next} />
                </span>
              </div>
              <div className="content">
                <h3>User Testing</h3>
                <p>
                  Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
            <div className="single-process">
              <div className="icon">
                <img alt="icon" src={pro3} />
                <span className="icon">
                  <img alt="next" src={next} />
                </span>
              </div>
              <div className="content">
                <h3>Development</h3>
                <p>
                  Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
            <div className="single-process">
              <div className="icon">
                <img alt="icon" src={pro4} />
              </div>
              <div className="content">
                <h3>Product Handover</h3>
                <p>
                  Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Process;
