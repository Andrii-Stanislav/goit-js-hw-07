const validatiorInput = document.querySelector('#validation-input');

validatiorInput.addEventListener('change', verifyInputText);

function verifyInputText(event) {
    console.log(event.target.value)
    if (event.target.value.length >= 6) { 
        if (validatiorInput.classList.contains('invalid')) {
           return validatiorInput.classList.replace('invalid', 'valid')
        }
        return validatiorInput.classList.add('valid')
    } else {
        if (validatiorInput.classList.contains('valid')) {
           return validatiorInput.classList.replace('valid', 'invalid')
        }
        return validatiorInput.classList.add('invalid') 
    }
}