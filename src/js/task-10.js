function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const number = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

const onInputClick = event => {
  const newDiv = Number(number.value);

  createBoxes(newDiv);
}

const createBoxes = amount => {
  const elements = [];

  const width = 30;
  const height = 30;

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');

    boxEl.style.backgroundColor = getRandomHexColor();

    boxEl.style.width = `${width + i * 10}px`;
    boxEl.style.height = `${height + i * 10}px`;

    elements.push(boxEl);
  }

  boxes.append(...elements);
}

const destroyBoxes = event => {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", onInputClick);
destroyBtn.addEventListener("click", destroyBoxes);
/*
Напиши скрипт створення і очищення колекції елементів.

Користувач вводить кількість елементів в input і натискає кнопку Створити,
після чого рендериться колекція.
Натисненням на кнопку Очистити, колекція елементів очищається.

Створи функцію createBoxes(amount), яка приймає один параметр - число.
Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

1. Розміри найпершого <div> - 30px на 30px.
2. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
3. Всі елементи повинні мати випадковий колір фону у форматі HEX.
Використовуй готову функцію getRandomHexColor для отримання кольору.

Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
у такий спосіб видаляючи всі створені елементи.
*/