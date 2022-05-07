const drumButtons = document.querySelectorAll(".drum")




// for (let i = 0; i < drumButtons.length; i++) {

//     drumButtons[i].addEventListener("click", function () {
//         alert("Clicked!!")
//     });
// }



// Используем FOR OF

for (btn of drumButtons) {

    btn.addEventListener("click", function () {
        // this - елемент, на который кликнули

        // console.log(this.classList[0]);
        // console.log(this.innerText);

        // if (this.innerText == 'w') {
        //     new Audio('sounds/tom-1.mp3').play()
        //     return
        // }
        // if (this.innerText == "a") {
        //   new Audio("sounds/tom-2.mp3").play();
        //   return;
        // }


        switch (this.innerText) {
            case 'w':
                new Audio('sounds/tom-1.mp3').play();
                break;

            case 'a':
                new Audio('sounds/tom-2.mp3').play();
                break;

            case 's':
                new Audio('sounds/tom-3.mp3').play();
                break;

            case 'd':
                new Audio('sounds/tom-4.mp3').play();
                break;

            case 'j':
                new Audio('sounds/snare.mp3').play();
                break;

            case 'k':
                new Audio('sounds/crash.mp3').play();
                break;

            case 'l':
                new Audio('sounds/kick-bass.mp3').play();
                break;

            default:
                console.log(this.innerText)
                break;
        }

    });
}


document.addEventListener("keydown", function(event) {
    console.log(event);


});









