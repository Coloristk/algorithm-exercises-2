function countPositivesSumNegatives(input) {
  let count = 0;
  let sum = 0;
  for (let num of input) {
    if (num >= 1) {
      count += 1;
    } else if (num < 0) {
      sum += num;
    }
  }
  if (!input) {
    return [];
  }

  return [count, sum];
}

let result1 = countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);
console.log(result1); // [10, -65]

let result2 = countPositivesSumNegatives("");
console.log(result2); // []
