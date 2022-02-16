var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Переход к конкретному слайду по точке-переключателю
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    // если номер слайда превышает количество слайдов - показываем первый
    if (n > slides.length) { slideIndex = 1 }
    // если номер слайда меньше единицы - показываем последний
    if (n < 1) { slideIndex = slides.length }

    // скрываем все слайды - очищаем экран
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Снимаем класс active у переключателей-точек
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // показываем выбранный слайд
    slides[slideIndex - 1].style.display = "block";

    // Добавляем для выбранной точки класс active
    dots[slideIndex - 1].className += " active";
}