let stars = document.querySelectorAll(".rating img");
let siteRating = 0;

for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener("mouseover", () => {
        stars.forEach(star => {
            star.src = "images/star_2.png";
        });

        for (let k = 0; k <= i; k++) {
            stars[k].src = "images/star_1.png";
            siteRating = k + 1;
            console.log("Рейтинг сайта:", siteRating);
        }

    });
};