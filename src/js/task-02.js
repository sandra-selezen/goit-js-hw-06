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
  const ingredientItem = document.createElement('li');
  ingredientItem.classList.add('item');
  ingredientItem.textContent = ingredient;
  listItemsEl.push(ingredientItem);
});

ingredientsListEl.append(...listItemsEl);

/*
Напиши скрипт, який для кожного елемента масиву ingredients:

1. Створить окремий елемент <li>. 
Обов'язково використовуй метод document.createElement().
2. Додасть назву інгредієнта як його текстовий вміст.
3. Додасть елементу клас item.
4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
*/