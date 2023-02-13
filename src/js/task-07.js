let inputRange = document.querySelector("#font-size-control");
let text = document.querySelector("#text");

inputRange.addEventListener("input", onInputChange);
function onInputChange(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
}

/*
Write a script that responds to changes in the value of input#font-size-control (input event) 
and changes the inline style of span#text by updating the font-size property. 
As a result, the text size will change responding to scrollbar dragging.
*/