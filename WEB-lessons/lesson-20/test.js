
function calc() {
    const operation = prompt("Введите действие: ")
    const a = parseFloat(prompt("Введите первое число: "))
    const b = parseFloat(prompt("Введите второе число: "))

    if (operation === "+") {
        sumNums(a, b)
    }

    else {
        alert("Такого действия нет!")
    }

}

function sumNums(a, b) {
    alert(a + b)
}

// Вызов функции
// calc()




//// Строки

const firstName = 'Владимир';
const job = 'программист';
const birthYear = 1995;

console.log(firstName)
console.log(firstName.length)
// Первая буква
console.log(firstName[0])
// Последний символ
console.log(firstName[firstName.length - 1])

console.log(firstName.indexOf('Влад'))





// Задача на дом
// Написать функцию, которая принимает от пользователя 2 числа и выводит
// результат деления нацело и остаток от деления