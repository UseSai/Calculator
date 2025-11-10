"use strict";

let currentNumber = "0";
let previousNumber = null;
let chosenOperation;
let displayFlag = false;

const numbers = document.querySelectorAll(".number");
const action = document.querySelectorAll(".operation");
const equals = document.querySelector(".equals");
const dot = document.querySelector(".dot");
const display = document.querySelector(".display");

function displayUpdate() {
  if (currentNumber.length <= 19) {
    display.textContent = currentNumber;
  }
}

function inputDigit(digit) {
  digit = digit.toString();
  if (displayFlag === true || currentNumber === "0") {
    currentNumber = digit;
    displayFlag = false;
  } else if (displayFlag === false) {
    currentNumber += digit;
  }
  displayUpdate();
}

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    let digit = button.textContent;
    inputDigit(digit);
  });
});
