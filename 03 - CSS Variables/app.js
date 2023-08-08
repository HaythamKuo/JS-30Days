//event delegate
const controls = document.querySelector(".controls");

const img = document.querySelector("img");
const js = document.querySelector(".hl");
const blur = document.getElementById("blur");
const base = document.getElementById("base");

function updateStyleObj() {
  js.style.color = base.value;
  img.style.filter = `blur(${+blur.value}px)`;
  img.style.border = `${+spacing.value}px solid ${base.value}`;
}
controls.addEventListener("input", updateStyleObj);
window.addEventListener("load", updateStyleObj);
