'use strict';
/*
///// Для чего нужен 'use strict'

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // делаем ошибку в названии переменной

if(hasDriversLicense) console.log('Можно за руль.');  // ReferenceError при 'use strict'

let interface; // SyntaxError: Unexpected strict mode reserved word
let private; // SyntaxError: Unexpected strict mode reserved word



//////  Функции  ///////

function logger() {
    console.log('Привет, это функция логгер');
}

// вызов функции
logger();
logger();
logger();


function getSum(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
    return sum;
}

console.log(getSum(123, 3425) * 5); 



// Калькулятно дат

let dateOne = new Date("2022-02-1");
let dateTwo = new Date("2022-2-28");
console.log(dateOne);
console.log(dateTwo);
// Разница во времени в милисекундах:
let timeDiff = dateTwo.getTime() - dateOne.getTime()
console.log(timeDiff);

// Разница во времени в дня
let dayDiff =  timeDiff / (1000*60*60*24);
console.log(dayDiff);
// console.log(Date("23-01-2022").getTime());

*/


//// Калькулятор разницы дат ////

function getDateDiff(date1, date2) {
    // Даты в формате "год-месяц-число"

    let dateOne = new Date(date1);
    let dateTwo = new Date(date2);

    // Разница во времени в миллисекундах:
    let timeDiff = dateTwo.getTime() - dateOne.getTime()

    // Разница во времени в дня
    let dayDiff =  timeDiff / (1000*60*60*24);

    return dayDiff;
}


console.log(getDateDiff("2022-1-1", "2022-1-31"));

console.log(getDateDiff("2000-1-1", "2022-1-23"));