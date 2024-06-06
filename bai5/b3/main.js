let table = document.getElementById("myTable");
let rows = table.rows;
let shouldSwitch, x, y;

const btnName = document.querySelector(".btn.name");
const btnMath = document.querySelector(".btn.math");
const btnLitera = document.querySelector(".btn.litera");
const btnAvg = document.querySelector(".btn.avg");

function sortByName() {
  let switching = true;
  while (switching) {
    switching = false; //no switch done yet
    let i;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false; //start by saying there should be no switching

      // turn into array
      const n1 = rows[i]
        .getElementsByTagName("TD")[1]
        .innerHTML.toString()
        .split(" ");
      const n2 = rows[i + 1]
        .getElementsByTagName("TD")[1]
        .innerHTML.toString()
        .split(" ");

      //get last name to sort
      x = n1[n1.length - 1].toString();
      y = n2[n2.length - 1].toString();

      if (x.toLowerCase() > y.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function sortByScore(col) {
  let switching = true;
  while (switching) {
    switching = false;
    let i;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[col];
      y = rows[i + 1].getElementsByTagName("TD")[col];

      if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

btnName.addEventListener("click", () => {
  console.log("sort by name");
  sortByName();
});
btnMath.addEventListener("click", () => {
  console.log("sort by math");
  sortByScore(4);
});
btnLitera.addEventListener("click", () => {
  console.log("sort by litera");
  sortByScore(5);
});
btnAvg.addEventListener("click", () => {
  console.log("sort by avg");
  sortByScore(6);
});

//find highes score
function highestScore(col) {
  let maxVal = -1000;
  let i = 1;
  for (i = 1; i < rows.length - 1; i++) {
    x = rows[i].getElementsByTagName("TD")[col];
    if (parseFloat(x.innerHTML) > maxVal) {
      maxVal = parseFloat(x.innerHTML);
    }
  }
  return maxVal;
}

const highestMath = document.querySelector(".highestMath");
const highestLitera = document.querySelector(".highestLitera");
const highestAvg = document.querySelector(".highestAvg");

highestMath.innerHTML = highestScore(4);
highestLitera.innerHTML = highestScore(5);
highestAvg.innerHTML = highestScore(6);

//insert into table
const btnAdd = document.querySelector(".btnInsert");
btnAdd.addEventListener("click", () => {
  const iName = document.getElementById("insertName").value;
  const iAge = document.getElementById("insertAge").value;
  const iSex = document.getElementById("insertSex").value;
  const iMath = document.getElementById("insertMath").value;
  const iLitera = document.getElementById("insertLitera").value;

  let newRow = table.insertRow(-1); //insert at the end
  let newCell0 = newRow.insertCell(0);
  let newCell1 = newRow.insertCell(1);
  let newCell2 = newRow.insertCell(2);
  let newCell3 = newRow.insertCell(3);
  let newCell4 = newRow.insertCell(4);
  let newCell5 = newRow.insertCell(5);
  let newCell6 = newRow.insertCell(6);

  newCell0.innerHTML = rows.length - 1; //first row is title, so -1
  newCell1.innerHTML = iName;
  newCell2.innerHTML = iAge;
  newCell3.innerHTML = iSex;
  newCell4.innerHTML = iMath;
  newCell5.innerHTML = iLitera;
  newCell6.innerHTML = (parseInt(iMath) + parseInt(iLitera)) / 2;
});
