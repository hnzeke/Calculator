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

function subtract(num1, num2) { 
    operation = 'subtract'
    return num1 - num2
}

function multiply(num1, num2) { 
    operation = 'multiply'
    return num1 * num2
}

function divide(num1, num2) { 
    operation = 'divide'
    return num1 / num2
}

// Eval Function

function operate(operation) { 
    switch (operation) {
        case 'add':
            num2 = +display.textContent
            total = num1 + num2;
            displayValue = `${total}`
            display.textContent = total;
            break;
        
        case 'subtract':
            total = subtract(num1, num2);
            break;

        case 'multiply':
            total = multiply(num1, num2);
            break;
        
        case 'divide':
            total = divide(num1, num2);
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
    }
})
);