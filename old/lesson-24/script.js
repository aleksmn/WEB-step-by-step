// Калькулятор

const calcBtn = document.getElementById('calcBtn')

calcBtn.onclick = function () {
  const result = document.getElementById("result");
  const input1 = document.getElementById("num1");
  const input2 = document.getElementById("num2");

  const a = parseFloat(input1.value);
  const b = parseFloat(input2.value);

  if (isNaN(a) || isNaN(b)) {
    result.innerText = "Введите числа";
    return
  }

  
  let resultText = `${a} + ${b} = ${a + b}\n${a} - ${b} = ${a - b}` + 
                 `\n${a} * ${b} = ${a * b}\n${a} / ${b} = ${a / b}\n`;

  result.innerText = resultText;
}

