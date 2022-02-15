function star(k) {
    // k - номер звезды на которую навел пользователь

    k = k - 1;

    let ids = ["star-1", "star-2", "star-3", "star-4", "star-5"];

    // console.log(ids[k]);


    let star = document.getElementById(ids[k]);


    // console.log(star);

    // // если звезда пустая
    if (star.src.includes("star_2.png")) {

        // то меняем ее на заполненную
        for (let i = 0; i <= k; i++) {
            id = ids[i]
            star = document.getElementById(id);
            star.src = "star_1.png";
        }
    }

    // если звезда заполена
    else {

        for (let i = 0; i < ids.length; i++) {
            if (i > k) {
                id = ids[i];
                document.getElementById(id).src = "star_2.png";

            }
        }
    }
}

function resetRating() {

    // сбросить рейтинг
    var ids = ["star-1", "star-2", "star-3", "star-4", "star-5"];

    for (let i = 0; i < ids.length; i++) {
        let id = ids[i];
        document.getElementById(id).src = "star_2.png";
    }
}