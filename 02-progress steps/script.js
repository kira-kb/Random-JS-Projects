const bar = document.querySelector(".progress");
const steps = document.querySelectorAll(".circle");

const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

const def = 100 / (steps.length - 1);
let currentActive = 1;
let val = 0;

nextBtn.addEventListener("click", (e) => {
  currentActive++;
  if (currentActive > steps.length) currentActive = steps.length;

  val = val > 100 ? 100 : val + def;
  bar.style.width = val + "%";
  steps[currentActive - 1].classList.add("active");

  prevBtn.removeAttribute("disabled", "");
  val >= 100
    ? nextBtn.setAttribute("disabled", "")
    : nextBtn.removeAttribute("disabled", "");
});

prevBtn.addEventListener("click", (e) => {
  if (currentActive < 0) 1;

  val = val - def;
  val = val < 0 ? (val = 0) : val;

  bar.style.width = val + "%";
  steps[currentActive - 1].classList.remove("active");

  currentActive--;

  nextBtn.removeAttribute("disabled", "");
  val <= 0
    ? prevBtn.setAttribute("disabled", "")
    : prevBtn.removeAttribute("disabled", "");
});
