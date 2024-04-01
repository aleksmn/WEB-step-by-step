const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Объявим цвет заливки
ctx.fillStyle = "aqua";

// Цвет линии
ctx.strokeStyle = "aqua";

// Прямоугольник 
// ctx.fillRect(x, y, width, height);

// const window_width = 600;
// const window_height = 600;

// const rect_width = 100;
// const rect_height = 100;

// ctx.fillRect(window_width / 2 - rect_width/2, window_height / 2 - rect_height/2, rect_width, rect_height);


// Линия
// ctx.moveTo(0, 0)
// ctx.lineTo(600, 600)
// ctx.stroke()


// // Треугольник
// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(300, 250);
// ctx.lineTo(100, 400);
// ctx.fill()


// ctx.beginPath();
// ctx.moveTo(500, 100);
// ctx.lineTo(300, 250);
// ctx.lineTo(500, 400);
// ctx.fill()


// Толстые линии 
// ctx.lineWidth = 30;
// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(300, 250);
// ctx.lineTo(100, 400);
// ctx.stroke()


// Круг
// ctx.beginPath();

// // arc(x, y, r, startangle, endangle)

// ctx.arc(200, 200, 80, 0, Math.PI*2)
// ctx.stroke()


// Кривые линии
ctx.lineWidth = 30;
ctx.strokeStyle = "rgb(32, 227, 214)"
ctx.beginPath();
ctx.moveTo(100, 300);
ctx.quadraticCurveTo(250, 400, 500, 300);
ctx.stroke();