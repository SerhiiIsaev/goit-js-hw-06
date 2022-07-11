function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
const amount = input.value;

createBtn.addEventListener('click', onBoxesCreate);
destroyBtn.addEventListener('click', onBoxesDestroy);

function onBoxesCreate(event) {
  const arrayOfElement = [];
  let size = 30;
  boxes.innerHTML = ''
  const amount = input.value;
  for (let i = 1; i <= amount; i += 1){
    const element = document.createElement('div');
    size += 10;
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.background = getRandomHexColor();
    arrayOfElement.push(element);
  }
  boxes.append(...arrayOfElement);
}

function onBoxesDestroy(event) {
  boxes.innerHTML = '';
}

