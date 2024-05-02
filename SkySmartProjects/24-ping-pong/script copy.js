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
let ballSpeed = 7;

// Скорость ракетки
let paddleSpeed = 7;



function rendercanvas() {
    // Верхняя стенка
    //           x, y, ширина, высота
    ctx.fillRect(0, 0, canvas.width, grid)

    // Нижняя стенка
    ctx.fillRect(0, canvas.height - grid, canvas.width, grid)

    // Разделительная линия по центру поля
    ctx.fillRect(canvas.width / 2, 0, grid, canvas.height)


}


// Функция основного цикла игры
function loop() {

    rendercanvas()

}



loop()
