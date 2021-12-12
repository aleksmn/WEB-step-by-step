var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

// Открыть модальное окно
btn.onclick = function () {
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