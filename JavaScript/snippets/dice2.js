function roll_dice(){
    let n = Math.random();
    n = n * 6 + 1;
    n = Math.floor(n);
    return n;
}

let message = ""

dice_1 = roll_dice()
dice_2 = roll_dice()


if (dice_1 == dice_2) {
    message = "Double!"
} else if ((dice_1 + dice_2) == 7) {
    message = "Lucky Seven!"
} else {
    message = "Nice roll"
}
    

console.log(dice_1, dice_2, message)
