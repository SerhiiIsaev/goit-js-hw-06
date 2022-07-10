const inputRangeController = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

inputRangeController.addEventListener('input', (event) => {
    text.style.fontSize = `${event.currentTarget.value}px`
    console.log(text.style.fontSize)
})