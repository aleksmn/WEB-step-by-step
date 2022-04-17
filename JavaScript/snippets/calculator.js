function plus(num1, num2) {
    return num1 + num2;
}

function minus(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}



function calculator(num1, num2, operator) {
    return operator(num1, num2);
}


console.log(calculator(6, 3, plus))
console.log(calculator(6, 3, minus))
console.log(calculator(6, 3, multiply))
console.log(calculator(6, 3, divide))