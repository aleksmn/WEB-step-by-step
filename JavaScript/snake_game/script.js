const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");

// console.log(controls)
// console.log(playBoard, scoreElement, highScoreElement)

let foodX, foodY;
let snakeX = 5, snakeY = 5;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let intervalId;
let score = 0;


// Получим highscore из локального хранилища
let highScore = 0;

highScoreElement.innerText = `High-score: ${highScore}`


const updateFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}


// Управление змейкой
const changeDirection = e => {
    if (e.key === "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }

    else if (e.key === "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }

    else if (e.key === "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }

    else if (e.key === "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }

}

// События на кнопки под экраном
controls.forEach(button => button.addEventListener("click", () => changeDirection({
    key: button.dataset.key 
})));


const initGame = () => {


    let html = `<div class="food" style="grid-area:${foodY} / ${foodX}"></div>`;

    // Кагда съедаем еду, позиция меняется на случайную
    if (snakeX === foodX && snakeY === foodY) {
        updateFoodPosition();
        // Добавляем элемент к змейке
        snakeBody.push([foodX, foodY]);

        // Увеличиваем счет на 1
        score++;

        // Увеличиваем highscore
        // ...

        scoreElement.innerText = `Score: ${score}`;
         
    }

    // Меняем положение змеи
    // Голово
    snakeX += velocityX;
    snakeY += velocityY;
    // Хвост
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    snakeBody[0] = [snakeX, snakeY];



    // Создадим div для каждой части змейки
    for (let i = 0; i < snakeBody.length; i++) {
        html += `<div class="head" style="grid-area:${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;

    }

    playBoard.innerHTML = html;

}

// Запуск
updateFoodPosition();
intervalId = setInterval(initGame, 100);