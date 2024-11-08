/* ALGORITHM/PSEUDOCODE
  - We click on a button and it get's added to our string in the display section
  - When we hit "=" (equal button), we evaluate the expression is display
  - Last, we display the result
  - Optional:
    - Add buttons for "()""
*/

// - - - Bringing HTML Elements to JS
// Display Paragraph element
const resultDisplay = document.querySelector(".result-text");

// Number Buttons
const zeroBtn = document.querySelector(".zero-btn");
const oneBtn = document.querySelector(".one-btn");
const twoBtn = document.querySelector(".two-btn");
const threeBtn = document.querySelector(".three-btn");
const fourBtn = document.querySelector(".four-btn");
const fiveBtn = document.querySelector(".five-btn");
const sixBtn = document.querySelector(".six-btn");
const sevenBtn = document.querySelector(".seven-btn");
const eightBtn = document.querySelector(".eight-btn");
const nineBtn = document.querySelector(".nine-btn");

// Symbol Buttons
const clearBtn = document.querySelector(".clear-btn");
const divideBtn = document.querySelector(".divide-btn");
const multiplyBtn = document.querySelector(".multiply-btn");
const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const decimalBtn = document.querySelector(".decimal-btn");
const equalBtn = document.querySelector(".equal-btn");

// String var for display result
let currentCalc = "";

// --- Event Listeners and their keyup counterparts
// Number Buttons Event Listeners
zeroBtn.addEventListener("click", () => {
  currentCalc += 0;
  resultDisplay.innerHTML = currentCalc;
});
document.body.addEventListener("keyup", (event) => {
  if (event.key === "0") {
    currentCalc += 0;
    resultDisplay.innerHTML = currentCalc;
  }
});

oneBtn.addEventListener("click", () => {
  currentCalc += 1;
  resultDisplay.innerHTML = currentCalc;
});
document.body.addEventListener("keyup", (event) => {
  if (event.key === "1") {
    currentCalc += 1;
    resultDisplay.innerHTML = currentCalc;
  }
});

twoBtn.addEventListener("click", () => {
  currentCalc += 2;
  resultDisplay.innerHTML = currentCalc;
});
document.body.addEventListener("keyup", (event) => {
  if (event.key === "2") {
    currentCalc += 2;
    resultDisplay.innerHTML = currentCalc;
  }
});

threeBtn.addEventListener("click", () => {
  currentCalc += 3;
  resultDisplay.innerHTML = currentCalc;
});
document.body.addEventListener("keyup", (event) => {
  if (event.key === "3") {
    currentCalc += 3;
    resultDisplay.innerHTML = currentCalc;
  }
});

fourBtn.addEventListener("click", () => {
  currentCalc += 4;
  resultDisplay.innerHTML = currentCalc;
});
document.body.addEventListener("keyup", (event) => {
  if (event.key === "4") {
    currentCalc += 4;
    resultDisplay.innerHTML = currentCalc;
  }
});

fiveBtn.addEventListener("click", () => {
  currentCalc += 5;
  resultDisplay.innerHTML = currentCalc;
});
document.body.addEventListener("keyup", (event) => {
  if (event.key === "5") {
    currentCalc += 5;
    resultDisplay.innerHTML = currentCalc;
  }
});

sixBtn.addEventListener("click", () => {
  currentCalc += 6;
  resultDisplay.innerHTML = currentCalc;
});
document.body.addEventListener("keyup", (event) => {
  if (event.key === "6") {
    currentCalc += 6;
    resultDisplay.innerHTML = currentCalc;
  }
});

sevenBtn.addEventListener("click", () => {
  currentCalc += 7;
  resultDisplay.innerHTML = currentCalc;
});
document.body.addEventListener("keyup", (event) => {
  if (event.key === "7") {
    currentCalc += 7;
    resultDisplay.innerHTML = currentCalc;
  }
});

eightBtn.addEventListener("click", () => {
  currentCalc += 8;
  resultDisplay.innerHTML = currentCalc;
});
document.body.addEventListener("keyup", (event) => {
  if (event.key === "8") {
    currentCalc += 8;
    resultDisplay.innerHTML = currentCalc;
  }
});

nineBtn.addEventListener("click", () => {
  currentCalc += 9;
  resultDisplay.innerHTML = currentCalc;
});
document.body.addEventListener("keyup", (event) => {
  if (event.key === "9") {
    currentCalc += 9;
    resultDisplay.innerHTML = currentCalc;
  }
});

// Symbol Buttons Event Listeners
decimalBtn.addEventListener("click", () => {
  currentCalc += ".";
  resultDisplay.innerHTML = currentCalc;
});
document.body.addEventListener("keyup", (event) => {
  if (event.key === ".") {
    currentCalc += ".";
    resultDisplay.innerHTML = currentCalc;
  }
});

divideBtn.addEventListener("click", () => {
  currentCalc += " / ";
  resultDisplay.innerHTML = currentCalc;
});
document.body.addEventListener("keyup", (event) => {
  if (event.key === "/") {
    currentCalc += " / ";
    resultDisplay.innerHTML = currentCalc;
  }
});

multiplyBtn.addEventListener("click", () => {
  currentCalc += " * ";
  resultDisplay.innerHTML = currentCalc;
});
document.body.addEventListener("keyup", (event) => {
  if (event.key === "*") {
    currentCalc += " * ";
    resultDisplay.innerHTML = currentCalc;
  }
});

minusBtn.addEventListener("click", () => {
  currentCalc += " - ";
  resultDisplay.innerHTML = currentCalc;
});
document.body.addEventListener("keyup", (event) => {
  if (event.key === "-") {
    currentCalc += " - ";
    resultDisplay.innerHTML = currentCalc;
  }
});

plusBtn.addEventListener("click", () => {
  currentCalc += " + ";
  resultDisplay.innerHTML = currentCalc;
});
document.body.addEventListener("keyup", (event) => {
  if (event.key === "+") {
    currentCalc += " + ";
    resultDisplay.innerHTML = currentCalc;
  }
});

// Clear and Equal Event Listeners
clearBtn.addEventListener("click", () => {
  currentCalc = "";
  resultDisplay.innerHTML = "Cleared...";
});
document.body.addEventListener("keyup", (event) => {
  if (event.key === "c") {
    currentCalc = "";
    resultDisplay.innerHTML = "Cleared...";
  }
});

equalBtn.addEventListener("click", () => {
  currentCalc = eval(currentCalc);
  resultDisplay.innerHTML = currentCalc;
});

document.body.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    currentCalc = eval(currentCalc);
    resultDisplay.innerHTML = currentCalc;
  }
});

document.body.addEventListener("keyup", (event) => {
  if (event.key === "=") {
    currentCalc = eval(currentCalc);
    resultDisplay.innerHTML = currentCalc;
  }
});


/*
  - Put a set interval time on it
*/