let siteRating = 0;



function star(starNumber) {
    // starNumber - номер звезды на которую навел пользователь

    siteRating = starNumber;

    starNumber = starNumber - 1;

    // console.log(starNumber);

    let ids = ["star-1", "star-2", "star-3", "star-4", "star-5"];

    // console.log(ids[starNumber]);

    let star = document.getElementById(ids[starNumber]);

    // console.log(star);

    // // // // если звезда пустая
    if (star.src.includes("images/star_2.png")) {

        // то меняем ее и все предыдущие на заполненные
        for (let i = 0; i <= starNumber; i++) {
            let id = ids[i];
            document.getElementById(id).src = "images/star_1.png";
        }

    }

    // // // иначе - звезда заполена
    else {

        for (let i = 0; i < ids.length; i++) {
            if (i > starNumber) {
                id = ids[i];
                document.getElementById(id).src = "images/star_2.png";

            }
        }
    }
}

function resetRating() {
    console.log("Сбросить рейтинг")

    siteRating = 0;

    // сбросить рейтинг
    let ids = ["star-1", "star-2", "star-3", "star-4", "star-5"];

    for (let id of ids) {
        document.getElementById(id).src = "images/star_2.png";
    }

}


const sendRatingBtn = document.getElementById("sendRating");


sendRatingBtn.addEventListener("click", function () {
    
    console.log("Отправить рейтинг")

    let text;

    switch(siteRating) {
        case 1:
        case 2:
        case 3:
            text = "Спасибо за ваш отзыв!";
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