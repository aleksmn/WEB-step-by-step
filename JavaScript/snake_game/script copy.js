const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");

// console.log(playBoard, scoreElement, highScoreElement)
// console.log(controls)

let foodX, foodY;
let snakeX = 5, snakeY = 5;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let intervalId;
let score = 0;
let gameOver = false;




// получаем случайную позицию для еды

function updateFoodPosition () {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

// Игровая функция, которую вызываем через интервал
function initGame () {

    // Размещаем еду на экрана
    let html = `<div class="food" style="grid-area:${foodY} / ${foodX}"></div>`
    
    


    // Вывод HTML на экран
    playBoard.innerHTML = html;

}



// Запуск игры
updateFoodPosition();

intervalId = setInterval(initGame, 100)

console.log(foodX, foodY)