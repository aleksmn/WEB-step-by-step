// console.log("Привет!");

// Калькулятор

function calc() {
    let a = parseFloat(prompt("Введите a"));
    let b = parseFloat(prompt("Введите b"));

    alert("a + b = " + (a+b) 
      + "\na - b= " + (a-b) 
      + "\na * b =" + (a*b));

    console.log(typeof a, typeof b);

    // Вывод результата на страницу:

    // const result = "a + b = " + (a+b) 
    //             + "\na - b= " + (a-b) 
    //             + "\na * b =" + (a*b);

    // document.getElementById("text").innerText = result;
}

// Работа с текстом

function textCalc() {

    let text = prompt('Введите текст: ');
    console.log(text);

    console.log("Длина текста: " + text.length);
    console.log("Первая буква: " + text[0])
    console.log("Последняя буква: " + (text[text.length - 1]))

    document.getElementById("text").innerText = "Текст: " + text + "\nДлина текста: " + text.length 
                                                + "\nПервая буква: " + text[0]
                                                + "\nПоследняя буква: " + (text[text.length - 1]);

}

// Вызываем функции:

// calc()

// textCalc()
