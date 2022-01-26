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


/////// Калькулятно разности дат  ///////////

let dateOne = new Date("2022-02-1");
let dateTwo = new Date("2022-2-28");
console.log(dateOne);
console.log(dateTwo);
// Разница во времени в милисекундах:
let timeDiff = dateTwo.getTime() - dateOne.getTime()
console.log(timeDiff);

// Разница во времени в дняx
let dayDiff =  timeDiff / (1000*60*60*24);
console.log(dayDiff);
// console.log(Date("23-01-2022").getTime());


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



// Function declaration
function calcAge1(birthYear) {
    return 2022 - birthYear;
}
const age1 =  calcAge1(2000);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}
const age2 = calcAge2(2000);
console.log(age2);


//// Arrow function

const calcAge3 = birthYear => 2022 - birthYear;
console.log(calcAge3(2000));

const yearsUntilRetirement = birthYear => {
    const age = 2022 - birthYear;
    return 65 - age;
}

console.log(yearsUntilRetirement(2000));





/////  Функция вызывает другую функцию /////


function getDays(time) {
    // Принимает время в миллисекундах
    const days = time / (1000*60*60*24);
    return days;
}


function getDateDiff(date1, date2) {
    // Даты в формате "год-месяц-число"

    let dateOne = new Date(date1);
    let dateTwo = new Date(date2);

    // Разница во времени в миллисекундах:
    let timeDiff = dateTwo.getTime() - dateOne.getTime()

    // Разница во времени в дняx

    let dayDiff = getDays(timeDiff);

    return dayDiff;
}

console.log(getDateDiff("2022-1-1", "2022-1-31"));


*/


//////  Задание 2.1 /////////
/*  

В соревновании по гимнастике участвовали 2 команды,
Медведи и Панды. Они соревновались 3 раза, 
победитель - команда с самым большим средним баллом - получает кубок.

1. Создайте функцию для вычисления среднего балла команды.
2. Создайте функцию для выявления победителя.
3. Дополните функцию: если команда набрала в 2 раза больше очков, чем соперник,
    то она получает специальный приз.


ТЕСТ: Баллы Медведей: 96, 108, 89.
        Баллы Панд: 88, 91, 110.

*/

/*  
const calcAverage = (a, b, c) => (a + b + c) / 3

function checkWinner(avgBears, avgPandas) {
    if (avgBears > avgPandas) {
        console.log(`Победили Медведи со счетом ${avgBears} : ${avgPandas}`);
        if (avgBears >= avgPandas*2) {
            console.log('Медведи получают специальный приз!')
        }
    } else if (avgPandas > avgBears){
        console.log(`Победили Панды со счетом ${avgPandas} : ${avgBears}`);
        if (avgPandas >= 2 * avgBears) {
            console.log('Панды получают специальный приз!');
        }
    } else {
        console.log("Ничья.")
    }
} 

const bears = calcAverage(34, 42, 233);
const pandas = calcAverage(34, 345, 23);

checkWinner(bears, pandas);



///// Массивы (Arrays) ///////


const users = ["Кирилл", "Дмитрий", "Иван", "Артем"];
console.log(users);
console.log(typeof users);

console.log(users[0]);
console.log(users[2]);
console.log(users[users.length - 1]);

users[2] = "Ксения";
console.log(users);


////// Методы массива ///////

// Добавление элементов
users.push('Алексей');
users.unshift('Михаил');

console.log(users);

// Удаление элементов
console.log(users.pop());
console.log(users.shift());

console.log(users);

console.log(users.indexOf("Дмитрий"));
console.log(users.indexOf("Юлия"));

console.log(users.includes("Дмитрий"));
console.log(users.includes("Юлия"));

if (users.includes("Артем")) {
    console.log("Есть пользователь с именем Артем");
}


*/