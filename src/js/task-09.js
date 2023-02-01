function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const page = document.body;
const color = document.querySelector(".color");
const button = document.querySelector(".change-color");

const changeColor = event => {
  let resultColor = getRandomHexColor();
  page.style.backgroundColor = resultColor;
  color.textContent = resultColor;
}

button.addEventListener("click", changeColor);

/*
Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль
по кліку на button.change-color і виводить значення кольору в span.color.

Для генерування випадкового кольору використовуй функцію getRandomHexColor.
*/