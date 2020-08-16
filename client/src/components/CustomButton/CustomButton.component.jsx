import React from "react";

import "./CustomButton.styles.scss";

const CustomButton = ({ icon, buttonTitle, handleClick }) => {
  return (
    <button className="custom-button" onClick={handleClick}>
      {icon && <span className="material-icons">{icon}</span>}
      <span className="buttonTitle">{buttonTitle}</span>
    </button>
  );
};

export default CustomButton;
