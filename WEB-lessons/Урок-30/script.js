var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

var giftBtn = document.getElementById("gift-btn");

// Открыть модальное окно
// btn.onclick = function () {
//     modal.style.display = "block";
// }

giftBtn.onclick = function (){
    modal.style.display = "block";
}

// По клику на <span> (x), закрыть модальное окно
span.onclick = function () {
    modal.style.display = "none";
}

// По клику на свободное место, закрыть модальное окно
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Показать подарок
function showGift() {
    giftBtn.style.opacity = 1;
}

setTimeout(showGift, 2000);