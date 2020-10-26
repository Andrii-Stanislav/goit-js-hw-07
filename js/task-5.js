const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input',output);

function output(event) {

    nameOutput.textContent = (event.target.value !== '') ? event.target.value : 'незнакомец';
 }
