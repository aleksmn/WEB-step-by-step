function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
// console.log(countup(5));

// console.log(countup(0));











function rangeOfNumbers(startNum, endNum) {

    if (endNum < startNum) {
        return [];
      } 
    else {
        const countArray = rangeOfNumbers(startNum, endNum - 1);
        countArray.push(endNum);
        return countArray;
    }
};

console.log(rangeOfNumbers(30, 30));
