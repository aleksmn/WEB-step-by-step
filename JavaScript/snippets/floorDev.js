// let a = 111;
// let b = 10;
// let floorDev = (a - a % b) / b;
// let remainder = a % b;

// console.log('Остаток от деления: ' + remainder);
// console.log('Деление нацело: ' + floorDev);



function floorDev(a, b) {
    let remainder = a % b;
    const result = (a - remainder) / b;

    console.log('Остаток от деления: ' + remainder);
    console.log('Деление нацело: ' + result);

    return result;
}


floorDev(111, 10)
