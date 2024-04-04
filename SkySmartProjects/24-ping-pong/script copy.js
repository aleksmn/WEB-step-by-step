const canvas = document.getElementById("game");
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(228, 164, 87)';


const grid = 15;
const paddleHeight = grid * 5;
const maxPaddleY = canvas.height - grid - paddleHeight;

const leftCounter = document.querySelector("#leftCounter");
const rightCounter = document.querySelector("#rightCounter");

let ballSpeed = 7;
let paddleSpeed = 7;

// создаем объекты ракеток
const leftPaddle = {
    x: grid * 2,
    y:  canvas.height / 2 - paddleHeight / 2,
    width: grid,
    height: paddleHeight,
    dy: 0
}

const rightPaddle = {
    x: canvas.width - grid * 3,
    y:  canvas.height / 2 - paddleHeight / 2,
    width: grid,
    height: paddleHeight,
    dy: 0
}

// создаем объект мяч
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: grid,
    height: grid,
    dx: ballSpeed,
    dy: -ballSpeed,
    isResetted: false
}

// Очищаем canvas
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


// Отрисовка игрового поля
function renderСanvas() {
    ctx.fillRect(0, 0, canvas.width, grid) // верхняя граница
    ctx.fillRect(0, canvas.height - grid, canvas.clientWidth, grid) // нижняя граница

    // Разделительная линия
    for (let i = grid; i < canvas.height - grid; i += grid * 2) {
        ctx.fillRect(canvas.width / 2, i, grid, grid)
    }

}


// Основной цикл программы
function loop() {
    clearCanvas()
    renderСanvas();
    renderPaddle(leftPaddle);
    renderPaddle(rightPaddle);
    renderBall();
    moveBall();


    // переключаем кадр (в конце)
    requestAnimationFrame(loop);
}




// запускаем цикл
requestAnimationFrame(loop);

