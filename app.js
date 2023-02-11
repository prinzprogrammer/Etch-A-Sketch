const container = document.querySelector(".container");
const grid = {
  rows: 16,
  cols: 16,
};
let total = grid.rows * grid.cols;
const gridBtn = document.querySelector(".gridBtn");
const blackBtn = document.querySelector(".blackBtn");

function defaultGrid(total) {
  for (let i = 0; i < total; i++) {
    const box = document.createElement("div");
    container.appendChild(box);
    box.className = "box";
    box.addEventListener("mouseover", function () {
      this.style.backgroundColor = "gray";
    });
    blackBtn.addEventListener("click", function () {
      box.style.backgroundColor = "";
      box.addEventListener("mouseover", function () {
        /*this.style.backgroundColor = "black"; */
        let boxColorState = (box.style.backgroundColor = "rgba(0, 0, 0, 0.5)");
        if (boxColorState == boxColorState) {
          boxColorState = "rgba(0, 0, 0, 1)";
          box.addEventListener("mouseover", function () {
            box.style.backgroundColor = boxColorState;
          });
        }
      });
    });
    gridBtn.addEventListener("click", function () {
      box.remove();
    });
  }
  container.style.setProperty(
    `grid-template-columns`,
    `repeat(${grid.cols}, 1fr)`
  );
}

defaultGrid(total);

function newGrid() {
  grid.cols = prompt("How many number of grid?");
  total = Math.pow(grid.cols, 2);
  defaultGrid(total);
}

gridBtn.addEventListener("click", newGrid);
