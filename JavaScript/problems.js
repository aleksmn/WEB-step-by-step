// // Дано двузначное число a.Найди и выведи количество десятков в нем.

// let a = 75;
// console.log(a / 10);
// console.log(parseInt(a / 10));
// console.log(Math.floor(a / 10));


// // Дано двузначное число a.Найди и выведи его последнюю цифру.

// let b = 56;
// console.log(b % 10);


// // Программа получает на вход дробное число a.
// // Найди и выведи первую цифру после десятичной точки.

// let a1, a2, result;
// a1 = 35.97;
// a2 = 7.45;
// result = Number.parseInt(a2 * 10 % 10);
// console.log(result);



// // Посчитай количество слов( «—» не является словом).

// let a = 'int - это целочисленный тип данных';
// console.log(a.replace(" -", ""));
// console.log('Количество слов:', a.replace(" -", "").split(' ').length);




// // Даны 3 строки a, b, c — фамилия, имя и отчество соответственно.
// // Составь строку из инициалов данного ФИО.

// let a, b, c;
// [a, b, c] = ["Иванов", "Степан", "Александрович"];
// console.log(a, b, c);
// console.log(a[0] + "." + b[0] + "." + c[0]);
// console.log(`${a[0]}.${b[0]}.${c[0]}`);




// // Даны 3 целых числа a, b и c. Найди и выведи количество отрицательных чисел.

// let [a, b, c] = [-1, -3, -3];

// if (a > 0) {
//     if (b > 0) {
//         if (c > 0) {
//             console.log(0);
//         } else {
//             console.log(1);
//         }
//     } else {
//         if (c > 0) {
//             console.log(1);
//         } else {
//             console.log(2);
//         }
//     }
// } else {
//     if (b > 0) {
//         if (c > 0) {
//             console.log(1);
//         } else {
//             console.log(2);
//         }
//     } else {
//         if (c > 0) {
//             console.log(2);
//         } else {
//             console.log(3);
//         }
//     }
// }

// // * используем filter для предыдущей задачи

// const nums = [1, 3, -3];
// const numsFiltered = nums.filter(function(n){
//     return n > 0;
// });

// console.log(numsFiltered);
// console.log(numsFiltered.length);



// Как заменить в стоке числа на слова, например
// 1 кот, 2 кота, 3 кота' => один кот, два кота, три кота


// let nums = {
//     '1': 'один',
//     '2': 'два',
//     '3': 'три'
// }

// let myString = '1 кот, 2 кота, 3 кота';

// for (n in nums) {
//     myString = myString.replace(n, nums[n]);
// }


// console.log(myString);