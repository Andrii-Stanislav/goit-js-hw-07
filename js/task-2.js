 const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
 ];

const list = document.querySelector('#ingredients');

const ingredientsList = ingredients.map((ingredient) => { 
    const liElem = document.createElement('li');
    liElem.textContent = ingredient;

    list.appendChild(liElem);
    return liElem;
});

