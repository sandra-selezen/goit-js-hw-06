let inputRange = document.querySelector("#font-size-control");
let text = document.querySelector("#text");

inputRange.addEventListener("input", onInputChange);
function onInputChange(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
}

/*
Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
*/