const modal = document.getElementById("myModal");
const openBtn = document.getElementById("myBtn");
const closeBtn = document.getElementById("close");


// Открыть модальное окно
openBtn.onclick = function () {
    modal.style.display = "block";
}

// По клику на <span> (x), закрыть модальное окно
closeBtn.onclick = function () {
    console.log('Закрыть!');
    modal.style.display = "none";
}

// По клику на свободное место, закрыть модальное окно
window.onclick = function (event) {
    // console.log(event);
    if (event.target === modal) {
        modal.style.display = "none";
        // console.log(event);
    }
}