///// Введение в объекты (Objects)

// const user1 = {
//   name: "Дмитрий",
//   age: 18,
// };

// const user2 = {
//   name: "Виталий",
//   age: 21,
// };

// console.log(`Привет, меня зовут ${user1.name}! Мой возраст: ${user1.age}`);
// console.log(`Привет, меня зовут ${user2.name}!`);




// Создание класса

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`Привет, меня зовут ${this.name}! Мой возраст: ${this.age}.`);
  }
}


class Student extends Person {
    
    constructor (name, age, year) {
        super(name, age)

        this.year = year
    }

    doHomeWork() {
        console.log(`Ученик ${this.name} выполняет домашнее задание`)
    }

    getYear(){
        console.log(`Год обучения: ${this.year} `)
    }

}


class Teacher extends Person {

    constructor (name, age, subject) {
        super(name, age)
        this.subject = subject
    }

    checkHomeWork() {
        console.log(`Учитель ${this.name} проверяет домашнее задание`)
    }

    getSubject() {
        console.log(this.subject)
    }
}


student1 = new Student("Виталий", 12, 3)

student1.speak()
student1.doHomeWork()
student1.getYear()


teacher1 = new Teacher("Виталий", 42, 'информатика')

teacher1.speak()
teacher1.checkHomeWork()
teacher1.getSubject()



















// Создание объектов

// let user1 = new Person("Дима", 22) 
// let user2 = new Person("Констанин", 16)

// user1.speak()
// user2.speak()




// Упражнения

// 1.
// Создайте класс Rectangle, который содержит свойства width и height, 
// а также метод getArea(), который возвращает площадь прямоугольника. 
// Создайте экземпляр класса и выведите его площадь.



// 2
//Создайте класс Vehicle, который содержит свойства make (марка), model и year, 
// а также метод start(), который выводит в консоль сообщение о запуске двигателя. 
// Создайте класс Car, который наследует свойства и методы класса Vehicle, 
// а также содержит свойство numDoors и метод openDoors(), который выводит в консоль 
// сообщение об открытии дверей. Создайте экземпляр класса Car и вызовите для него 
// методы start() и openDoors().