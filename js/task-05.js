const inputField = document.querySelector('#name-input');
const outputField = document.querySelector('#name-output');

inputField.addEventListener('input', onInputFieldEvent);

function onInputFieldEvent(event) {
    if(inputField.value !== ""){
        outputField.textContent = inputField.value
    } else {
        outputField.textContent = "Anonymous"
    }
}

