
for (let i=1; i<=10; i++) {

    if (i==4) {
        continue;
    }

    if (i==7) {
        break;
    }

    console.log(i);
}
















// 1) Найти сумму чисел от 0 до 100 включительно
// 2) Среди чисел от 0 до 100, найти сумму чисел, кратных 5
// 3) Среди чисел от 0 до 100, найти сумму чисел, НЕ кратных 5

let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
let startNum = 0;
let endNum = 100;

for (let i=startNum; i<=endNum; i++) {

    sum1 = sum1 + i;
    
    if (i % 5 == 0) {
        sum2 = sum2 + i;
        continue
    }
    
    // console.log(i)
    sum3 = sum3 + i;
}


// console.log(sum1);
// console.log(sum2);
// console.log(sum3);