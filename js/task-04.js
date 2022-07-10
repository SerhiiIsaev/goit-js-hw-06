const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const clickCounter = document.querySelector('#value');

decrementBtn.addEventListener('click', decreaseCounter);
incrementBtn.addEventListener('click', increaseCounter);

let counterValue = 0;
clickCounter.textContent = counterValue;

function increaseCounter(event) {
    counterValue += 1;
    clickCounter.textContent = counterValue
};

function decreaseCounter(event) {
    counterValue -= 1;
    clickCounter.textContent = counterValue
};