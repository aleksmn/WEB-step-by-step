/*
Для чисел от 1 до 100:
если число делится нацело на 3 - выводим Fizz
если число делится нацело на 5 - выводим Buzz
если делится и на 3 и на 5 - выводим FizzBuzz

*/



let output = [];
let count = 1;

function fizzbuzz(){
    while(count <= 100) {
        if (count % 3 === 0 && count % 5 === 0){
            output.push('FizzBuzz');
        }
        else if (count % 3 === 0){
            output.push('Fizz');
        } 
        else if (count % 5 === 0) {
            output.push('Buzz');
        }
        else {
            output.push(count);
        }
    
        count++;
    }

    
    console.log(output);
}