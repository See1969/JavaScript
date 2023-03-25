console.log('Sample JavaScript #5 HW #17');

let container = null;
let prevIndicator = null;

function createContainer() {
  let el = document.createElement('div');

  el.setAttribute('id', 'carousel');
  el.setAttribute('class', 'carousel');
  document.querySelector('body').appendChild(el);

  container = document.querySelector('#carousel');
};

function createSlides(n) {
  const slides = document.createElement('ul');
  slides.setAttribute('class', 'slides');

  for (let i = 0; i < n; i++) {
    let slideItem = document.createElement('li');
    let slideLink = document.createElement('a');

    slideItem.setAttribute('class', i === 0 ? 'slides__item active' : 'slides__item');
    slideLink.setAttribute('href', '#');

    slideItem.append(slideLink);
    slides.append(slideItem);
  };

  container.appendChild(slides);
};

function createIndicators(n) {
  const indicators = document.createElement('div');
  indicators.setAttribute('class', 'indicators');

  for (let i = 0; i < n; i++) {
    let indicatorItem = document.createElement('span');

    indicatorItem.setAttribute('class', i === 0 ? 'indicators__item active' : 'indicators__item');
    indicatorItem.setAttribute('data-slide-to', i);

    indicators.append(indicatorItem);
  };

  container.append(indicators);

};

function createControls() {

  const controls = document.createElement('div');
  controls.setAttribute('class', 'controls');

  for (let i = 0; i < 3; i++) {
    let controlItem = document.createElement('div');
    let controlIcon = document.createElement('i');
    const defItemClass = 'controls__item';
    const defIconClass = 'fas';

    switch (i) {
      case 0:
        controlItem.setAttribute('class', `${defItemClass} controls__prev`);
        controlIcon.setAttribute('class', `${defIconClass} fa-chevron-left`);
        break;
      case 1:
        controlItem.setAttribute('class', `${defItemClass} controls__next`);
        controlIcon.setAttribute('class', `${defIconClass} fa-chevron-right`);
        break;
      case 2:
        controlItem.setAttribute('class', `${defItemClass} controls__pause`);
        controlIcon.setAttribute('class', `${defIconClass} fa-play`);
        break;
    };

    controlItem.append(controlIcon);
    controls.append(controlItem);
  };

  container.append(controls);
};

function createStyle() {
  const newStyle = document.createElement('style');

  let styleCode = `
  .controls,
  .slides {
    position: relative;
  }
  .indicators {
    display: flex;
  }
  .indicators__item {
    display: block;
    width: 20px;
    height: 20px;
    background-color: gray;
    margin: 5px;
    border-radius: 10px;
  }`;

  newStyle.innerHTML = styleCode;
  container.append(newStyle);
};

function indicatorsHandler(e) {

  let target = e.target;

  if (target.classList.contains('indicators__item')) {
    target.style.backgroundColor = 'red';

    if (prevIndicator !== null) prevIndicator.removeAttribute('style');

    prevIndicator = target;
  };
};

function setListener() {
  let indicators = document.querySelector('.indicators');
  indicators.addEventListener('click', indicatorsHandler);
}

function createCarousel(slidesCount = 5) {

  // createContainer()
  container = document.querySelector('#carousel');
  createSlides(slidesCount);
  createIndicators(slidesCount);
  createControls();
  createStyle();
  setListener()
};

createCarousel();