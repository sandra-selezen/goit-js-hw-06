let counterValue = 0;

const valueEl = document.querySelector('#value');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');

const onIncrementBtnClick = (e) => {
    counterValue += 1;
    valueEl.textContent = counterValue;
}

const onDecrementBtnClick = (e) => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

incrementBtnEl.addEventListener("click", onIncrementBtnClick);
decrementBtnEl.addEventListener("click", onDecrementBtnClick);

/*
The counter consists of a span and buttons, which, when clicked, 
should increase and decrease its value by one.

1. Create a variable, counterValue, that will store the current counter value and initialize it with 0.
2. Add listeners for clicks on the buttons; inside them, increase or decrease the value of the counter.
3. Update the interface with the new value of the variable counterValue.
*/