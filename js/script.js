let operation // Operation Determiner 

// Operation functions

function add(num1, num2) { 
    operation = 'add'
    return num1 + num2
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

function operate(operation, total, num1, num2) { 
    switch (operation) {
        case 'add':
            total = add(num1, num2);
            break;
        
        case 'subtract':
            total =subtract(num1, num2);
            break;

        case 'multiply':
            total = multiply(num1, num2);
            break;
        
        case 'divide':
            total = divide(num1, num2);
            break;
    }
}
