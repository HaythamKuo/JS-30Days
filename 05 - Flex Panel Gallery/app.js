const panel = document.querySelectorAll(".panel");

panel.forEach(function (panel) {
  panel.addEventListener("click", open);
});

panel.forEach(function (panel) {
  panel.addEventListener("transitionend", active);
});

function open(event) {
  event.target.classList.toggle("open");
}
function active(event) {
  if (event.propertyName.includes("flex")) {
    event.target.classList.toggle("active");
  }
}
