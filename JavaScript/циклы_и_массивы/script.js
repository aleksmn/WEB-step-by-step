
const myDiv = document.createElement('div')

console.log(myDiv)

document.querySelector("body").appendChild(myDiv)

myDiv.classList.add('main')



// Цикл

// for (let i = 1; i < 11; i++) {

//     myDiv.innerHTML += `<p>Привет ${i}</p>`;

// }






// let number = 0;

// while (number <= 14) {

//     myDiv.innerHTML += `<p>Номер ${number}</p>`;

//     number = number + 2;
// }



/*

for(let i = 0; i < 50; i+=10) {

    console.log("Номер " + i);

}

console.log("Цикл закончился!");


let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}


*/

// for (let i = 1; i < 12; i++) {

//     let color1 = "red"
//     let color2 = "blue"

//     if (i % 2 == 0) {
//         myDiv.innerHTML += `<h3 style='color:${color1};'>Номер ${i}</h3>`;
//     }
//     else {
//         myDiv.innerHTML += `<h3 style='color:${color2};'>Номер ${i}</h3>`;
//     }

// }




// Массивы Array

const users = ["Кирилл", "Дмитрий", 'Вася', "Иван", "Артем"];

console.log(users);

console.log(users[0]);

// console.log(users[1]);

console.log(users.length);




// Перебираем циклом

// for (let i = 0; i < users.length; i++) {
//     myDiv.innerHTML += "<p>" + users[i] + "</p>";
// }

// // Способ 2
// // FOR OF

// for (let name of users) {
//     myDiv.innerHTML += `<p>${name}</p>`;
// }




// ====================
// Методы массива

// Добавление элементов
users.push('Алексей');
users.unshift('Василий');


// Удаление элементов
// последний
users.pop()
// первый
users.shift()


// Удаление по индексу
users.splice(3, 1)


// Вывод массива
for (let name of users) {
    myDiv.innerHTML += `<p>${name}</p>`;
}






















 





// // Получаем индекс элемента

// console.log(users.indexOf("Кирилл"))
// console.log(users.indexOf("qwerty"))

// // Проверка, есть ли такой элемент
// console.log(users.includes("qwewrt"))



// // Удаление по индексу

// users.splice(0, 1)

// console.log(users)



// Написать программу, которая принимает от  пользователя
// имя и удаляет это имя из массива
// если такого имени нет, выводит в консоль сообщение об этом.
















/// Вывод массива на страницу ///

// For of
// // Перебор массива
// for (let user of users) {
//     myDiv.innerHTML +="<p>" + user + "</p>";
// }








// // // Удаление элементов

// // users.pop()

// let deletedLastUser = users.pop();

// console.log(deletedLastUser, users);









// function printArray(array, div) {

//     div.innerHTML = '';

//     for (let i = 0; i < array.length; i++) {

//         div.innerHTML += `<p>${(i + 1)}. ${array[i]}</p>`;

//     }
// }


// const usersDiv = document.createElement("div");
// usersDiv.id = "users";

// myDiv.appendChild(usersDiv);

// printArray(users, usersDiv);



////// Методы массива ///////

// const users = ["Кирилл", "Дмитрий", "Иван", "Артем"];



// Добавление элементов
// users.push('Алексей');

// users.unshift('Михаил');


// console.log(users);





// // Удаление элементов

// let deletedLastUser = users.pop();

// console.log(deletedLastUser, users);


// let deletedFirstUser = users.shift();
// console.log(deletedFirstUser, users);


// console.log(users.indexOf("Дмитрий"));

// console.log(users.indexOf("Юлия"));



// console.log(users.includes("Дмитрий"));

// console.log(users.includes("Юлия"));



/*

function checkUser(username) {
    if (users.includes(username)) {
        return "Есть пользователь с именем " + username;
    } else {
        return "Пользователя " + username + " нет.";
    }
}

for (let i = 0; i < users.length; i++) {

    myDiv.innerHTML += users[i] + "<br>";

}


console.log(checkUser("Антон"));


// // Удаляем пользователя по индексу

users.splice(2, 1, "Александр", "Елена");


// users.splice(1, 0, "Новый пользователь");


console.log(users);

*/



// Функция удаления элемента
// Как удалить Дмитрия?
/*
const users = [ "Артем", "Дмитрий","Кирилл", "Иван"];







function delItem (myArr, item) {

    const indexToDel = myArr.indexOf(item);

    if (indexToDel > 0) {

        myArr.splice(indexToDel, 1);
        return myArr;

    } else {

        return "Элемент не найден!";
    }
}

console.log(delItem(users, "Дмитрий"));



*/







// 



// Написать функцию, которая находит сумму элементов массива.
// function sumArray(arr) {
//     let sum = 0;

//     // Написать код

//     return sum;
//   }
  
// console.log(sumArray([1, 2, 3, 4, 5])); // 15




// 1. напишем цикл, который выводит все элементы массива
// 2. напишем функцию
// 3. считаем сумму
// 4. делаем правильный вывод результата


// function sumArray(arr) {
//     let sum = 0;

//     for (let i of arr) {
//         myDiv.innerHTML += i + '<br>'
//         sum += i

//     }

//     myDiv.innerHTML += '<b>' + sum + '</b>'

//     return sum;
// }
  


// // Вызов функции
// let result = sumArray([888, 22, 0.3, 103, 5])

// console.log(result*100)