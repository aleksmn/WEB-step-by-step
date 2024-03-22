const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(32, 227, 214)";

// Прямоугольник fillRect(x, y, width, height)
// ctx.fillRect(200, 200, 440, 320);

// ctx.fillStyle = "rgb(100, 100, 220)";
// ctx.fillRect(100, 100, 440, 320);


// Линия
// ctx.moveTo(0, 0);
// ctx.lineTo(1000, 600);
// ctx.stroke();


// Треугольник
// ctx.beginPath();
// ctx.moveTo(200, 100)
// ctx.lineTo(500, 250)
// ctx.lineTo(200, 400)
// ctx.fill()

// ctx.beginPath();
// ctx.moveTo(800, 100)
// ctx.lineTo(500, 250)
// ctx.lineTo(800, 400)
// ctx.fill()


// Толстые линии 
// ctx.lineWidth = 30;
// ctx.strokeStyle = "rgb(32, 227, 214)"

// ctx.beginPath();
// ctx.moveTo(200, 100)
// ctx.lineTo(500, 250)
// ctx.lineTo(200, 400)

// ctx.moveTo(800, 100)
// ctx.lineTo(500, 250)
// ctx.lineTo(800, 400)

// ctx.stroke();



// Круг
// ctx.beginPath();

// // arc(x, y, r, startangle, endangle)

// ctx.arc(200, 200, 80, 0, Math.PI*2)
// ctx.stroke()



// Кривые линии
// ctx.lineWidth = 30;
// ctx.strokeStyle = "rgb(32, 227, 214)"
// ctx.beginPath();
// ctx.moveTo(200, 300);
// ctx.quadraticCurveTo(500, 400, 800, 300);
// ctx.stroke();