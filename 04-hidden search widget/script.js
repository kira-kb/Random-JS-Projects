const btn = document.getElementById("sbmt");
const search = document.getElementById("txt");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  search.focus();
});
