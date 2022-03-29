console.log("Привет!");

// Калькулятор

function calc() {
    let a = parseFloat(prompt("Введите a"));
    let b = parseFloat(prompt("Введите b"));

    let sum = a + b;

    alert("a + b = " + sum)
}

// Работа с текстом

function textCalc(){

    let text = prompt('Введите текст: ');

    console.log("Длина текста: " + text.length);
    console.log("Первая буква: " + text[0])
    console.log("Последняя буква: " + (text[text.length - 1]))

}

// Вызываем функции:

// calc()

// textCalc()
