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

console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
// → true
console.log(Object.getPrototypeOf(console.log) == Function.prototype);
// → true
console.log(Object.getPrototypeOf([]) == Array.prototype);
// → true
console.log(Object.getPrototypeOf({}) == Object.prototype);
// → true
console.log(Object.getPrototypeOf('hello') == String.prototype.);
// → true
console.log(Object.getPrototypeOf(123) == Number.prototype);
// → true