const keyBtn = document.querySelectorAll(".key");
const audios = document.querySelectorAll("audio");

// document.addEventListener("keydown", (e) => {
//   stopAudio();
//   keyBtn.forEach((item) => {
//     if (+item.dataset.key === e.keyCode) {
//       item.classList.toggle("playing");

//       filterNum(e.keyCode);
//     }
//   });
// });
// document.addEventListener("keyup", (e) => {
//   keyBtn.forEach((item) => {
//     if (+item.dataset.key === e.keyCode) {
//       item.classList.toggle("playing");
//     }
//   });
// });

const drumKit = function (method, ckfn) {
  document.addEventListener(method, (e) => {
    stopAudio();
    keyBtn.forEach((item) => {
      if (+item.dataset.key === e.keyCode) {
        item.classList.toggle("playing");
        if (ckfn) ckfn(e.keyCode);
      }
    });
  });
};

const filterNum = function (code) {
  audios.forEach((item) => {
    if (+item.dataset.key === code) item.play();
  });
};

function stopAudio() {
  audios.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
}

drumKit("keydown", filterNum);
drumKit("keyup");
