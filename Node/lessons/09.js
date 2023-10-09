function sum(arr, n) {
    if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
}

let arr = [2, 3, 4, 5]
console.log(sum(arr, 4))

console.log(sum(arr, 2) + arr[2] + arr[3])

console.log(0 + arr[0] + arr[1] + arr[2] + arr[3])


