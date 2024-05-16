const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');

// Цвет игры
ctx.fillStyle = 'rgb(228, 164, 87)';

// Размер ячейки
// квадрат 15 на 15 пикселей
const grid = 15;

// Размер ракетки
const paddleHeight = grid * 5;

// Счетчики
const leftCounter = document.querySelector('#leftCounter');
const rightCounter = document.querySelector('#rightCounter');

//  Скорость мяча
let ballSpeed = 5;

// Скорость ракетки
let paddleSpeed = 5;

// Интервал
let intervalId;


// Объект левая ракетка
const leftPaddle = {
    x: grid * 2,
    y: canvas.height / 2 - paddleHeight / 2,
    width: grid,
    height: paddleHeight,
    dy: 0
}


// Объект правая ракетка
const rightPaddle = {
    x: canvas.width - grid * 3,
    y: canvas.height / 2 - paddleHeight / 2,
    width: grid,
    height: paddleHeight,
    dy: 0
}


// Объект мяч
const ball = {
    x: grid * 3,
    y: canvas.height / 2,
    width: grid,
    height: grid,
    dx: ballSpeed,
    dy: -ballSpeed,
}



function moveBall() {
    // перемещаем мяч по оси x и y
    ball.x += ball.dx
    ball.y += ball.dy


}

function collideWallsWithBall() {
    // столкновение мяча со стенками
    if (ball.y > canvas.height - grid) {
        ball.dy = -ball.dy;
    }

    else if (ball.y < grid) {
        ball.dy = -ball.dy;
    }


}




function clearcanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}



function renderPaddle(paddle) {
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height)
}


function renderBall() {
    ctx.fillRect(ball.x, ball.y, ball.width, ball.height);
}

function rendercanvas() {
    // Верхняя стенка
    //           x, y, ширина, высота
    ctx.fillRect(0, 0, canvas.width, grid)

    // Нижняя стенка
    ctx.fillRect(0, canvas.height - grid, canvas.width, grid)

    // Разделительная линия по центру поля
    // ctx.fillRect(canvas.width / 2, 0, grid, canvas.height)
    for (let i = grid; i < canvas.height - grid; i += grid * 2) {
        ctx.fillRect(canvas.width / 2, i, grid, grid)
    }

}


// Функция основного цикла игры
function loop() {
    clearcanvas()
    rendercanvas()
    moveBall()
    renderPaddle(leftPaddle)
    renderPaddle(rightPaddle)
    renderBall()
    collideWallsWithBall()

}



intervalId = setInterval(loop, 1000/120)
