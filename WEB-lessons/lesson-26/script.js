const myDiv = document.createElement('div')

console.log(myDiv)

document.querySelector("body").appendChild(myDiv)

myDiv.classList.add('main')




// Цикл

for (let n = 10; n > 0; n = n - 1) {

    myDiv.innerHTML += `<p>Номер ${n}</p>`;


}



// Выводим строку каждые 2 секунды

// for (let i = 0; i < 11; i += 2) {

//     function myFunc () {
//         myDiv.innerHTML += `<p>Секунда ${i}</p>`;
//     }

//     setTimeout(myFunc, i * 1000);

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

// const users = ["Кирилл", "Дмитрий", 'Вася', "Иван", "Артем"];

// console.log(users);

// console.log(users[0]);
// console.log(users[1]);
// console.log(users.length);



// Как вывести последний элемент массива?


// // Последний элемент массива:
// console.log(users[users.length - 1]);



// for (let i = 0; i < users.length; i++) {

//     myDiv.innerHTML += "<p>" + users[i] + "</p>";

// }





// For of
// // Перебор массива

for (let user of users) {

    myDiv.innerHTML += user + "<br>";

}




// Методы массива
// Добавление элементов

// users.push('Алексей');

// users.unshift('Михаил');


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