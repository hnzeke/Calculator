let operation // Operation Determiner 
let displayValue = ""
let num1
let num2

// Operation functions

function add() { 
    operation = 'add'
    num1 = +displayValue;
    displayValue = ""
    display.textContent = displayValue;
}

function subtract() { 
    operation = 'subtract'
    num1 = +displayValue;
    displayValue = ""
    display.textContent = displayValue;
}

function multiply() { 
    operation = 'multiply'
    num1 = +displayValue;
    displayValue = ""
    display.textContent = displayValue;
}

function divide() { 
    operation = 'divide'
    num1 = +displayValue;
    displayValue = ""
    display.textContent = displayValue;
}

// Eval Function

function operate(operation) { 
    switch (operation) {
        case 'add':
            num2 = +display.textContent
            total = num1 + num2;
            displayValue = `${total}`
            display.textContent = displayValue;
            break;
        
        case 'subtract':
            num2 = +display.textContent
            total = num1 - num2;
            displayValue = `${total}`
            display.textContent = displayValue;
            break;

        case 'multiply':
            num2 = +display.textContent
            total = num1 * num2;
            displayValue = `${total}`
            display.textContent = displayValue;
            break;
        
        case 'divide':
            num2 = +display.textContent
            total = num1 / num2;
            displayValue = `${total}`
            display.textContent = displayValue;
            break;
    }
}

let container = document.querySelector('#container');
let buttons = container.querySelectorAll('.button');
let display = container.querySelector('#display');

/*buttons.addEventListener('click', (button) => {
    if (button.classList.value === 'number') {
        alert('test');
    }
})*/

buttons.forEach((button) => 
button.addEventListener('click', (e) => {
    if (button.className.includes('number')) {
        displayValue = displayValue.concat(button.textContent)
        display.textContent = displayValue;
    } else if (button.className.includes('clear')) {
        displayValue = ""
        display.textContent = displayValue;
    } else if (button.className.includes('add')) {
        add();
    } else if (button.className.includes('operate')) {
        operate(operation);
    } else if (button.className.includes('subtract')) {
        subtract();
    } else if (button.className.includes('multiply')) {
        multiply();
    } else if (button.className.includes('divide')) {
        divide();
    }
})
);