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