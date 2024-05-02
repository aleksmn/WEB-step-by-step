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

let interval;

const leftPaddle = {
    x: grid * 2,
    y: canvas.height / 2 - paddleHeight / 2,
    width: grid,
    height: paddleHeight,
    dy: 0,
}

const rightPaddle = {
    x: canvas.width - grid * 3,
    y: canvas.height / 2 - paddleHeight / 2,
    width: grid,
    height: paddleHeight,
    dy: 0,
}

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: grid,
    height: grid,
    dx: ballSpeed,
    dy: -ballSpeed,
    isResetted: false,
}

function rendercanvas() {
    ctx.fillRect(0, 0, canvas.width, grid); // Верхняя граница
    ctx.fillRect(0, canvas.height - grid, canvas.width, grid) // Нижняя граница

    for (let i = grid; i < canvas.height - grid; i += grid * 2) {
        ctx.fillRect(canvas.width / 2, i, grid, grid); // Разделительная линия
    }
}

function clearcanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function renderLeftPaddle() {
    ctx.fillRect(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height);
}

function renderRightPaddle() {
    ctx.fillRect(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height);
}

function movePaddles() {
    leftPaddle.y += leftPaddle.dy;
    rightPaddle.y += rightPaddle.dy;
}

function renderBall() {
    ctx.fillRect(ball.x, ball.y, ball.width, ball.height);
}

function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;
}

function resetGame() {
    if ((ball.x < 0 || ball.x > canvas.width) && !ball.isResetted) {
        if (ball.x < 0) {
            leftCounter.textContent = 0;
        } else if (ball.x > canvas.width) {
            rightCounter.textContent = 0;
        }
        ball.isResetted = true;
        setTimeout(() => {
            ball.x = canvas.width / 2;
            ball.y = canvas.height / 2;
            ball.isResetted = false;
        }, 1000);
    }
}

function collideWallsWithPaddle(paddle) {
    if (paddle.y < grid) {
        paddle.y = grid;
    }
    else if (paddle.y > maxPaddleY) {
        paddle.y = maxPaddleY;
    }
}

function collideWallsWithPaddles() {
    collideWallsWithPaddle(leftPaddle);
    collideWallsWithPaddle(rightPaddle);
}

function collideWallsWithBall() {
    if (ball.y < grid) {
        ball.y = grid;
        ball.dy = -ball.dy;
    }
    else if (ball.y > canvas.height - grid) {
        ball.y = canvas.height - grid;
        ball.dy = -ball.dy;
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

function collidePaddlesWithBall() {
    if (isCollides(ball, rightPaddle)) {
        ball.dx = -ball.dx;
        ball.x = rightPaddle.x - ball.width;
        rightCounter.textContent = parseInt(rightCounter.textContent) + 1;
    }
    else if (isCollides(ball, leftPaddle)) {
        ball.dx = -ball.dx;
        ball.x = leftPaddle.x + leftPaddle.width;
        leftCounter.textContent = parseInt(leftCounter.textContent) + 1;
    }
}

function aiControl() {
    let direction = 0;

    if (ball.x > Math.random() * canvas.width / 2) {
        if (ball.y < rightPaddle.y) {
            direction = -1;
        }
        else if (ball.y > rightPaddle.y + paddleHeight) {
            direction = 1;
        }

        rightPaddle.y += paddleSpeed * direction;
    }
}


function loop() {
    clearcanvas();

    renderLeftPaddle();
    renderRightPaddle();
    aiControl(); // 24
    movePaddles();

    collideWallsWithPaddles(); // 24 

    renderBall();
    moveBall();

    collideWallsWithBall();   // 24 
    collidePaddlesWithBall(); // 24 

    resetGame(); // 24
    rendercanvas();

}


document.addEventListener('keydown', (event) => {
    if (event.key === 'w' || event.key === 'ц') {
        leftPaddle.dy = -paddleSpeed;
    }
    else if (event.key === 's' || event.key === 'ы') {
        leftPaddle.dy = paddleSpeed;
    }
});
document.addEventListener('keyup', (event) => {
    if (event.key === 'w' || event.key === 's' || event.key === 'ы' || event.key === 'ц') {
        leftPaddle.dy = 0;
    }
})


// Запускаем игру
interval = setInterval(loop, 1000 / 60);

