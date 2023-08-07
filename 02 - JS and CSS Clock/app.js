const hour = document.querySelector(".hour-hand");
const min = document.querySelector(".min-hand");
const second = document.querySelector(".second-hand");

function clock() {
  const now = new Date();
  const secDeg = now.getSeconds() * 6; // 360/60;
  const minDeg = now.getMinutes() * 6 + (now.getSeconds() * 6) / 60; // 360/60
  const hourDeg = now.getHours() * 30 + (now.getMinutes() * 30) / 60;

  second.style.transform = `rotate(${secDeg}deg)`;
  min.style.transform = `rotate(${minDeg}deg)`;
  hour.style.transform = `rotate(${hourDeg}deg)`;
}

clock();
setInterval(clock, 1000);
