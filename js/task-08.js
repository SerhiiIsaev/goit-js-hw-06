const form = document.querySelector('form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    if (event.currentTarget.elements.email.value === "" || event.currentTarget.elements.password.value === "") {
        return alert("Please fill in all the fields!");
    }

    const user = {
        email: event.currentTarget.elements.email.value,
        password: event.currentTarget.elements.password.value,
    }

    

    console.log(user)   
    event.currentTarget.reset()
}
