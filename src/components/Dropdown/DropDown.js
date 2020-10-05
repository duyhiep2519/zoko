import React from "react";
import "./DropDown.css";
const DropDown = (props) => {
  const { array } = props;
  return (
    <div className="dropdown">
      {array && (
        <ul className="dropdown-menu">
          {array.map((item, key) => (
            <li key={key}> {item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default DropDown;
