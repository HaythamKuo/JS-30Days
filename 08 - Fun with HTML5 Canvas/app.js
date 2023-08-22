const canvas = document.getElementById("draw");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const click = function (e) {
  lastX = e.offsetX;
  lastY = e.offsetY;
  canvas.addEventListener("mousemove", draw);
};

const loosen = function () {
  canvas.addEventListener("mousemove", draw);
};

let hue = 0;
let radius = 1;
let increase = true;

const draw = function (e) {
  let newX = e.offsetX;
  let newY = e.offsetY;
  let brush = canvas.getContext("2d");

  brush.beginPath();

  brush.moveTo(lastX, lastY);
  brush.lineTo(newX, newY);
  brush.lineCap = "round";
  brush.lineJoin = "round";
  brush.strokeStyle = `hsl(${hue},100%,50%)`;
  brush.stroke();
  lastX = e.offsetX;
  lastY = e.offsetY;

  hue++;
  if (radius >= 100 || radius < 1) increase = !increase;

  increase ? radius++ : radius--;
};

canvas.addEventListener("mousedown", click);
canvas.addEventListener("mouseup", loosen);
