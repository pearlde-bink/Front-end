let displayText = document.querySelector(".display");
let preDisplay = document.querySelector(".pre-display");
let preDisplayText = "";

function getValue(event) {
  let ele = event.currentTarget;
  let val = ele.getAttribute("data-value");
  displayText.innerHTML = val;
  preDisplayText += val;
  preDisplay.innerHTML = preDisplayText;
}

function clearCal() {
  displayText.innerHTML = "0";
  preDisplay.innerHTML = "";
  preDisplayText = "";
  console.log("clear");
}

function isInt(x) {
  return x % 1 === 0;
}

function calculate() {
  let expression = preDisplayText;
  expression = expression.replace(/sqrt/g, "Math.sqrt("); //replace "sqrt" if expression contains sqrt
  const ind = expression.indexOf("Math.sqrt(");
  if (ind !== -1) {
    let indNum = ind + 11; //Math.sqrt( length is 11, cal from number inside
    let cnt = 0; //to count number length inside sqrt

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

    const res = eval(expression);
    displayText.style.fontSize = "75px";
    if (isInt(res)) displayText.innerHTML = res;
    else displayText.innerHTML = res.toFixed(8);
  } catch (e) {
    displayText.innerHTML = "Recheck operators";
    displayText.style.fontSize = "30px";
  }
}
