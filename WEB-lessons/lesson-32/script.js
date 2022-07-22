// function print_contact() {
//     alert(' skype: helper \n telegram: @helper \n tel: 8995345235 ')
// }



// function randomElement(arr) {
//     const rand = Math.floor(Math.random() * arr.length);
//     return arr[rand];
// }

// Проверяем работу функции:
// console.log(randomElement(['apple', 'orange', 'tomato']))


function rand_tshirt() {

    // Массив картинок: 
    const arr = ["images/tshirt-1.jpg", "images/tshirt-2.jpg", "images/tshirt-3.jpg"];

    // Подбираем первую картинку
    let rand = Math.floor(Math.random() * arr.length);
    // Меняем 1 картинку
    document.getElementById("ts-image-1").src = arr.splice(rand, 1)[0]

    // Подбираем вторую картинку
    rand = Math.floor(Math.random() * arr.length);
    // Меняем 2 картинку
    document.getElementById("ts-image-2").src = arr.splice(rand, 1)[0]

}


// Модальные окна

const modalGift = document.getElementById("giftModal");
const openBtnGift = document.getElementById("giftBtn");
const closeBtnGift = document.getElementById("giftClose");

// console.log(modal, openBtn, closeBtn)


openBtnGift.onclick = function () {
    modalGift.style.display = "block";
}

closeBtnGift.onclick = function () {
    modalGift.style.display = "none";
}

modalGift.onclick = function (event) {
    if (event.target === modalGift) {
        modalGift.style.display = "none";

    }
}



const modalTp = document.getElementById("tpModal");
const openBtnTp = document.getElementById("tpBtn");
const closeBtnTp = document.getElementById("tpClose");



openBtnTp.onclick = function () {
    modalTp.style.display = "block";
}

closeBtnTp.onclick = function () {
    modalTp.style.display = "none";
}


modalTp.onclick = function (event) {
    if (event.target === modalTp) {
        modalTp.style.display = "none";

    }
}