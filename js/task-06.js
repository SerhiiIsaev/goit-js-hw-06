const inputField = document.querySelector("input");

const validLength = parseInt(inputField.getAttribute('data-length'))

inputField.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length === validLength) {
        event.currentTarget.classList.add('valid')
        event.currentTarget.classList.remove('invalid')
    } else {
        event.currentTarget.classList.add('invalid')
        event.currentTarget.classList.remove('valid')
    }
})