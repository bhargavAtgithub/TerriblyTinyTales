import React from "react";

import "./TextBox.styles.scss";

const TextBox = ({ placeHolder, ip, handleChange, readOnly = false }) => {
  return (
    <div className="textBox">
      <textarea
        className="textArea"
        rows="20"
        cols="50"
        value={ip}
        onChange={(e) => handleChange(e)}
        placeholder={placeHolder}
        readOnly={readOnly}
      ></textarea>
    </div>
  );
};

export default TextBox;
