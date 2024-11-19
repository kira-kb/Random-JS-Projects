const counter = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 100;

let time = setInterval(blury, 30);

function blury() {
  load--;

  if (load < 1) clearInterval(time);

  counter.textContent = `${load}%`;
  //   bg.style.filter = `blur(${load / 5}px)`;
  bg.style.filter = `blur(${scale(load, 0, 100, 0, 30)}px)`;
  //   counter.style.opacity = load / 100;
  counter.style.opacity = scale(load, 0, 100, 0, 1);
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
