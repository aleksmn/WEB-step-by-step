// Калькулятор

function calc() {
  let input1 = document.getElementById("num1");
  let input2 = document.getElementById("num2");

  let a = parseFloat(input1.value);
  let b = parseFloat(input2.value);

  let result = document.getElementById("result");
  let resultText = `${a} + ${b} = ${a + b}\n${a} - ${b} = ${a - b}` + 
                 `\n${a} * ${b} = ${a * b}\n${a} / ${b} = ${a / b}\n`;

  result.innerText = resultText;

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
