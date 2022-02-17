function changeStyle() {

    //Выбираем нужный элемент на страничке:
    let myButton = document.getElementById('btn-1');

    console.log(myButton);


    // текущий цвет:
    let currColor = window.getComputedStyle(myButton).backgroundColor;

    console.log(currColor);
    // первый (зеленый) цвет:
    const firstColor = "rgb(47, 129, 47)";
    //второй (красный) цвет:
    const secondColor = "rgb(207, 23, 23)";

    // проверка цвета фона кнопки
    if (currColor === secondColor) {

        myButton.style.backgroundColor = firstColor;
        // console.log("change to green");
    }

    else {
        myButton.style.backgroundColor = secondColor;
        // console.log("change to red");
    }

}



function toggleClass() {
    let myButton = document.getElementById('btn-2');

    myButton.classList.toggle("bg-green");

}