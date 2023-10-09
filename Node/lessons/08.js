// Вложенные циклы

let arr = [[9, 8], 
           [11, 22], 
           [5, 6, 7]]

let product = 1;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
        product *= arr[i][j];
    }
}

console.log(product);
