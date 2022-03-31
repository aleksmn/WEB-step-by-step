// ТЕОРИЯ

// Методы

function speak(line) {
    console.log(this.type + " говорит " + line);
}

let whiteRabbit = {
    type: "белый",
    speak: speak
};

whiteRabbit.speak('привет');


// Прототипы

// console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
// // → true
// console.log(Object.getPrototypeOf(console.log) == Function.prototype);
// // → true
// console.log(Object.getPrototypeOf([]) == Array.prototype);
// // → true
// console.log(Object.getPrototypeOf({}) == Object.prototype);
// // → true
// console.log(Object.getPrototypeOf('hello') == String.prototype);
// // → true
// console.log(Object.getPrototypeOf(123) == Number.prototype);
// // → true

/*

Векторный тип


Напишите конструктор Vector, представляющий вектор в двумерном пространстве.Он принимает параметры x и y(числа), которые хранятся в одноимённых свойствах.
Дайте прототипу Vector два метода, plus и minus, которые принимают другой вектор в качестве параметра и возвращают новый вектор, который хранит в x и y сумму или разность двух векторов(один this, второй – аргумент).
Добавьте геттер length в прототип, подсчитывающий длину вектора – расстояние от(0, 0) до(x, y).

*/


// function Vector(x, y) {
//     this.x = x;
//     this.y = y;
// }

// Vector.prototype.plus = function (other) {
//     return new Vector(this.x + other.x, this.y + other.y);
// };

// Vector.prototype.minus = function (other) {
//     return new Vector(this.x - other.x, this.y - other.y);
// };

// Object.defineProperty(Vector.prototype, "length", {
//     get: function () {
//         return Math.sqrt(this.x * this.x + this.y * this.y);
//     }
// });

// console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// // → Vector{x: 3, y: 5}
// console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// // → Vector{x: -1, y: -1}
// console.log(new Vector(3, 4).length);
// // → 5
