const container = document.querySelector(".container");

const controler = document.querySelector(".btn__controls");
const view = document.querySelector(".view");

window.addEventListener("click", (e) => {
  const x = e.offsetX;
  const y = e.offsetY;

  container.style.top = `${y}px`;
  container.style.left = `${x}px`;
});

let maxim = false;

controler.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("min")) {
    container.style.bottom = 0;
    container.style.left = 0;
    container.style.height = "30px";
    view.style.opacity = 0;
  }

  if (target.classList.contains("max")) {
    // container.style.bottom = 0;
    // container.style.left = 0;
    if (!maxim) {
      container.style.height = "100%";
      container.style.width = "100%";
      view.style.opacity = 1;
      maxim = true;
    } else {
      container.style.height = "320px";
      container.style.width = "30%";
      view.style.opacity = 1;
      maxim = false;
    }
  }
  if (target.classList.contains("close")) {
    // container.style.bottom = 0;
    // container.style.left = 0;
    container.style.display = "none";
  }
});
