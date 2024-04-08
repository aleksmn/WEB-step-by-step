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
    dy: ballSpeed,
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

// Движение ракеток
function movePaddles() {
    leftPaddle.y += leftPaddle.dy;
    rightPaddle.y += rightPaddle.dy;
}



// Столкновение мяча со стенами
function collideWallsWithBall() {
    if (ball.y < grid) {
        ball.y = grid
        ball.dy = -ball.dy;
    }

    else if (ball.y > canvas.height - grid*2) {
        ball.y = canvas.height - grid*2;
        ball.dy = -ball.dy;
    }
}

// Столкновения ракеток со стенами
function collideWallsWithPaddle(paddle) {
    if (paddle.y < grid) {
        paddle.y = grid;
    }
    else if (paddle.y > maxPaddleY) {
        paddle.y = maxPaddleY;
    }
}


function isCollides(object1, object2) {
    const width1 = object1.x + object1.width;
    const width2 = object2.x + object2.width;
    const height1 = object1.y + object1.height;
    const height2 = object2.y + object2.height;
    return object1.x < width2
        && object2.x < width1
        && object1.y < height2
        && object2.y < height1;
}


// Основной цикл программы
function loop() {
    clearCanvas()
    renderСanvas();
    renderPaddle(leftPaddle);
    renderPaddle(rightPaddle);
    renderBall();
    moveBall();
    movePaddles();
    collideWallsWithBall();

    collideWallsWithPaddle(leftPaddle);
    collideWallsWithPaddle(rightPaddle);

    // переключаем кадр (в конце)
    requestAnimationFrame(loop);
}


// Отслеживаем нажатия на кнопки
document.addEventListener('keydown', (event) => {
    console.log(event)
    if (event.key == 'w' || event.key == 'ц') {
        leftPaddle.dy = -paddleSpeed;
    }
    else if (event.key == "s" || event.key == 'ы') {
        leftPaddle.dy = paddleSpeed;
    }
});

document.addEventListener('keyup', (event) => {

    if (event.key == 'w' || event.key == "s" || event.key == 'ы' || event.key == 'ы') {
        leftPaddle.dy = 0;
    }
    
});


// запускаем цикл
requestAnimationFrame(loop);

