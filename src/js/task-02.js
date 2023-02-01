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
Напиши скрипт, який для кожного елемента масиву ingredients:

1. Створить окремий елемент <li>. 
Обов'язково використовуй метод document.createElement().
2. Додасть назву інгредієнта як його текстовий вміст.
3. Додасть елементу клас item.
4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
*/