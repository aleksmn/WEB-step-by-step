/*

1) Создайте объект "автомобиль" с ключами "марка", "модель" и "год выпуска". Выведите информацию об автомобиле на экран.

2) Создайте объект "пользователь" с ключами "имя", "возраст" и "адрес". Запросите у пользователя эти данные и сохраните их в объекте. Выведите информацию о пользователе на экран.

3) Создайте объект "книга" с ключами "название", "автор" и "год издания". Добавьте метод в объект, который будет выводить информацию о книге в формате "Название книги - Автор (Год издания)".

4) Создайте объект "калькулятор" с методами для сложения, вычитания, умножения и деления двух чисел. Позвольте пользователю ввести два числа и операцию, затем выведите результат.

5) Создайте объект "продукт" с ключами "название", "цена" и "количество". Добавьте метод в объект, который будет рассчитывать общую стоимость продукта (цена * количество) и выводить её на экран.


*/



// 1
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};


// 2
let user = {};

user.name = prompt("Введите ваше имя:");
user.age = prompt("Введите ваш возраст:");
user.address = prompt("Введите ваш адрес:");

console.log(`Имя: ${user.name}, Возраст: ${user.age}, Адрес: ${user.address}`);


// 3
let book = {
    title: "Война и мир",
    author: "Лев Толстой",
    year: 1869,
    getInfo: function() {
        console.log(`${this.title} - ${this.author} (${this.year})`);
    }
};

book.getInfo();


// 4
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
};

let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));
let operation = prompt("Выберите операцию: сложение (+), вычитание (-), умножение (*), деление (/)");

let result;

switch(operation) {
    case "+":
        result = calculator.add(num1, num2);
        break;
    case "-":
        result = calculator.subtract(num1, num2);
        break;
    case "*":
        result = calculator.multiply(num1, num2);
        break;
    case "/":
        result = calculator.divide(num1, num2);
        break;
    default:
        result = "Некорректная операция";
}

console.log(`Результат: ${result}`);


// 5
let product = {
    name: "Футболка",
    price: 20,
    quantity: 3,
    getTotalPrice: function() {
        return this.price * this.quantity;
    }
};

console.log(`Общая стоимость продукта: ${product.getTotalPrice()}`);
