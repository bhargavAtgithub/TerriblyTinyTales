import React from "react";

import "./TextBox.styles.scss";

const TextBox = ({ ip, handleChange, readOnly = false }) => {
  return (
    <div className="textBox">
      <textarea
        className="textArea"
        rows="20"
        cols="50"
        placeholder="Enter the string here"
        readOnly={readOnly}
      ></textarea>
    </div>
  );
};

export default TextBox;
