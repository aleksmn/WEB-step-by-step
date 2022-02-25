function print_contact() {
    alert(' skype: helper \n telegram: @helper \n tel: 8995345235 ')
}

function randomElement(arr) {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

// Проверяем работу функции:
// console.log(randomElement(['apple', 'orange', 'tomato']))

function rand_tshirt() {
    // Массив картинок: 
    const arr = ["images/tshirt-1.jpg", "images/tshirt-2.jpg", "images/tshirt-3.jpg"];
    // ID для img
    const ids = ["ts-image-1", "ts-image-2"];

    for (let i = 0; i < ids.length; i++) {
        element = document.getElementById(ids[i]);
        picture = randomElement(arr); // получили рандомное фото
        element.src = picture; // установили рандомное фото
    }
}






//
// Получить несколько случайных элементов:
// const arr = ['a', 'b', 'c'];
// const shuffled = arr.sort(() => 0.5 - Math.random());
// const n = 2;
// const selected = shuffled.slice(0, n);

// console.log(selected);
