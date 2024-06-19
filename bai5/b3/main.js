let shouldSwitch, x, y;

const btnShow = document.querySelector(".btn.show");
const btnName = document.querySelector(".btn.name");
const btnMath = document.querySelector(".btn.math");
const btnLitera = document.querySelector(".btn.litera");
const btnAvg = document.querySelector(".btn.avg");

let User = [
  {
    no: 1,
    name: "Trần Thị B",
    age: 16,
    sex: "Nữ",
    math: 90,
    literature: 92,
    avg: 91.0,
  },
  {
    no: 2,
    name: "Nguyễn Văn A",
    age: 15,
    sex: "Nam",
    math: 85,
    literature: 78,
    avg: 81.5,
  },
  {
    no: 3,
    name: "Võ Văn E",
    age: 15,
    sex: "Nam",
    math: 70,
    literature: 75,
    avg: 72.5,
  },
  {
    no: 4,
    name: "Phạm Thị D",
    age: 16,
    sex: "Nữ",
    math: 88,
    literature: 85,
    avg: 86.5,
  },
  {
    no: 5,
    name: "Lê Văn C",
    age: 15,
    sex: "Nam",
    math: 75,
    literature: 80,
    avg: 77.5,
  },
  {
    no: 6,
    name: "Hoàng Thị H",
    age: 16,
    sex: "Nữ",
    math: 85,
    literature: 88,
    avg: 86.5,
  },
  {
    no: 7,
    name: "Ngô Văn G",
    age: 15,
    sex: "Nam",
    math: 78,
    literature: 82,
    avg: 80.0,
  },
  {
    no: 8,
    name: "Đặng Thị F",
    age: 16,
    sex: "Nữ",
    math: 95,
    literature: 90,
    avg: 92.5,
  },
  {
    no: 9,
    name: "Vũ Thị K",
    age: 16,
    sex: "Nữ",
    math: 92,
    literature: 95,
    avg: 93.5,
  },
  {
    no: 10,
    name: "Đỗ Văn I",
    age: 15,
    sex: "Nam",
    math: 80,
    literature: 77,
    avg: 78.5,
  },
];

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }

  const tableContent = `<thead>
            <tr>
                <th>no</th>
                <th>name</th>
                <th>age</th>
                <th>sex</th>
                <th>math</th>
                <th>literature</th>
                <th>avg</th>
            </tr>
        </thead>`;

  //tạo 1 table xong inner vào cái biến trên
  //sau đó mỗi dòng ta chỉ cần append vào biến table đó
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (let key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table2 = document.querySelector("table");

function createTable() {
  deleleTable();
  let data = Object.keys(User[0]);
  generateTable(table2, User);
  generateTableHead(table2, data);
  console.log("created");
}

function deleleTable() {
  while (table2.rows.length > 0) {
    table2.deleteRow(0);
  }
}

btnShow.addEventListener("click", () => {
  createTable();
});

const rows = table2.rows;

function sortByName() {
  User.sort((a, b) => a.name.localeCompare(b.name));
  createTable();
}

function sortByScore(col) {
  User.sort((a, b) => {
    if (a[col] > b[col]) return 1;
    if (a[col] < b[col]) return -1;
    return 0;
  });
  createTable();
}

btnName.addEventListener("click", () => {
  console.log("sort by name");
  sortByName();
});
btnMath.addEventListener("click", () => {
  console.log("sort by math");
  sortByScore("math");
});
btnLitera.addEventListener("click", () => {
  console.log("sort by litera");
  sortByScore("literature");
});
btnAvg.addEventListener("click", () => {
  console.log("sort by avg");
  sortByScore("avg");
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
