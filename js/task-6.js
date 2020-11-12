const validatiorInput = document.querySelector('#validation-input');

validatiorInput.addEventListener('change', verifyInputText);

function verifyInputText(event) {
    if (event.target.value.length === 6) { 
        if (validatiorInput.classList.contains('invalid')) {
            validatiorInput.classList.replace('invalid', 'valid');
            return
        }
        validatiorInput.classList.add('valid')
    }
    else {
        if (validatiorInput.classList.contains('valid')) {
            validatiorInput.classList.replace('valid', 'invalid');
            return
        }
        validatiorInput.classList.add('invalid') 
    }
}