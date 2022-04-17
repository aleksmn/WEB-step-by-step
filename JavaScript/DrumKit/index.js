const drumButtons = document.querySelectorAll(".drum")

// console.log(drumButtons);

// for (let i = 0; i < drumButtons.length; i++) {
    
//     drumButtons[i].addEventListener("click", function () {
//         alert("Clicked!!")
//     });
// }


// Используем FOR OF

for (btn of drumButtons) {

    btn.addEventListener("click", function () {
        // this - елемент, на который кликнули
        // console.log(this);

        // console.log(this.classList.value.includes('w'));

        // if (this.classList.value.includes('w')) {
        //     new Audio('sounds/tom-1.mp3').play()
        //     return
        // }
        // if (this.classList.value.includes('a')) {
        //     new Audio('sounds/tom-2.mp3').play()
        //     return
        // }
        
        this.style.color = 'white';

        switch (this.classList[0]) {
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
        
            default:
                break;
        }

        // let tom1 = new Audio('sounds/tom-1.mp3');
        // tom1.play()

    });
}





