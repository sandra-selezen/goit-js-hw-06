const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
let inputValueEl = "Anonymous";

inputEl.addEventListener("input", (e) => {
    outputEl.textContent = e.currentTarget.value === "" ? inputValueEl : e.currentTarget.value; 
});

/* 
Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
підставляє його поточне значення в span#name-output.
Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
*/