import React, { useState } from "react";
import "./Accordion.css";
const Accordion = ({ tittle, content }) => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <div className="accordion-wrapper">
      <div
        className="accordion-title"
        onClick={() => {
          setShow(!show);
        }}
      >
        {!show && <i className="fas fa-arrow-circle-right"></i>}
        {show && <i className="fas fa-arrow-circle-down"></i>}
        {tittle}
      </div>
      {show && visible && <div className="accordion-content">{content}</div>}
    </div>
  );
};
export default Accordion;
