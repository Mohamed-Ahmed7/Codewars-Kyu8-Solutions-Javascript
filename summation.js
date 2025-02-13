// Summation

// Write a program that finds the summation of every number from 1 to num.
//  The number will always be a positive integer greater than 0.
//  Your function only needs to return the result,
//  what is shown between parentheses in the example
// below is how you reach that result and
//  it's not part of it,
//  see the sample tests.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

let summation = (num) => {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total = total + i;
  }
  return total;
};

console.log(summation(1)); //1
//  0 + 1 = 1
console.log(summation(2)); // 3
//  0 + 1 = 1
//  1 + 2 = 3
console.log(summation(8)); // 36
//  0 + 1 = 1
//  1 + 2 = 3
//  3 + 3 = 6
//  6 + 4 = 10
//  10 + 5 = 15
//  15 + 6 = 21
//  21 + 7 = 28
//  28 + 8 = 36


// function summation(num) {
//   return num * (num + 1) / 2
// }
