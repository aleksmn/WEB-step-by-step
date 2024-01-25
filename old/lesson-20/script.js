
// Создаем функцию

function sayHello() {

    // Объявляем переменную username
    let username = prompt("Введите имя: ")

    // Если username равен 'Admin'
    if (username == 'Admin') {
        alert("Добро пожаловать, " + username + "!")
    }

    else {
        alert("Привет " + username + "!")
    }

}

