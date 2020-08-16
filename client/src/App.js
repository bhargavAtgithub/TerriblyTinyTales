import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Row from "./components/Row/Row.component";
import Col from "./components/Col/Col.component";
import Title from "./components/Title/Title.component";
import TextBox from "./components/TextBox/TextBox.component";
import SubTitle from "./components/SubTitle/SubTitle.component";
import Container from "./components/Container/Container.component";
import CustomButton from "./components/CustomButton/CustomButton.component";
function App() {
  const [algo, setAlgo] = useState("ENCRYPT");

  const handleAlgo = () => {
    if (algo == "ENCRYPT") {
      setAlgo("DECRYPT");
    } else {
      setAlgo("ENCRYPT");
    }
  };

  return (
    <div className="App">
      <Row>
        <Col>
          <Title title="String Shortener" />
          <SubTitle subTitle="A TTT assignment" />
        </Col>
      </Row>
      <Row>
        <Container>
          <TextBox />
        </Container>
        <CustomButton
          icon="sync_alt"
          buttonTitle={algo}
          handleClick={handleAlgo}
        />
        <Container>
          <TextBox readOnly={true} />
        </Container>
      </Row>
    </div>
  );
}

export default App;
