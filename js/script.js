const formLogin = document.querySelector("[data-formLogin]")
const inputsLogin = document.querySelectorAll("[data-inputLogin]")

formLogin.addEventListener("submit", (e) =>{
    e.preventDefault()

    window.location.href = 'adm-products.html'
})

inputsLogin.forEach((input) =>{
    input.addEventListener("blur", () => checkInput(input))
    input.addEventListener("invalid", event => event.preventDefault())
})

const errors = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const messages = {
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    password: {
        valueMissing: "O campo de senha não pode estar vazio.",
        typeMismatch: "Por favor, preencha uma senha válido.",
        tooShort: "A senha deve conter no mínimo 6 dígitos."
    }
}

function checkInput(input){
    let message = ""
    input.setCustomValidity('')
    errors.forEach(error => {
        if(input.validity[error]){
            message = messages[input.name][error]
        }
    })

    const erroMessage = input.parentNode.querySelector('.error-message')
    const checkInput = input.checkValidity()

    if(!checkInput){
        erroMessage.style.display = "block"
        erroMessage.textContent = message
    }else{
        erroMessage.textContent = ""
        erroMessage.style.display = "none"
    }
}