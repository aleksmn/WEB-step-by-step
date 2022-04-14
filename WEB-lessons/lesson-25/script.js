const button1 = document.getElementById('btn-1');
const button2 = document.getElementById('btn-2');


button1.onclick = function () {

    console.log(button1);

    // текущий цвет:
    let currColor = window.getComputedStyle(button1).backgroundColor;

    console.log(currColor);
    // первый (зеленый) цвет:
    const firstColor = "rgb(47, 129, 47)";
    //второй (красный) цвет:
    const secondColor = "rgb(207, 23, 23)";

    // проверка цвета фона кнопки
    if (currColor === secondColor) {

        button1.style.backgroundColor = firstColor;
        console.log("change to green");
    }

    else {
        button1.style.backgroundColor = secondColor;
        console.log("change to red");
    }

}



button2.onclick = function () {

    button2.classList.toggle("bg-green");

}