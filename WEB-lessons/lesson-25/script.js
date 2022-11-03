const button1 = document.getElementById("btn-1");
const button2 = document.getElementById("btn-2");

console.log(button1, button2)



button1.onclick = function () {

  // текущий цвет:
  let currColor = window.getComputedStyle(button1).backgroundColor;

  console.log(currColor);

  // первый (зеленый) цвет:
  const firstColor = "rgb(47, 129, 47)";
  //второй (красный) цвет:
  const secondColor = "rgb(207, 23, 23)";

  // проверка цвета фона кнопки
  if (currColor == secondColor) {
    button1.style.backgroundColor = firstColor;
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
    document.getElementById("heading").style.color = "purple";
    // document.querySelector("img").style.display = "none";
  } else {
    button1.style.backgroundColor = secondColor;
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "black";
    document.getElementById("heading").style.color = "rgb(60, 160, 210)";
    // document.querySelector("img").style.display = "block";
  }
};






button2.onclick = function () {

  button2.classList.toggle("bg-green");

  document.querySelector("body").classList.toggle("dark")

};
