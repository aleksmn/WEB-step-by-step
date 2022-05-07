let slideIndex = 1;
showSlides(slideIndex);


function showSlides(n) {
    console.log("n = " + n);
    let slides = document.querySelectorAll(".mySlides");

    console.log(slides)

    // если номер слайда превышает количество слайдов - перейти к первому
    if (n > slides.length) { slideIndex = 1 }
    // если номер слайда меньше единицы - показываем последний
    if (n < 1) { slideIndex = slides.length }

    // скрываем все слайды - очищаем экран
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // показываем выбранный слайд
    slides[slideIndex - 1].style.display = "block";

}


function plusSlides(n) {
    // n = 1 (вперед) или n = -1 (назад)
    showSlides(slideIndex += n);
    // console.log("slideIndex = " + slideIndex);
}