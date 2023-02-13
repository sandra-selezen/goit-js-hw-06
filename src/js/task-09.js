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
Write a script that changes the background colors of the <body> element via inline style 
when clicking on button.change-color and outputs the color value to span.color.

Use the getRandomHexColor function to generate a random color.
*/