const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');
const listItemsEl = [];

ingredients.forEach((ingredient) => {
  const ingredientItemEl = document.createElement('li');
  ingredientItemEl.classList.add('item');
  ingredientItemEl.textContent = ingredient;
  listItemsEl.push(ingredientItemEl);
});

ingredientsListEl.append(...listItemsEl);

/*
Write a script that, for each element in the ingredients array:

1.Will create a separate <li> element. 
Be sure to use the document.createElement() method.
2. Will add the ingredient name as its text content.
3. Will add the item class to the element.
4. Then will insert all <li> to the ul#ingredients list in a single operation.
*/