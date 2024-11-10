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
const deleteBtn = document.querySelector(".delete-btn");
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

// Decimal logic
let isDecimalLocked = false;
decimalBtn.addEventListener("click", () => {
  // If the decimalBtn is locked, bail out of the function.
  if (isDecimalLocked) {
    return;
  } // If decimalBtn is not locked, we want to put it on our display, if it falls under these conditons
  else if (!isDecimalLocked) {
    if (currentCalc.slice(-1) === "." || currentCalc.slice(-1) === " ") {
      return;
    }
    // Regex to check if last char in currentCalc is a digit,
    else if (/\d/.test(currentCalc.slice(-1)) && !isDecimalLocked) {
      currentCalc += ".";
      resultDisplay.innerHTML = currentCalc;
      isDecimalLocked = true;
    }
  }
});

document.body.addEventListener("keyup", (event) => {
  if (event.key === ".") {
    // If the decimalBtn is locked, bail out of the function.
    if (isDecimalLocked) {
      return;
    } // If decimalBtn is not locked, we want to put it on our display, if it falls under these conditons
    else if (!isDecimalLocked) {
      if (currentCalc.slice(-1) === "." || currentCalc.slice(-1) === " ") {
        return;
      }
      // Regex to check if last char in currentCalc is a digit,
      else if (/\d/.test(currentCalc.slice(-1)) && !isDecimalLocked) {
        currentCalc += ".";
        resultDisplay.innerHTML = currentCalc;
        isDecimalLocked = true;
      }
    }
  }
});

divideBtn.addEventListener("click", () => {
  if (currentCalc.slice(-3) === " / " || currentCalc === "") {
    return;
  } else if (
    currentCalc.slice(-3) === " * " ||
    currentCalc.slice(-3) === " + " ||
    currentCalc.slice(-3) === " - "
  ) {
    currentCalc = currentCalc.slice(0, currentCalc.length - 3) + " / ";
    resultDisplay.innerHTML = currentCalc;
    // Reset decimal lock
    isDecimalLocked = false;
  } else {
    currentCalc += " / ";
    resultDisplay.innerHTML = currentCalc;
    // Reset decimal lock
    isDecimalLocked = false;
  }
});
document.body.addEventListener("keyup", (event) => {
  if (event.key === "/") {
    currentCalc += " / ";
    resultDisplay.innerHTML = currentCalc;
    // Reset decimal lock
    isDecimalLocked = false;
  }
});

multiplyBtn.addEventListener("click", () => {
  if (currentCalc.slice(-3) === " * " || currentCalc === "") {
    return;
  } else if (
    currentCalc.slice(-3) === " / " ||
    currentCalc.slice(-3) === " + " ||
    currentCalc.slice(-3) === " - "
  ) {
    currentCalc = currentCalc.slice(0, currentCalc.length - 3) + " * ";
    resultDisplay.innerHTML = currentCalc;
    // Reset decimal lock
    isDecimalLocked = false;
  } else {
    currentCalc += " * ";
    resultDisplay.innerHTML = currentCalc;
    // Reset decimal lock
    isDecimalLocked = false;
  }
});
document.body.addEventListener("keyup", (event) => {
  if (event.key === "*") {
    currentCalc += " * ";
    resultDisplay.innerHTML = currentCalc;
    // Reset decimal lock
    isDecimalLocked = false;
  }
});

minusBtn.addEventListener("click", () => {
  if (currentCalc.slice(-3) === " - " || currentCalc === "") {
    return;
  } else if (
    currentCalc.slice(-3) === " * " ||
    currentCalc.slice(-3) === " + " ||
    currentCalc.slice(-3) === " / "
  ) {
    currentCalc = currentCalc.slice(0, currentCalc.length - 3) + " - ";
    resultDisplay.innerHTML = currentCalc;
    // Reset decimal lock
    isDecimalLocked = false;
  } else {
    currentCalc += " - ";
    resultDisplay.innerHTML = currentCalc;
    // Reset decimal lock
    isDecimalLocked = false;
  }
});
document.body.addEventListener("keyup", (event) => {
  if (event.key === "-") {
    currentCalc += " - ";
    resultDisplay.innerHTML = currentCalc;
    // Reset decimal lock
    isDecimalLocked = false;
  }
});

plusBtn.addEventListener("click", () => {
  if (currentCalc.slice(-3) === " + " || currentCalc === "") {
    return;
  } else if (
    currentCalc.slice(-3) === " * " ||
    currentCalc.slice(-3) === " / " ||
    currentCalc.slice(-3) === " - "
  ) {
    currentCalc = currentCalc.slice(0, currentCalc.length - 3) + " + ";
    resultDisplay.innerHTML = currentCalc;
    // Reset decimal lock
    isDecimalLocked = false;
  } else {
    currentCalc += " + ";
    resultDisplay.innerHTML = currentCalc;
    // Reset decimal lock
    isDecimalLocked = false;
  }
});
document.body.addEventListener("keyup", (event) => {
  if (event.key === "+") {
    currentCalc += " + ";
    resultDisplay.innerHTML = currentCalc;
    // Reset decimal lock
    isDecimalLocked = false;
  }
});

// Clear and Equal Event Listeners
clearBtn.addEventListener("click", () => {
  currentCalc = "";
  resultDisplay.innerHTML = "0";
  isDecimalLocked = false;
});
document.body.addEventListener("keyup", (event) => {
  if (event.key === "c" || event.key === "C") {
    currentCalc = "";
    resultDisplay.innerHTML = "0";
  }
  // Reset decimal lock
  isDecimalLocked = false;
});

equalBtn.addEventListener("click", () => {
  if (currentCalc === "") {
    return;
  } else if (currentCalc.includes(" / 0")) {
    alert("You can't divide by 0");
  } else {
    // eval() makes converts currentCalc from string to number. Keep it a string so deleteBtn can slice().
    currentCalc = String(eval(currentCalc));
    resultDisplay.innerHTML = currentCalc;
  }
});

document.body.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    if (currentCalc.includes(" / 0")) {
      alert("You can't divide by 0");
    } else {
      // eval() makes converts currentCalc from string to number. Keep it a string so deleteBtn can slice().
      currentCalc = String(eval(currentCalc));
      resultDisplay.innerHTML = currentCalc;
    }
  }
});

document.body.addEventListener("keyup", (event) => {
  if (event.key === "=") {
    if (currentCalc.includes(" / 0")) {
      alert("You can't divide by 0");
    } else {
      // eval() makes converts currentCalc from string to number. We'll keep it a string so deleteBtn can slice() it. slice() won't work with numbers.
      currentCalc = String(eval(currentCalc));
      resultDisplay.innerHTML = currentCalc;
    }
  }
});

// Delete Button Event Listeners
deleteBtn.addEventListener("click", () => {
  // Slicing/keeping all but the last character in currentCalc, effectively deleting the last character.
  currentCalc = currentCalc.slice(0, -1);
  resultDisplay.innerHTML = currentCalc || "0";
});

document.body.addEventListener("keyup", (event) => {
  if (event.key === "Backspace") {
    // Slicing/keeping all but the last character in currentCalc, effectively deleting the last character.
    currentCalc = currentCalc.slice(0, -1);
    resultDisplay.innerHTML = currentCalc || "0";
  }
});
