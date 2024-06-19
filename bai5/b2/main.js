let string;
let string2;
const btnFill = document.querySelector(".fill");
const btnLength = document.querySelector(".length");
const btnAdd = document.querySelector(".add");
const btnAdjust = document.querySelector(".adjust");
const btnAdjustEach = document.querySelector(".adjustEach");
const btnDel = document.querySelector(".del");
const btnCap = document.querySelector(".cap");
const btnNor = document.querySelector(".nor");
const btnSubmit = document.querySelector(".submit");
const displayStringP = document.getElementById("display");
const displayStringP2 = document.getElementById("display2");
const lengthText = document.getElementById("lengthText");
const msg = document.querySelector(".msg");
//display in p tag
function displayString() {
  displayStringP.innerHTML = string.toString();
}
function displayString2() {
  displayStringP2.innerHTML = string2.toString();
}

function displayMsg() {
  msg.style.display = "block";
  msg.innerHTML = "Functionize successfully";
  console.log("display");

  setTimeout(unDisplayMsg, 1000);
}
function unDisplayMsg() {
  msg.style.display = "none";
  console.log("un display");
}

function groupFunc() {
  displayString();
  displayString2();
  displayMsg();
  //   unMsgInterval();
}

// Fill string
btnFill.addEventListener("click", () => {
  let oke = true;
  string = prompt("Fill this string.");

  function isInteger(value) {
    return Number.isInteger(value);
  }

  //check length
  if (string.length <= 10) {
    alert("Array length should be bigger than 10");
    string = "";
    oke = false;
  }

  if (oke) {
    string2 = string.slice(0, string.length); //create new string
    groupFunc();
  }
});

// length
btnLength.addEventListener("click", () => {
  lengthText.innerHTML = string2.length;
});

//concat
btnAdd.addEventListener("click", () => {
  let newStr = prompt("Enter new string to concat");
  console.log("newStr: ", newStr);
  let string3 = string2.concat(" ", newStr);
  string2 = string3;
  console.log("string2: ", string2);
  groupFunc();
});

//adjust
btnAdjust.addEventListener("click", () => {
  string2 = prompt("Type adjust string: ");
  groupFunc();
});

//adjustEac
btnAdjustEach.addEventListener("click", () => {
  const pos = document.getElementById("adjustInput").value - 1;
  let newVal = prompt("Type adjust string: ");
  console.log("pos: ", pos);
  console.log("newVal: ", newVal);
  string2 = string2.slice(0, pos) + newVal + string2.slice(pos + 1);
  console.log(string2);
  groupFunc();
});

//del
btnDel.addEventListener("click", () => {
  string2 = "";
  groupFunc();
});

//capitalize
btnCap.addEventListener("click", () => {
  string2 = string2.toUpperCase();
  console.log("cap: ", string2);
  groupFunc();
});

//normalize
btnNor.addEventListener("click", () => {
  string2 = string2.toLowerCase();
  console.log("nor: ", string2);
  groupFunc();
});
