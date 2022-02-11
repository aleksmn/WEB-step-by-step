/*
Напишите функцию calcTip() для вычисления чаевых:
чаевые 15%, если счет 50 - 300
чаевые 20%, если счет больше.

Используйте массив, для определения чаевых для 
нескольких счетов:
bills - массив счетов
tips - массив чаевых
totals - итоговы значения (счет + чаевые)

Тестовые значения (счета): 
125, 455, 44

*/

/*
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else if (bill > 300) {
        return bill * 0.2;
    }

    return 0;
}

const bills = [125, 455, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(bills, tips);


///// Используем цикл for (for loop).
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    // console.log(i);
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(bills, tips, totals);

*/