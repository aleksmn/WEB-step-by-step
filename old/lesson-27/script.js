const modal = document.getElementById("myModal");
const openBtn = document.getElementById("myBtn");
const closeBtn = document.getElementById("close");


// Открыть модальное окно
openBtn.addEventListener("click", function () {
  modal.style.display = "block";
})


// По клику на <span> (x), закрыть модальное окно
closeBtn.addEventListener('click', function () {
    modal.style.display = "none";
}) 


// По клику на свободное место, закрыть модальное окно
modal.addEventListener("click", function(event){

  if (event.target == modal) {
    modal.style.display = "none";
  }
})
