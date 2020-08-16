 import React from "react";

import "./Container.styles.scss";

const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
