function changeStyle(){

    let myButton = document.getElementById('btn-1');
    
    // проверка цвета фона
    
    if (window.getComputedStyle(myButton).backgroundColor === "rgb(207, 17, 17)")
    {
        myButton.style.backgroundColor = "green";
        console.log("change to green");
    }
    else {
        myButton.style.backgroundColor = "rgb(207, 17, 17)";
        console.log("change to red");
    }

}



function toggleClass(){
    let myButton = document.getElementById('btn-2');

    myButton.classList.toggle("bg-green");

}