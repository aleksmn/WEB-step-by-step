// Переменные
const canvas = document.getElementById('cvs');
const ctx = cvs.getContext("2d");
const dragonImg = document.getElementById('dragon');
const fireImg = document.getElementById('fire')

let interval;


// Дракон
const dragon = {
    x: 20,
    y: canvas.height - 100,
    width: 100,
    height: 100,
    jumping: false,
    jumpSpeed: 2,
    highestJump: false

}


function drawDragon() {
    ctx.drawImage(dragonImg, dragon.x, dragon.y, dragon.width, dragon.height)
}

function jumpDragon () {
    // Прыжок вверх
    if (dragon.jumping && !dragon.highestJump && dragon.y > 50) {
        dragon.y -= dragon.jumpSpeed
    } 
    // спуск вниз
    else if 

}



function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawDragon()
}



// Старт игры

function startGame() {
    interval = setInterval(loop, 100)
}

startGame()