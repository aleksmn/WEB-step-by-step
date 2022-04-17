// Старый метод

// Конструктор объектов
function User (name, age, email, languages) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.languages = languages;
    this.speak = function () {
        console.log(`Привет, меня зовут ${this.name} мне ${this.age}.`);
    }
}


// Создание объекта (инициализация)
let user1 = new User('Алексей', 19, 'aleks@mail.ru', ['ru', 'en']);
console.log(user1.name, user1.age);
user1.speak();



///// Новый метод

class Student {
    constructor(name, age, email, languages) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.languages = languages;
    }

    speak() {
        console.log(`Привет, меня зовут ${this.name} мне ${this.age}.`);
    }
}


let student1 = new Student('Виталий', 16, 'vitalii@mail.ru', ['ru', 'fr']);

console.log(student1.name, student1.age);
student1.speak();