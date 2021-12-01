console.log("Привет!");

// Калькулятор

function calc() {
    var a = parseFloat(prompt("Введите a"));
    var b = parseFloat(prompt("Введите b"));

    var sum = a + b;

    alert("a + b = " + sum)
}

// Работа с текстом

function textCalc(){

    var text = prompt('Введите текст: ');

    console.log("Длина текста: " + text.length);
    console.log("Первая буква: " + text[0])
    console.log("Последняя буква: " + (text[text.length - 1]))

}

// Вызываем функции:

// calc()

textCalc()
