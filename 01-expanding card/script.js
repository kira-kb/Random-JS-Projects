const container = document.querySelector(".container");
const panels = document.querySelectorAll(".panel");

container.addEventListener("click", (e) => {
  const touch = e.target;
  if (touch.classList.contains("panel")) {
    panels.forEach((elem) => elem.classList.remove("active"));
    touch.classList.add("active");
  }
});
