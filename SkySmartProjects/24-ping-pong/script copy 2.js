const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(228, 164, 87)';

const grid = 15;
const paddleHeight = grid * 5;
const maxPaddleY = canvas.height - grid - paddleHeight;

const leftCounter = document.querySelector('#leftCounter');
const rightCounter = document.querySelector('#rightCounter');

leftCounter.textContent = 0;
rightCounter.textContent = 0;

let ballSpeed = 7;
let paddleSpeed = 7;

// создадим объекты ракеток
const leftPaddle = {
    x: grid * 2,
    y: canvas.height / 2 - paddleHeight / 2,
    width: grid,
    height: paddleHeight,
    dy: 0
}
const rightPaddle = {
    x: canvas.width - grid * 3,
    y: canvas.height / 2 - paddleHeight / 2,
    width: grid,
    height: paddleHeight,
    dy: 0
}

//  создаем объект мяч
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: grid,
    height: grid,
    dx: ballSpeed,
    dy: -ballSpeed,
    isResetted: false
}

// Функция для очистки экрана
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}



// Отрисовка ракеток
function renderPaddle(paddle) {
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height)
}

// Отрисовка мяча
function renderBall() {
    ctx.fillRect(ball.x, ball.y, ball.width, ball.height)
}

// Движение мяча
function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;
}


function rendercanvas() {
    ctx.fillRect(0, 0, canvas.width, grid); // Верхняя граница
    ctx.fillRect(0, canvas.height - grid, canvas.width, grid) // Нижняя граница

    for (let i = grid; i < canvas.height - grid; i += grid * 2) {
        ctx.fillRect(canvas.width / 2, i, grid, grid); // Разделительная линия
    }
}

// столкновение мяча со стенами
function collideWallsWithBall() {
    if (ball.y < grid) {
        ball.dy = -ball.dy;
    }

    else if (ball.y > canvas.height - grid*2) {
        ball.dy = -ball.dy;
    }
}


function loop() {
    clearCanvas()
    rendercanvas();
    renderPaddle(leftPaddle)
    renderPaddle(rightPaddle)
    renderBall()
    moveBall()
    collideWallsWithBall()




    requestAnimationFrame(loop);
}



requestAnimationFrame(loop);


