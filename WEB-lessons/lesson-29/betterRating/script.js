let stars = document.querySelectorAll(".rating img");

let siteRating = 0;

for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener("mouseover", () => {
        // Очищаем зведочки
        stars.forEach(s => {
            s.src = "images/star_2.png";
        });
        // Закрашиваем звездочки
        for (let k = 0; k <= i; k++) {
            stars[k].src = "images/star_1.png";
            siteRating = k + 1;
            console.log("Рейтинг сайта:", siteRating);
        }

    });
};


const resetRating = document.getElementById("resetRating");

resetRating.addEventListener("click", function () {
    stars.forEach(s => {
        s.src = "images/star_2.png";
    });

    siteRating = 0;
});

const sendRatingBtn = document.getElementById("sendRating");

sendRatingBtn.addEventListener("click", function () {
    let text = "";

    switch (siteRating) {
        case 1:
        case 2:
        case 3:
            text = "Спасибо за ваш отзыв!";
            console.log("Вывести модальное окно для отзыва!");
            break;
        case 4:
            text = "Спасибо за хороший балл!";
            break;
        case 5:
            text = "Спасибо за высокую оценку :)";
            break;

        default:
            text = "Пожалуйста, поставьте оценку от 1 до 5";
            break;
    }


    document.getElementById("ratingText").innerText = text;

});