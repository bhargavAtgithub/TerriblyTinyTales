const { response } = require("express");

// function stringCompression(inputString) {
//   var index = 0;
//   var compressedString = "";
//   var lengthOfString = inputString.length;
//   while (index !== lengthOfString) {
//     var count = 1;

//     while (
//       index < lengthOfString - 1 &&
//       inputString[index] === inputString[index + 1]
//     ) {
//       count = count + 1;
//       index = index + 1;
//     }
//     if (count === 1) {
//       compressedString = compressedString + inputString[index];
//     } else {
//       compressedString = compressedString + inputString[index] + count;
//     }
//     index = index + 1;
//   }
//   return compressedString;
// }

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
    } else if (Number.isInteger(parseInt(code[index]))) {
      var letter = code[index - 1];
      var number = parseInt(code[index]);
      while (Number.isInteger(parseInt(code[index + 1]))) {
        number = number * 10 + parseInt(code[index + 1]);
        index = index + 1;
      }
      originalString = originalString + letter.repeat(number);
      index = index + 1;
      currentLetter = code[index];
    }
  }
  return originalString;
}

// function radix26To52(stringNumericValue) {
//   var value = "";
//   var stringValue = stringNumericValue;
//   while (stringValue !== 0) {
//     var symbol = radix52Symbol(stringValue % 52);
//     value = `${symbol}${value}`;
//     stringValue = parseInt(stringValue / 52);
//   }
//   return value;
// }

// function radix52Symbol(number) {
//   var charCode = 65 + number;
//   var symbol = String.fromCharCode(charCode);
//   return symbol;
// }

function stringToNumber(stringInput) {
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
    var symbol = radix52Symbol((stringValue % 52) + 1);
    output = `${symbol}${output}`;
    stringValue = parseInt(stringValue / 52);
  }
  return output;
}

function radix52Symbol(number) {
  if (number <= 26) {
    return String.fromCharCode(64 + number);
  } else {
    return String.fromCharCode(number - 26 + 96);
  }
}

module.exports = { stringToNumber };

// module.exports = { stringCompression, toOriginalString };
