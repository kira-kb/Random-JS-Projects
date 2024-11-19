"use strict";

const container = document.querySelector(".container");

const split = document.querySelectorAll(".split");

// const right = document.querySelector(".right");
// const left = document.querySelector(".left");

// [left, right].forEach((view) => {
split.forEach((view) => {
  view.addEventListener("mouseover", function () {
    //   container.className("container");
    const idf = this.getAttribute("class").replace("split ", "");

    container.classList.add(`hover-${idf}`);
  });

  view.addEventListener("mouseout", function () {
    const idf = this.getAttribute("class").replace("split ", "");

    container.classList.remove(`hover-${idf}`);
  });
});

// right.addEventListener("mouseover", () => {
//   //   container.className("container");
//   container.classList.add("hover-right");
// });

// right.addEventListener("mouseout", () => {
//   container.classList.remove("hover-right");
// });
