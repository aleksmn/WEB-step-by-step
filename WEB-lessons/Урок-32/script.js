function print_contact() {
    alert(' skype: helper \n telegram: @helper \n tel: 8995345235 ')
}

function randomElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

// Проверяем работу функции:
// console.log(randomElement(['apple', 'orange', 'tomato']))

function rand_tshirt() {
    var arr = ["images/tshirt-1.jpg", "images/tshirt-2.jpg", "images/tshirt-3.jpg"];
    var ids = ["ts-image-1", "ts-image-2"];

    for (let i = 0; i<ids.length; i++) {
        c = document.getElementById(ids[i]);
        img = randomElement(arr); // получили рандомное фото
        c.src = img; // установили рандомное фото
    }
}
