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

const fire = {
    x: 500,
    y: canvas.height - 50,
    width: 50,
    height: 50,
    speed: 2
}


function drawDragon() {
    ctx.drawImage(dragonImg, dragon.x, dragon.y, dragon.width, dragon.height)
}


function drawFire() {
    ctx.drawImage(fireImg, fire.x, fire.y, fire.width, fire.height)
}


function moveFire() {
    if (fire.x > -50) {
        fire.x -= fire.speed
    }
    else {
        fire.x = canvas.width
    }
}



function jumpDragon() {
    // Прыжок вверх
    if (dragon.jumping && !dragon.highestJump && dragon.y > 30) {
        dragon.y -= dragon.jumpSpeed
    } 
    // спуск вниз
    else if (dragon.y < canvas.height - dragon.height) {
        dragon.highestJump = true
        dragon.y += dragon.jumpSpeed
        
    }

    else {
        dragon.highestJump = false
        dragon.jumping = false
    }

}

// Столкновения
function collision() {
    if (
        dragon.x < fire.x &&
        dragon.x + 40 > fire.x &&
        dragon.y + 80 > fire.y
    ) {
        clearInterval(interval)
    }
}


function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawDragon()
    drawFire()
    jumpDragon()
    moveFire()
    collision()
}

// Старт игры

function startGame() {
    interval = setInterval(loop, 1000 / 160)
}

// События

document.addEventListener("keydown", function() {
    if (!dragon.jumping) {
        dragon.jumping = true;
    }
})


startGame()


