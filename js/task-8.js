const inputNumberOfSquares = document.querySelector('input[type="number"]');
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxesBox = document.querySelector('#boxes');


let numberOfSquares = 0;
inputNumberOfSquares.addEventListener('change', readInputNumber);

renderBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(numberOfSquares) {
    let boxes = ``;
    for (const i = 0; i < numberOfSquares; i+=1) {
        boxes += `<div style="border:blue;width:${30 + i * 10}px;height:${30 + i * 10}px"></div>`; 
        boxes += 'evd'
    }
    console.log(boxes);
    
    boxesBox.insertAdjacentHTML('afterbegin', boxes);
};

function destroyBoxes() {

};

function readInputNumber(event) {
    numberOfSquares = Number(event.target.value);
    return numberOfSquares;
}

// const galleryList = document.querySelector('#gallery');
// const galleryItems = images.reduce((acc, {url, alt}) => {
//     const image = `<li class="gallery-item"><img class="gallery-img" src="${url}" alt="${alt}"></img></li>`;
//     return acc += image;
//  }, '');

// console.log(galleryItems);

// galleryList.insertAdjacentHTML('afterbegin' , galleryItems);

