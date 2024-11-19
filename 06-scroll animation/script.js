const boxes = document.querySelectorAll(".content");

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    // console.log(triggerBottom, boxTop);

    boxTop < triggerBottom
      ? box.classList.add("show")
      : box.classList.remove("show");
  });
}

checkBoxes();
