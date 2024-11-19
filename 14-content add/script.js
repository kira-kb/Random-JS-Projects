"use strict";

const addBtn = document.querySelector(".add-btn");
const addValue = document.querySelector(".add-input");
const container = document.querySelector(".lists");

const add = () => {
  if (!addValue.value) return;
  const insert = document.createElement("div");
  insert.classList.add("list");
  insert.textContent = addValue.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.addEventListener("click", del);
  deleteBtn.classList.add("del-btn");

  deleteBtn.insertAdjacentHTML(
    "beforeend",
    '<i class="fa fa-trash" aria-hidden="true"></i>'
  );

  insert.insertAdjacentElement("beforeend", deleteBtn);

  container.insertAdjacentElement("beforeend", insert);
  // console.log(container);
  addValue.value = "";
};

const del = (e) => {
  e.target.closest(".list").remove();
};

addBtn.addEventListener("click", add);
addValue.addEventListener("keyup", (e) => {
  if (e.key === "Enter") add();
});
