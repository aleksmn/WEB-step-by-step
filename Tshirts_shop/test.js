


// Создаем функцию

function sayHello() {

    // Объявляем переменную username
    let username = prompt("Введите имя: ")

    // Если username равен 'Admin'
    if (username == 'Admin') {
        alert("Добро пожаловать, " + username + "!")
    }

    else {
        alert("Привет " + username + "!")
    }

}










function sumNums(a, b) {

    //parseInt() - получить целое число
    //parseFloat() - получить дробное число 

    alert(a + b)

}

function floorDiv(a, b) {

    const remainder = a % b;

    alert((a - remainder) / b)
}


function calc() {
    alert("Добро пожаловать в калькулятор!")

    let choice = prompt(`Введите действие: 
    1 - сумма
    2 - вычитание
    3 - умножение
    4 - деление
    5 - деление нацело
    `)

    if (parseInt(choice) > 5 || parseInt(choice) < 1) {
        alert(`Неверный ввод действия`)
        return
    }

    let a = prompt("Введите первое число: ");
    let b = prompt("Введите второе число: ");

    // Получаем числа
    a = parseFloat(a);
    b = parseFloat(b);

    if (choice === '1') {
        alert(`${a} + ${b} = ${a + b}`)
    }


    else if (choice === '2') {
        alert(`${a} - ${b} = ${a - b}`)
    }
    else if (choice === '3') {
        alert(`${a} * ${b} = ${a * b}`)
    }
    else if  (choice === '4') {
        alert(`${a} / ${b} = ${a / b}`)
    }

    else if (choice === '5') {
        floorDiv(a, b)
    }

    else {
        alert(`Неверный ввод действия`)
    }
    

}



// Вызов функции
calc()












// function calc() {
//     alert("Добро пожаловать в Калькулятор!")
//     const choice = prompt("Выберите действие:\n1 - сумма\n2 - целочисленное деление")

//     const a = parseFloat(prompt("Введите число: "));
//     const b = parseFloat(prompt("Введите второе число:"));

//     if (choice === '1') {
//         sumNums(a, b)
//     }

//     else if (choice === '2') {
//         floorDiv(a, b)

//     }

//     // добавить * / - 

// }

// Калькулятор - вызов
// calc()



//// Строки

// const firstName = 'Владимир';
// const job = 'программист';
// const birthYear = 1995;

// console.log(firstName)
// console.log(firstName.length)
// // Первая буква
// console.log(firstName[0])
// // Последний символ
// console.log(firstName[firstName.length - 1])

// console.log(firstName.indexOf('Влад'))





// Задача на дом
// Написать функцию, которая принимает от пользователя 2 числа и выводит
// результат деления нацело и остаток от деления