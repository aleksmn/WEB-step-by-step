function changeStyle(){

    let button = document.getElementById('btn-1');
    
    // проверка цвета фона
    
    if (window.getComputedStyle(button).backgroundColor === "rgb(207, 17, 17)")
    {
        button.style.backgroundColor = "green";
        console.log("change to green");
    }
    else {
        button.style.backgroundColor = "rgb(207, 17, 17)";
        console.log("change to red");
    }

}



function toggleClass(){
    let button = document.getElementById('btn-2');

    button.classList.toggle("bg-green");

}