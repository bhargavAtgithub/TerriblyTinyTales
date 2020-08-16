import React from "react";

import "./Title.styles.scss";

import SubTitle from "../SubTitle/SubTitle.component";

const Title = ({ title }) => {
  return (
    <div className="title">
      <h1 className="titleHeader">{title}</h1>
    </div>
  );
};

export default Title;
