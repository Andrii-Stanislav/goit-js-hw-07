let counterValue = 0;
const displayValue = document.querySelector('#value');
const decrementButton = document.querySelector('button[data-action = "decrement"]');
const incrementButton = document.querySelector('button[data-action = "increment"]');

decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);

function decrement() {
    counterValue -= 1;
    displayValue.textContent = counterValue;
};

function increment() {
    counterValue += 1;
    displayValue.textContent = counterValue;
};


