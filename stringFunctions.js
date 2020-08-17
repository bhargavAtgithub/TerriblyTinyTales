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
  while (index < lengthOfCode) {
    console.log("index", index, "lengthOFCode", lengthOfCode);
    if (!Number.isInteger(parseInt(code[index]))) {
      originalString = originalString + currentLetter;
      index = index + 1;
      currentLetter = code[index];
      console.log(
        "originalString",
        originalString,
        "index",
        index,
        "currentLetter",
        currentLetter
      );
    } else if (Number.isInteger(parseInt(code[index]))) {
      originalString =
        originalString + code[index - 1].repeat(currentLetter - 1);
      index = index + 1;
      currentLetter = code[index];
      console.log(
        "originalString",
        originalString,
        "index",
        index,
        "currentLetter",
        currentLetter
      );
    }
  }
  return originalString;
}

module.exports = { stringCompression, toOriginalString };
