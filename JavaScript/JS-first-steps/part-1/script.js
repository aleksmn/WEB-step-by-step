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
// console.log(bmiMark.toPrecision(4), bmiJohn.toPrecision(4), markHigherBMI);

*/


/////// Решение с использованием функции
/*
const mark_mass = 78;
const mark_height = 1.69;
const john_mass = 95;
const john_height = 1.88;
 
function calculateBMI(mass, height) {
  let bmi = 0;
  bmi = mass / height ** 2;
 
  return bmi.toFixed(2);
}
 
markBMI = calculateBMI(mark_mass, mark_height);
 
johnBMI = calculateBMI(john_mass, john_height);
 
console.log(
  `Вес Марка ${mark_mass} кг, его рост ${mark_height} м, его BMI: ${markBMI}`
);
console.log(
  `Вес Джона ${john_mass} кг, его рост ${john_height} м, его BMI: ${johnBMI}`
);
*/