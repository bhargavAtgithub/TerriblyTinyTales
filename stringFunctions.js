const { response } = require("express");

function stringCompress(stringInput) {
  var power = 0;
  var value = 0;
  while (stringInput !== "") {
    value =
      value +
      26 ** power * (stringInput.charCodeAt(stringInput.length - 1) - 96);
    stringInput = stringInput.slice(0, stringInput.length - 1);
    power = power + 1;
  }
  return valueTo52Radix(value);
}

function valueTo52Radix(value) {
  var stringValue = value;
  var output = "";
  while (stringValue) {
    var symbol = radix52Symbol(stringValue % 52);
    output = `${symbol}${output}`;
    stringValue = parseInt(stringValue / 52);
  }
  return output;
}

function radix52Symbol(number) {
  if (number <= 25) {
    return String.fromCharCode(65 + number);
  } else {
    return String.fromCharCode(number - 26 + 97);
  }
}

function stringDecompress(stringInput) {
  var power = 0;
  var value = 0;
  while (stringInput !== "") {
    value =
      value +
      52 ** power * codeNumber(stringInput.charCodeAt(stringInput.length - 1));
    stringInput = stringInput.slice(0, stringInput.length - 1);
    power = power + 1;
  }
  return valueTo26Radix(value);
}

function codeNumber(asciiNum) {
  if (asciiNum < 91) {
    return asciiNum - 65;
  } else if (asciiNum > 96) {
    return asciiNum - 96 + 25;
  }
}

function valueTo26Radix(value) {
  var stringValue = value;
  var output = "";
  while (stringValue) {
    var symbol = radix26Symbol(stringValue % 26);
    output = `${symbol}${output}`;
    stringValue = parseInt(stringValue / 26);
  }
  return output;
}

function radix26Symbol(number) {
  return String.fromCharCode(96 + number);
}

module.exports = { stringCompress, stringDecompress };

// module.exports = { stringCompression, toOriginalString };
