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
  const [inputString, setInputString] = useState("");
  const [outputString, setOutputString] = useState("");

  const handleAlgo = () => {
    if (algo === "ENCRYPT") {
      setAlgo("DECRYPT");
    } else {
      setAlgo("ENCRYPT");
    }
    setInputString("");
    setOutputString("");
  };

  const handleInputChange = (e) => {
    setInputString(e.target.value);
  };

  const convert = async () => {
    var output = "";
    var url = "";
    if (algo === "ENCRYPT") {
      url = "https://pacific-beyond-02926.herokuapp.com//shorten";
    } else if (algo === "DECRYPT") {
      url = "https://pacific-beyond-02926.herokuapp.com//original";
    }
    output = await fetch(url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        inputString: inputString,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setOutputString(await output.text());
  };

  return (
    <div className="App">
      <Row>
        <Col>
          <Title title="String Shortener" />
          <SubTitle subTitle="----- A TTT ASSIGNMENT -----" />
        </Col>
      </Row>
      <Row>
        <Container>
          <TextBox
            placeHolder="Enter input string"
            ip={inputString}
            handleChange={handleInputChange}
          />
        </Container>
        <Col>
          <CustomButton
            icon="sync_alt"
            buttonTitle={algo}
            handleClick={handleAlgo}
          />
          <CustomButton
            buttonTitle={"CONVERT"}
            handleClick={convert}
            border="border"
          />
        </Col>

        <Container>
          <TextBox
            placeHolder="Here comes the output"
            readOnly={true}
            ip={outputString}
          />
        </Container>
      </Row>
    </div>
  );
}

export default App;
