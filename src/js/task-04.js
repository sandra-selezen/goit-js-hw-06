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
Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати
і зменшувати його значення на одиницю.

1. Створи змінну counterValue, в якій буде зберігатися 
поточне значення лічильника та ініціалізуй її значенням 0.
2. Додай слухачів кліків до кнопок, всередині яких збільшуй 
або зменшуй значення лічильника.
3. Оновлюй інтерфейс новим значенням змінної counterValue.
*/