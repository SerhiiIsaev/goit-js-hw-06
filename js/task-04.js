const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const clickCounter = document.querySelector('#value');

decrementBtn.addEventListener('click', onDecrementBtnClick );
incrementBtn.addEventListener('click', onIncrementBtnClick );

let counterValue = 0;
clickCounter.textContent = counterValue;

function onIncrementBtnClick(event) {
    counterValue += 1;
    clickCounter.textContent = counterValue
};

function onDecrementBtnClick(event) {
    counterValue -= 1;
    clickCounter.textContent = counterValue
};