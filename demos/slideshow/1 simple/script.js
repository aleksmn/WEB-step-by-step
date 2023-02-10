let slideIndex = 1;
showSlides(slideIndex);


function showSlides(n) {
    // console.log("Номер слайда " + n);

    let slides = document.querySelectorAll(".mySlides");

    // console.log(slides)

    // если номер слайда превышает количество слайдов - перейти к первому
    if (n > slides.length) { slideIndex = 1 }
    // если номер слайда меньше единицы - показываем последний
    if (n < 1) { slideIndex = slides.length }

    // скрываем все слайды - очищаем экран
    for (let slide of slides) {
        slide.style.display = "none";
    }

    // показываем выбранный слайд
    slides[slideIndex - 1].style.display = "block";

    // Записываем номер слайда

    const slideNum = `${slideIndex} / ${slides.length}`;

    document.querySelectorAll('.numbertext')[slideIndex - 1].innerText = slideNum;

}


function plusSlides(i) {
    // i = 1 (вперед) или i = -1 (назад)
    showSlides(slideIndex += i);
    // console.log("slideIndex = " + slideIndex);
}