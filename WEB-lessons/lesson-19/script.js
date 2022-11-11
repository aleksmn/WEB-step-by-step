let username = prompt("Введите свое имя")


if (username == "Admin") {
    alert("Добро пожаловать, Админ!");
}

else {
    alert("Привет " + username + "!");
}


console.log("На сайт зашел пользователь с ником " + username)