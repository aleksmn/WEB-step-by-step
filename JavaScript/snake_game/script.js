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
let gameOver = false;


// Получим highscore из локального хранилища
let highScore = localStorage.getItem("high-score") || 0;
console.log(highScore)

highScoreElement.innerText = `High Score: ${highScore}`


const handleGameOver = () => {
    clearInterval(intervalId);
    addEventListener;
    alert("Game Over! Press OK to replay")
    location.reload();
}


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
    if (gameOver) return handleGameOver();

    let html = `<div class="food" style="grid-area:${foodY} / ${foodX}"></div>`;

    // Кагда съедаем еду, позиция меняется на случайную
    if (snakeX === foodX && snakeY === foodY) {
        updateFoodPosition();
        // Добавляем элемент к змейке
        snakeBody.push([foodX, foodY]);

        // Увеличиваем счет на 1
        score++;

        // Увеличиваем highscore
        highScore = score >= highScore ? score : highScore;
        localStorage.setItem("high-score", highScore);

        scoreElement.innerText = `Score: ${score}`;
        highScoreElement.innerText = `High Score: ${highScore}`

         
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


    // проверяем столкновения со стеной
    if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        gameOver = true;
    }

    // Создадим div для каждой части змейки
    for (let i = 0; i < snakeBody.length; i++) {
        html += `<div class="head" style="grid-area:${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;

        if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
            gameOver = true;
        }
       
    }


    playBoard.innerHTML = html;

}

// Запуск
updateFoodPosition();
intervalId = setInterval(initGame, 100);

document.addEventListener("keyup", changeDirection)