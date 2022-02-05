const modal = document.getElementById("myModal");

const btn = document.getElementById("myBtn");

const closeBtn = document.getElementsByClassName("close")[0];

// Открыть модальное окно
btn.onclick = function () {
    modal.style.display = "block";
}

// По клику на <span> (x), закрыть модальное окно
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// По клику на свободное место, закрыть модальное окно
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}