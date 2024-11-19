"use strict";

const img = document.querySelector(".img");

const api = async function () {
  const res = await fetch("https://source.unsplash.com/1600x900/?nature");
  img.src = res.url;
  // const quote = await fetch("https://type.fit/api/quotes");
  // console.log(quote.json());
};

api();
const api2 = async function () {
  const res = await fetch("https://api.quotable.io/quotes");

  const data = await res.json();

  const touch = document.body;
  const txt = document.querySelector(".txt");
  const author = document.querySelector(".author");

  txt.innerHTML = data.results[0].content;
  author.innerHTML = data.results[0].author;

  let counter = 0;

  touch.addEventListener("click", function () {
    api();
    data.results.length <= counter ? 0 : counter++;

    txt.innerHTML = data.results[counter].content;
    author.innerHTML = data.results[counter].author;
  });
  console.log(data.results);
};

api2();
