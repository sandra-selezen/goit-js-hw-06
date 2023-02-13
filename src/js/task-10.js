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
Write a script to create and clear a collection of elements. 
The user enters the number of elements into input and clicks the New button, after which a collection is rendered. 
When you click on the Clear button, the collection is cleared.

Create a createBoxes(amount) function that takes one parameter, a number. 
The function creates as many <div> as specified in amount and adds them to div#boxes.

1. The dimensions of the very first <div> are 30px by 30px.
2. Each element after the first one should be 10px wider and higher than the previous one.
3. All elements must have a random HEX background color. Use the ready-made getRandomHexColor function to get a color.

Create a destroyBoxes() function that clears the contents of div#boxes, thereby removing all created elements.
*/