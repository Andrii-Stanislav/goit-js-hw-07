 const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
 ];

const ingredientsList = ingredients.map((ingredient) => { 
    const liElem = document.createElement('li');
    liElem.textContent = ingredient;

    document.querySelector('#ingredients').appendChild(liElem);
    return liElem;
});

