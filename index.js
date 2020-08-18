const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const path = require("path");
// Creating express server.
const app = express();

// using bady-parser as a middleware to extract body data from the request.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
  });
}

const port = process.env.PORT || 3001;

// Creating an instance of stringCompression function from stringFunctions.js
const stringFunctions = require("./stringFunctions");

const shorten = (req) => {
  var compressedString = stringFunctions.stringCompress(req["inputString"]);
  return compressedString;
};

const original = (req) => {
  var originalValue = stringFunctions.stringDecompress(req["inputString"]);
  return originalValue;
};

app.post("/shorten", (req, res) => {
  var body = req.body;
  var shortenValue = shorten(body);
  return res.status(200).send(shortenValue);
});

app.post("/original", (req, res) => {
  var body = req.body;
  var originalValue = original(body);
  return res.status(200).send(originalValue);
});

app.listen(port, () => {
  console.log("Server Up and running at PORT ", port);
});
