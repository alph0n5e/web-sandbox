const carousel1 = document.getElementById('section-carousel-1');
const colors = ['red', 'blue', 'yellow', 'purple', 'green', 'orange'];

function initializeCarousel(element) {
  const carouselwrapper = element.getElementsByClassName('carousel-wrapper')[0];
  const items = element.getElementsByClassName('carousel-item');
  const itemsCount = items.length;
  let activeItemIndex = 0;

  const carouselWidth = Number(getComputedStyle(carouselwrapper).width.slice(0, -2));
  const r = Math.round((carouselWidth / 2) / Math.tan(Math.PI / itemsCount));

  const carousel = element.getElementsByClassName('carousel')[0];
  carousel.style.transform = `translateZ(-${r}px)`;

  let idx = 0;
  for (const item of items) {
    item.style.transform = `rotateY(${idx * 360 / itemsCount}deg) translateZ(${r}px)`;
    item.style.background = colors[idx];
    idx++;
  }

  function rotateCarousel() {
    const angle = activeItemIndex * -360 / itemsCount;
    element.getElementsByClassName('carousel')[0].style.transform = `translateZ(-${r}px) rotateY(${angle}deg)`;
  }

  const nextButton = element.getElementsByClassName('carousel-next')[0];
  nextButton.addEventListener('click', (e) => {
    activeItemIndex ++;
    rotateCarousel();
  });

  const previousButton = element.getElementsByClassName('carousel-previous')[0];
  previousButton.addEventListener('click', (e) => {
    activeItemIndex --;
    rotateCarousel();
  });
}

initializeCarousel(carousel1);