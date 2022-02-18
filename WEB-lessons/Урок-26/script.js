let text = "";

for (let i = 0; i < 5; i++) {


    text += "<h3>Номер " + i + "</h3>";

    // text = text + "<h3>Номер " + i + "</h3>";


}

document.getElementById("demo").innerHTML= text;



// document.getElementById("demo").innerHTML = text;


// Массивы


const users = ["Кирилл", "Дмитрий", "Иван", "Артем"];

console.log(users[0]);
console.log(users.length);

// let text = '';

// for (let i = 0; i < users.length; i++) {

//     text += users[i] + "<br>";


// }
// document.getElementById("demo").innerHTML = text;





////// Методы массива ///////


/*
// Добавление элементов
users.push('Алексей');
users.unshift('Михаил');

console.log(users);

// Удаление элементов
console.log(users.pop());
console.log(users.shift());

console.log(users);

console.log(users.indexOf("Дмитрий"));
console.log(users.indexOf("Юлия"));

console.log(users.includes("Дмитрий"));
console.log(users.includes("Юлия"));

if (users.includes("Артем")) {
    console.log("Есть пользователь с именем Артем");
}


*/


/*

// Функция удаления элемента

const users = [ "Артем", "Дмитрий","Кирилл", "Иван"];


function delItem(myArr, item) {
    const itemToDel = item;
    const indexToDel = myArr.indexOf(itemToDel);

    if (indexToDel > 0) {
        myArr.splice(indexToDel, 1);
    } else {
        console.log("Элемент не найден!");
    }
}

delItem(users, "Дмитрий");

console.log(users);

*/