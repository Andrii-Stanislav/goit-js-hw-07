
const categoriesList = document.querySelector('#categories');
const numberOfCategories = categoriesList.querySelectorAll('.item').length;

console.log(`У списку ${numberOfCategories} категорії.`);

const categories = categoriesList.querySelectorAll('.item');

categories.forEach(element => {
    const header = element.firstElementChild.textContent;    
    const itemsInElem = element.querySelectorAll('li').length;

    console.log(`Категорія: ${header}`);
    console.log(`Кількість елементів: ${itemsInElem}`);
});
