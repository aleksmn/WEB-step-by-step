const playBtn = document.getElementById("play-btn");


playBtn.addEventListener('click', function () {
    // Создаем случайные числа от 1 до 6 для каждого игрока
    let randomNumber1 = Math.floor(Math.random() * 6 + 1);
    let randomNumber2 = Math.floor(Math.random() * 6 + 1);

    // Подбираем картинку под полученные числа
    let src1 = `images/dice${randomNumber1}.png`;
    let src2 = `images/dice${randomNumber2}.png`;

    document.querySelector(".img1").setAttribute("src", src1);
    document.querySelector(".img2").setAttribute("src", src2);



    // Выводим результат на экран
    // https://emojipedia.org/triangular-flag/

    let result;

    if (randomNumber1 > randomNumber2) {
        result = "🚩 Player 1 Wins!";
    }

    else if (randomNumber1 < randomNumber2) {
        result = "Player 2 Wins! 🚩";
    }

    else {
        result = "Draw!";
    }

    document.querySelector("h1").innerText = result;

    
});
