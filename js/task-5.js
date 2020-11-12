const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input',output);

function output({target: {value}}) {

    nameOutput.textContent = (value!== '') ? value : 'незнакомец';
 }
