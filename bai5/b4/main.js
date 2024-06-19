let displayText = document.querySelector(".display");
let preDisplay = document.querySelector(".pre-display");
let preDisplayText = "";
let ele, val;
let lastResult = ""; // to store the last calculation result

function getValue(event) {
  ele = event.currentTarget;
  val = ele.getAttribute("data-value");

  if (isOperator(val)) {
    // Perform calculation and append new operator
    if (!isOperator(preDisplayText.slice(-1))) {
      if (preDisplayText.includes("=")) {
        // If the preDisplayText contains '=', start a new expression with lastResult
        preDisplayText = lastResult + val;
      } else {
        calculate(false); // Calculate the current expression
        preDisplayText = lastResult + val;
      }
    } else {
      // Replace the last operator with the new one
      preDisplayText = preDisplayText.slice(0, -1) + val;
    }
  } else {
    if (preDisplayText.includes("=")) {
      // Start a new expression if '=' was in the last display
      preDisplayText = val;
    } else {
      preDisplayText += val;
    }
  }

  preDisplay.innerHTML = preDisplayText;
}

function isOperator(char) {
  return ["+", "-", "*", "/", "%", "**"].includes(char);
}

function clearCal() {
  displayText.innerHTML = "0";
  preDisplay.innerHTML = "";
  preDisplayText = "";
  lastResult = "";
  console.log("clear");
}

function isInt(x) {
  return x % 1 === 0;
}

function calculate(updatePreDisplay = true) {
  let expression = preDisplayText;

  if (isOperator(expression.slice(-1))) {
    // Remove the last operator for evaluation
    expression = expression.slice(0, -1);
  }

  expression = expression.replace(/sqrt/g, "Math.sqrt("); // replace "sqrt" if expression contains sqrt
  const ind = expression.indexOf("Math.sqrt(");
  if (ind !== -1) {
    let indNum = ind + 11; // Math.sqrt( length is 11, cal from number inside
    let cnt = 0; // to count number length inside sqrt

    while (
      indNum < expression.length &&
      !isNaN(expression[indNum + cnt]) &&
      expression[indNum + cnt] !== " " &&
      expression[indNum + cnt] !== ")"
    ) {
      cnt++;
    }

    expression =
      expression.slice(0, indNum + cnt) + ")" + expression.slice(indNum + cnt);
  }

  try {
    console.log("expression: ", expression);

    displayText.style.fontSize = "75px";
    let res = 0;
    res = eval(expression);
    lastResult = res; // store the result for the next operation

    if (updatePreDisplay) {
      preDisplayText = expression + " = " + res;
    }
    preDisplay.innerHTML = preDisplayText;
    displayText.innerHTML = isInt(res) ? res : res.toFixed(8);
  } catch (e) {
    displayText.innerHTML = "Recheck operators";
    displayText.style.fontSize = "30px";
  }
}
