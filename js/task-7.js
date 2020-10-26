const fontSizeControl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

fontSizeControl.addEventListener('input', changeFontSize);

function changeFontSize(event) {
    // text.textContent = event.target.value;

    textSpan.style.fontSize = `${event.target.value}px`;
    // text.style.color = 'teal';
}

// fontSize font-size