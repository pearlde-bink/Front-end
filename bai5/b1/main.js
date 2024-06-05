let array;
let array2;
const btnFill = document.querySelector(".fill");
const btnMulti = document.querySelector(".multi");
const btnAdd = document.querySelector(".add");
const btnAdjust = document.querySelector(".adjust");
const btnDel = document.querySelector(".del");
const btnAcs = document.querySelector(".asc");
const btnDes = document.querySelector(".des");
const btnSubmit = document.querySelector(".submit");
const displayArrayP = document.getElementById("display");
const displayArrayP2 = document.getElementById("display2");
const msg = document.querySelector(".msg");
//display in p tag
function displayArray() {
  displayArrayP.innerHTML = array.toString().split(", ");
}
function displayArray2() {
  displayArrayP2.innerHTML = array2.toString().split(", ");
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
  displayArray();
  displayArray2();
  displayMsg();
  //   unMsgInterval();
}

// Fill array
btnFill.addEventListener("click", () => {
  let oke = true;
  array = prompt("Fill this array.").split("");

  function isInteger(value) {
    return Number.isInteger(value);
  }

  //check length
  if (array.length == 0 || array.length >= 10) {
    alert("Array length should be between 0 and 10");
    array = [];
    oke = false;
  }

  //check integer
  for (let i = 0; i < array.length; i++) {
    if (!isInteger(parseInt(array[i]))) {
      alert("Array should only contain integers");
      array = [];
      oke = false;
      break;
    }
  }
  if (oke) {
    array2 = array.slice(0, array.length); //create new array
    groupFunc();
  }
});

// Multiply
function multiple(pos) {
  array2.push(array.at(pos - 1));
  groupFunc();
}

//Add
function add(val) {
  array2.push(val);
  groupFunc();
}

// Adjust
function adjust(pos, val) {
  array2[pos - 1] = val;
  groupFunc();
}

// Delete
function del(pos) {
  array2.splice(pos - 1, 1);
  groupFunc();
}

const multiPos = document.getElementById("multiInput");
const adjustPos = document.getElementById("adjustInput");
const delPos = document.getElementById("delInput");

const addValue = document.getElementById("addValue");
const adjustValue = document.getElementById("adjustValue");

btnMulti.addEventListener("click", () => {
  multiple(multiPos.value);
});

btnAdd.addEventListener("click", () => {
  add(addValue.value);
});

btnAdjust.addEventListener("click", () => {
  console.log("pos: ", adjustPos.value, "val: ", adjustValue.value);
  adjust(adjustPos.value, adjustValue.value);
});

btnDel.addEventListener("click", () => {
  const intDelPos = parseInt(delPos.value);
  del(intDelPos);
});

//sort asc
btnAcs.addEventListener("click", () => {
  array2.sort(function (a, b) {
    return a - b;
  });
  groupFunc();
});

//sort des
btnDes.addEventListener("click", () => {
  array2.sort(function (a, b) {
    return a - b;
  });
  array2.reverse();
  groupFunc();
});
