function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const textColor = document.querySelector('.color');
const changeColorBtn = document.querySelector('button');

changeColorBtn.addEventListener('click', onBodyChangeColor);

function onBodyChangeColor(event) {
  textColor.textContent = getRandomHexColor();
  body.style.color = textColor.textContent;
}
