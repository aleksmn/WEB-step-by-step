let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Переход к конкретному слайду по точке-переключателю
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll(".dot");

    // если номер слайда превышает количество слайдов - показываем первый
    if (n > slides.length) { slideIndex = 1 }
    // если номер слайда меньше единицы - показываем последний
    if (n < 1) { slideIndex = slides.length }

    // скрываем все слайды - очищаем экран
    for (let slide of slides) {
        slide.style.display = "none";
    }
 
    // // Снимаем класс active у переключателей-точек

    for (let dot of dots) {
        dot.classList.remove('active')
    }

    // // показываем выбранный слайд
    slides[slideIndex - 1].style.display = "block";

    // // Добавляем для выбранной точки класс active
    dots[slideIndex - 1].classList.add('active')

}