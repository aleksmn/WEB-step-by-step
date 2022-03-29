let stars = document.querySelectorAll(".rating img");

for (let i = 0; i< stars.length; i++) {
    stars[i].addEventListener("mouseover", () => {
        stars.forEach(star => {
            star.src = "images/star_2.png";
            // star.style.opacity = 0.5
        });

        for(let k = 0; k <= i; k++) {
            stars[k].src = "images/star_1.png";
            // stars[k].style.opacity = 1;
        }
        
    });
};

