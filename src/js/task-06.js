let textInput = document.querySelector("#validation-input");

// console.log(textInput);

const onInputBlur = event => {
    
    if (event.currentTarget.value.length === Number(textInput.dataset.length)) {
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
    } else {
        textInput.classList.add("invalid");
        textInput.classList.remove("valid");
    }
}

textInput.addEventListener("blur", onInputBlur);



/*
Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
перевіряє його вміст щодо правильної кількості введених символів.

1. Яка кількість символів повинна бути в інпуті,
зазначається в його атрибуті data-length.
2. Якщо введена правильна кількість символів, то border інпуту стає зеленим,
якщо неправильна кількість - червоним.
3. Для додавання стилів використовуй CSS-класи valid і invalid,
які ми вже додали у вихідні файли завдання.
*/