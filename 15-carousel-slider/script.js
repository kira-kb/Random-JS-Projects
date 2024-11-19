const slider = function () {
  const dotContainer = document.querySelector('.dots');

  const slides = document.querySelectorAll('.card');

  const slideLeft = document.querySelector('.btn--left');
  const slideRight = document.querySelector('.btn--right');

  let curSlide = 0;
  const maxSlide = slides.length - 1;

  const createDots = () => {
    slides.forEach((_, index) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dot" data-slide="${index}">&nbsp;</button>`
      );
    });
  };

  // const dots = document.querySelectorAll('.dot');
  const activateDot = function (slide) {
    document
      .querySelectorAll('.dot')
      .forEach(slide => slide.classList.remove('active'));

    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add('active');
  };

  const goToSlide = goto => {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${180 * (index - goto)}%) rotate(${
        90 * (index - goto)
      }deg)`;
      // slide.style.transformOrigin = `left`;
      // slide.style.transformOrigin = `right bottom`;
      // slide.style.transform = `rotate(${90 * (index - goto)}deg)`;
    });
    activateDot(goto);
  };

  const init = function () {
    createDots(); // creating dots
    goToSlide(0); // implementing the upper code
  };
  init(); // initialisation

  const previous = () => {
    curSlide--;
    if (curSlide < 0) curSlide = maxSlide;
    goToSlide(curSlide);
  };

  const next = () => {
    if (curSlide === maxSlide) curSlide = 0;
    else curSlide++;
    goToSlide(curSlide);
  };

  slideLeft.addEventListener('click', previous);
  slideRight.addEventListener('click', next);

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') next();
    else if (e.code === 'ArrowLeft') previous();
  });

  // dots

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dot')) {
      const slide = e.target.dataset.slide;
      goToSlide(slide);
    }
  });
};

slider();
