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


    let rand = Math.floor(Math.random() * arr.length);
    document.getElementById("ts-image-1").src = arr.splice(rand, 1)[0]

    rand = Math.floor(Math.random() * arr.length);
    document.getElementById("ts-image-2").src = arr.splice(rand, 1)[0]

}
