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
Write a script that, when focus on input is lost (blur event), 
checks its contents for the correct number of entered characters.

1. The number of characters in the input is specified in its data-length attribute.
2. If the number of characters entered is correct, the input's border turns green, or red with a wrong number.
To add styles, use the valid and invalid CSS classes, which you can find in the task source files.
*/