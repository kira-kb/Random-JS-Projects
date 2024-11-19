const open = document.getElementById("open");
const close = document.getElementById("close");
const circle = document.querySelector(".circle");
const container = document.querySelector(".container");

open.addEventListener("click", () => {
  container.classList.add("show-nav");
  circle.classList.add("rotate");
});

close.addEventListener("click", () => {
  container.classList.remove("show-nav");
  circle.classList.remove("rotate");
});
