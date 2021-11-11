// Создаем случайные числа от 1 до 6 для каждого игрока
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber1, randomNumber2);

// Подбираем картинку под полученные числа

var src1 = "images/dice" + randomNumber1 + ".png";
var src2 = "images/dice" + randomNumber2 + ".png";

var img1 = document.querySelector(".img1").setAttribute("src", src1);
var img2 = document.querySelector(".img2").setAttribute("src", src2);

// Выводим результат на экран

var result;

if (randomNumber1 > randomNumber2) {
    result = "Player 1 Wins!"
}

else if (randomNumber1 < randomNumber2) {
    result = "Player 2 Wins!"
}

else {
    result = "Draw!"
}

document.querySelector("h1").innerText = result