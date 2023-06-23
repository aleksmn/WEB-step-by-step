const arrows = document.querySelectorAll('.slider-image .arrow');

console.log(arrows[0], arrows[1]);

const prev_image_arrow = arrows[0];
const next_image_arrow = arrows[1];

const mob_images = ['mob_1.jpg', 'mob_2.png', 'mob_3.png'];
const mob_names = ['Эндермен', 'Скелет', 'Зомби'];
const mob_texts = ['Большой и злой игровой моб в Minecraft. Его тяжело убить и он умеет телепортироваться',
    'Скелет  — распространённый враждебный моб, являющийся нежитью и вооружённый луком',
    'Зомби - неживые враждебные мобы, атакующие игроков и деревенских жителей, горящие на солнце'];

let current_image = 0;

prev_image_arrow.onclick = function () {
    console.log('Предыдущее изображение')
    change_image(-1)

}

next_image_arrow.onclick = function () {
    console.log('Следующее изображение')
    change_image(1)
}

function change_image(n) {

    current_image += n;

    // if (current_image < 0) { current_image = mob_images.length - 1 }
    // if (current_image > (mob_images.length - 1)) { current_image = 0 }

    current_image = current_image % mob_images.length

    console.log(current_image);


    document.querySelector('.slider-image img').src = 'images/' + mob_images[current_image];
    document.querySelector('.slider .description-name').innerText = mob_names[current_image];
    document.querySelector('.slider .description-text').innerText = mob_texts[current_image];

}