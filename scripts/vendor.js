function setCell() {
  try {
    for (let i = 1; i <= 3; i++) {
      for (let j = 1; j <= 3; j++) {
        let element = document.createElement("div");
        element.id = "p" + i + j;
        element.className = "clk";
        element.textContent = i + "" + j;
        grid[0].appendChild(element);
      }
    }
  } catch (err) {
    console.log(err);
  }
}

let grid = document.getElementsByClassName("grid");
setCell();

let p11 = document.getElementById("p11");
let p12 = document.getElementById("p12");
let p13 = document.getElementById("p13");
let p21 = document.getElementById("p21");
let p22 = document.getElementById("p22");
let p23 = document.getElementById("p23");
let p31 = document.getElementById("p31");
let p32 = document.getElementById("p32");
let p33 = document.getElementById("p33");

let start = document.getElementById("launch");
let reset = document.getElementById("reset");

let title = document.getElementById("title");
