import React from "react";
import Accordion from "../../../components/Accordion/Accordion";
import choose_img from "../../../images/choose-img.png";
const Choose = () => {
  
  return (
    <div className="choose_area ">
      <div className="container">
        <div className="choose_area-title">
          <h2>Why Choose Us</h2>
          <h2>We Achieved People’s Trust by Our Great Service</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse.
          </p>
        </div>
        <div className="row align-items-center row-choose ">
          <div className="choose-img">
            <img className="choose-img" src={choose_img} alt="choose-img" />
          </div>
          <div className="accordion">
            <Accordion
             
              tittle="Great Understanding"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing."
            ></Accordion>
            <Accordion
              tittle="Update Technology"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing."
            ></Accordion>
            <Accordion
              tittle="Experienced Team"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing."
            ></Accordion>
            <Accordion
              tittle="Best Quality Service"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing."
            ></Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Choose;
