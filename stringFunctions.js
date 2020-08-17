const { response } = require("express");

function stringCompression(inputString) {
  var index = 0;
  var compressedString = "";
  var lengthOfString = inputString.length;
  while (index !== lengthOfString) {
    var count = 1;

    while (
      index < lengthOfString - 1 &&
      inputString[index] === inputString[index + 1]
    ) {
      count = count + 1;
      index = index + 1;
    }
    if (count === 1) {
      compressedString = compressedString + inputString[index];
    } else {
      compressedString = compressedString + inputString[index] + count;
    }
    index = index + 1;
  }
  return compressedString;
}

function toOriginalString(code) {
  var index = 0;
  var originalString = "";
  var lengthOfCode = code.length;
  var currentLetter = code[index];
  while (index !== lengthOfCode) {
    if (!Number.isInteger(parseInt(code[index]))) {
      originalString = originalString + currentLetter;
      index = index + 1;
      currentLetter = code[index];
    } else if (Number.isInteger(parseInt(code[index]))) {
      originalString = originalString + originalString[-1].repeat(code[index]);
      index = index + 1;
      currentLetter = code[index];
    }
  }
  return originalString;
}

module.exports = { stringCompression, toOriginalString };
