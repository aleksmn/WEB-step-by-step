// console.log("Привет, Мир!")

/*
let js = 'fun';
if (js === 'fun') alert('Javascript is FUN!');

console.log(40 + 8 + 5 + 12);

let firstName = "Михаил";
console.log(firstName);

let lastName = "Александров"

console.log(firstName + ' ' + lastName);

// let 32 = 32;                 // error
// let function = "hello";      // error



//////// Data Types //////////

//// 1. Number: 
let age = 21;
//// 2. String:
let firstName = "Михаил";
//// 3. Boolean
let human = true;
//// 4. Undefined
let lastName;


console.log(typeof lastName);
console.log(typeof firstName);
console.log(typeof human);


////// Область видимости ///////

{
    let a = "hello";
    var b = "привет!";
}

console.log(b);
// let a = "новое значение";  // SyntaxError: Identifier 'a' has already been declared


let x = 7;
let x = 'hi';   //// SyntaxError: Identifier 'x' has already been declared

var y = 8;
var y = "hello"; //// no error

console.log(y);




////// const и let ////////

let age = 35;
age = 30;

const birthYear = 1991;
// birthYear = 1990;  // TypeError: Assignment to constant variable.

// const job;  //  SyntaxError: Missing initializer in const declaration


const a = ['a', 'b', 'c'];
a[3] = 'hello!';
console.log(a);




////// Основные операторы /////////



const ageJohn = 2022 - 1995;
const ageJane = 2022 - 1998;

console.log(ageJohn, ageJane);

console.log(ageJohn * 2);

console.log(2 ** 3);

console.log('Михаил' + ' ' + 'Александров');

let x = 10 + 5; // 15
x += 10;        // 25
x *= 4;         // 100
x++;            // 101
console.log(x);


// Сравнение
console.log(ageJohn > ageJane); // true
console.log(ageJane >= 18);     // true

const isFullAge = ageJane >= 18;

console.log(isFullAge);



//// Приоритет операторов:
//// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

const now = 2022;
console.log(now - 1991 < now - 2018);

let x, y;
x = y = 25 - 10 * 2;
console.log(x, y);


const ageJohn = now - 1995;
const ageJane = now - 1998;

const averageAge = ageJane + ageJohn / 2;

console.log(ageJohn, ageJane, averageAge);


*/



/////////// Задание 1 ////////////

/*  Марк и Джон сравнивают свои показатели BMI,
    который рассчитывается по следующей формуле:
    BMI = вес / (рост в квадрате)

    1. Запиши вес и рост Марка и Джона в переменные.
    2. Посчитай их BMI.
    3. Создай переменную 'markHigherBMI', которая содержит
       информацию о том, больше этот показатель у Марка, или нет.


    ТЕСТ 1: Вес Марка 78 кг, рост 1.69 м.
            Вес Джона 92 кг, рост 1.95 м.
    
    ТЕСТ 2: Вес Марка 95 кг, рост 1.88 м.
            Вес Джона 85 кг, рост 1.76 м.


*/

//// Решение
/*
//// Test 1
const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95;

//// Test 2
// const weightMark = 95;
// const heightMark = 1.88;
// const weightJohn = 85;
// const heightJohn = 1.76;

const bmiMark = weightMark / heightMark ** 2;
const bmiJohn = weightJohn / heightJohn ** 2;

const markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBMI);

///// С округлением:
// console.log(bmiMark.toFixed(2), bmiJohn.toFixed(2), markHigherBMI);

*/


/////// Решение с использованием функции
/*
const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 95;
const heightJohn = 1.88;
 
function calculateBMI(mass, height) {
  let bmi = 0;
  bmi = mass / height ** 2;
 
  return bmi.toFixed(2);
}
 
markBMI = calculateBMI(weightMark, heightMark);
 
johnBMI = calculateBMI(weightJohn, heightJohn);
 
console.log(
  `Вес Марка ${weightMark} кг, его рост ${heightMark} м, его BMI: ${markBMI}`
);
console.log(
  `Вес Джона ${weightJohn} кг, его рост ${heightJohn} м, его BMI: ${johnBMI}`
);
*/


/*
//// Строки

const firstName = 'Владимир';
const job = 'программист';
const birthYear = 1995;
const year = 2022;

let vlad = "Меня зовут " + firstName + ", я " + job;
vlad += ", мне " + (year - birthYear) + " лет."

console.log(vlad);

//// Использование шаблона строки: 

let vladNew = `Меня зовут ${firstName}, мне ${year - birthYear} лет, я ${job}!`;
console.log(vladNew);

console.log(`Переход 
на 
другую
строку!`);




//// Принятие решений (если / иначе)

const age = 13;

if (age >= 18) {
  console.log("Можно получить водительские права :)");
} else {
  const yearsLeft = 18 - age;
  console.log(`Получать права рано, осталось ждать лет: ${yearsLeft}.`)
}
*/
//// с учетом русского языка:
/*
if (age >= 18) {
  console.log("Можно получить водительские права :)");
} else {
  const yearsLeft = 18 - age;
  // console.log(`Получать права рано, осталось ждать лет: ${yearsLeft}.`)
  if (yearsLeft==1) {
    console.log(`Осталось ждать всего один год. Учи теорию пока)`);
  } else if (yearsLeft<5) {
    console.log(`Получать права рано, осталось ждать ${yearsLeft} года.`);
  } else {
    console.log(`Получать права рано, осталось ждать ${yearsLeft} лет.`);
  }
  
}

*/




///// Задание 2 /////

/*

Для Задания 1 добавь вывод в консоль:

"BMI Марка больше, чем у Джона" или наоборот,
в зависимости от результата.



//// Преобразование типов и приведение типов (Type Conversion and Coercion)


// преобразование типов (conversion)
const year = '2022';

console.log(year + 18); // 202218

console.log(Number(year) + 18); // 2040

console.log(Number('Привет!'));

console.log(String(23));

// приведение типов (coercion)

console.log("Марку " + 15 + " лет.");
console.log('23' - 10);
console.log('23' + 10);


// Угадай результат:
// 1.
let n = '1' + 1;
n = n - 1;
console.log(n)
// 2.
console.log(2+3+4+'5');
// 3.
console.log('10'-'4'-'3'-2+'5');



///// Falsy and Truthy values

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// truthy values: все остальные
console.log(Boolean(12));
console.log(Boolean('привет'));


const money = '';
if (money) {
  console.log("You have money!!!")
} else {
  console.log("No money...")
}




//// Операторы сравнения

const age = '18';
if (age === 18) console.log('Возраст 18 лет.');


const favNum = Number(prompt("Какое твое любимое число?"));
console.log(favNum);
console.log(typeof favNum);

if (favNum === 15) {
  console.log("15 это отличное число!");
} else if (favNum === 11) {
  console.log("11 - барабанные палочки!");
} else {
  console.log("Тоже хорошее число!");
}

if (favNum !== 15) console.log("Почему бы не 15?");


*/

//// Булева логика  (boolean logic) ////

/* Пример: 
A) У Марка есть водительские права  (ИСТИНА/ЛОЖЬ)
B) У Марка есть автомобиль   (ИСТИНА/ЛОЖЬ)

    1) A И B = ИСТИНА если и А = ИСТИНА, и B = ИСТИНА

    2) A ИЛИ B = ИСТИНА если хотя бы одно из утверждений ИСТИНА

    3) НЕ А, НЕ B переворачивает ИСТИНА/ЛОЖЬ

*/

const hasDriversLicense = true; // A
const hasCar = true; // B

console.log(hasDriversLicense && hasCar); // A И B
console.log(hasDriversLicense || hasCar); // A ИЛИ B
console.log(!hasCar); // НЕ B


if (hasDriversLicense && hasCar) {
  console.log("Mark can drive!");
} else {
  console.log("Mark can not drive.");
}

// Добавим еще одну переменную.

const isTired = true; // C

if (hasCar && hasDriversLicense && !isTired) {
  console.log("Mark can drive!");
} else {
  console.log("Mark can not drive.");
}