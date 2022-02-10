function changeStyle(){
    //Выбираем нужный элемент на страничке:
    let myButton = document.getElementById('btn-1');
    // текущий цвет:
    let currColor = window.getComputedStyle(myButton).backgroundColor;
    const firstColor = "green";
    const secondColor = "rgb(207, 17, 17)";
    
    // проверка цвета фона кнопки
    if (currColor === secondColor)
    {
        myButton.style.backgroundColor = firstColor;
        console.log("change to green");
    }
    else {
        myButton.style.backgroundColor = secondColor;
        console.log("change to red");
    }

}



function toggleClass(){
    let myButton = document.getElementById('btn-2');

    myButton.classList.toggle("bg-green");

}