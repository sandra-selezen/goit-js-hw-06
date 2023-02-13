const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
let inputValueEl = "Anonymous";

inputEl.addEventListener("input", (e) => {
    outputEl.textContent = e.currentTarget.value === "" ? inputValueEl : e.currentTarget.value; 
});

/* 
Write a script that, when typing in the input#name-input input (input event), 
substitutes its current value into span#name-output. 
If the input is empty, the span should display the "Anonymous" string.
*/