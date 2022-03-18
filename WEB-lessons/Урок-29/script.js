function star(starNumber) {
    // starNumber - номер звезды на которую навел пользователь
    starNumber = starNumber - 1;

    // console.log(starNumber);

    let ids = ["star-1", "star-2", "star-3", "star-4", "star-5"];

    // console.log(ids[starNumber]);

    let star = document.getElementById(ids[starNumber]);

    console.log(star);

    // // // если звезда пустая
    if (star.src.includes("images/star_2.png")) {

        // то меняем ее и все предыдущие на заполненные
        for (let i = 0; i <= starNumber; i++) {
            let id = ids[i];
            star = document.getElementById(id);
            star.src = "images/star_1.png";
        }
    }

    // // если звезда заполена
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

    // сбросить рейтинг
    let ids = ["star-1", "star-2", "star-3", "star-4", "star-5"];

    for (let i = 0; i < ids.length; i++) {
        let id = ids[i];
        document.getElementById(id).src = "images/star_2.png";
    }
}