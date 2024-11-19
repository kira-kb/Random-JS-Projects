"use strict";

const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  const html = label.textContent
    .split("")
    .map(
      (item, idx) =>
        `<span style="transition-delay: ${idx * 50}ms">${item}</span>`
    )
    .join("");
  //   console.log(html);
  label.textContent = "";
  label.insertAdjacentHTML("afterbegin", html);
});
