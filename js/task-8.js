const inputNumberOfSquares = document.querySelector('input[type="number"]');
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxesBox = document.querySelector('#boxes');


let numberOfSquares = 0;
inputNumberOfSquares.addEventListener('change', readInputNumber);
renderBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(event) {
    let boxes = ``;

    for (let i = 0; i < numberOfSquares; i += 1) {
        boxes = boxes + `<div class="child-div" 
            style="background-color: ${randomColorGenerator()}; 
            width: ${30 + i * 10}px; height: ${30 + i * 10}px; margin: 5px">
            </div>`;
    }    
    boxesBox.insertAdjacentHTML('afterbegin', boxes);
};

function randomColorGenerator() {
    return '#' + randomRgb().toString(16)
        + randomRgb().toString(16)
        + randomRgb().toString(16);
}

function randomRgb() {
    return Math.floor(Math.random() * (256));
}

function destroyBoxes() {
    const childBox = [...document.querySelectorAll('.child-div')];
    childBox.map((elem) => {elem.remove()});
};

function readInputNumber(event) {
    numberOfSquares = Number(event.target.value);
    return numberOfSquares;
};