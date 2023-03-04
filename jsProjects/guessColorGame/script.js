const coloNamecnt = document.getElementById("colorName");
const header = document.querySelector("header");
const restart = document.getElementById("newColorOrPlayAgainBt");
const easy = document.getElementById("easy");
const hard = document.getElementById("hard");
const statusCont = document.getElementById("status");
const wrapper = document.querySelector(".container .wrapper");

let squares = [];
let correctColor;

function isEqual(color1, color2) {
  return color1.R == color2.R && color1.G == color2.G && color1.B == color2.B;
}

function* genColor() {
  while (true) {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    let color = { R, G, B };
    if (isEqual(color, { R: 0, G: 0, B: 0 })) {
      continue;
    }
    yield color;
  }
}

function shuffleSquares() {
  for (let i = squares.length - 1; i >= 0; i--) {
    let pos = Math.floor(Math.random() * (i + 1));
    let temp = squares[i];
    squares[i] = squares[pos];
    squares[pos] = temp;
  }
}

function getDiffcuilty() {
  if (easy.classList.contains("active")) {
    return 3;
  }
  return 6;
}

easy.addEventListener("click", () => {
  if (easy.classList.contains("active")) {
    return;
  }
  easy.classList.add("active");
  if (hard.classList.contains("active")) {
    hard.classList.remove("active");
  }
  start();
});

hard.addEventListener("click", () => {
  if (hard.classList.contains("active")) {
    return;
  }
  hard.classList.add("active");
  if (easy.classList.contains("active")) {
    easy.classList.remove("active");
  }
  start();
});

function start() {
  statusCont.textContent = "";
  restart.textContent = "new color";
  header.style.backgroundColor = "#2c8e99";
  let diffcuilty = getDiffcuilty();
  correctColor = genColor().next().value;
  let content = `<div class='square'></div>`;
  squares = [correctColor];
  while (squares.length != diffcuilty) {
    let color = genColor().next().value;
    let noConflict = true;
    squares.forEach((ele) => {
      if (isEqual(ele, color)) {
        noConflict = false;
      }
    });
    if (noConflict) {
      squares.push(color);
      content += `<div class='square'></div>`;
    }
  }
  wrapper.innerHTML = content;
  let squaresElements = wrapper.querySelectorAll(".square");
  shuffleSquares();

  let i = 0;
  squaresElements.forEach((ele) => {
    ele.addEventListener("click", check);
    ele.style.backgroundColor = `rgb(${squares[i].R}, ${squares[i].G}, ${squares[i].B})`;
    ele.dataset.R = squares[i].R;
    ele.dataset.G = squares[i].G;
    ele.dataset.B = squares[i].B;
    i++;
  });

  coloNamecnt.textContent = `rgb(${correctColor.R}, ${correctColor.G}, ${correctColor.B})`;
}

function check(e) {
  if (statusCont.textContent == "correct") {
    return;
  }
  console.log(statusCont.textContent);
  let square = e.target;
  if (
    isEqual(correctColor, {
      R: square.dataset.R,
      G: square.dataset.G,
      B: square.dataset.B,
    })
  ) {
    header.style.backgroundColor = `rgb(${correctColor.R}, ${correctColor.G}, ${correctColor.B})`;
    wrapper.querySelectorAll(".wrapper .square").forEach((ele) => {
      ele.style.backgroundColor = `rgb(${correctColor.R}, ${correctColor.G}, ${correctColor.B})`;
      if (ele.classList.contains("hidden")) {
        ele.classList.remove("hidden");
      }
      statusCont.textContent = "correct";
      restart.textContent = "Play again";
    });
    console.log("found");
  } else {
    square.classList.add("hidden");
    statusCont.textContent = "Try again";
  }
}

start();

restart.addEventListener("click", start);
