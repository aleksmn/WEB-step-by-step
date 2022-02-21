const str = 'i have learned something new today';

const arr = str.split(" ");


for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}

const str2 = arr.join(" ");
console.log(str2);





// Вариант 2. Используем объект


// String.prototype.toCapitals = function () {


//     // console.log(String(this));

//     const words = this.split(' ');

//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//     }

//     return words.join(" ");



// };



// Вариант 3.


// String.prototype.toCapitals = function () {
//     return this.split(" ").map(function (word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(" ");
// }

// console.log("hello world".toCapitals())