// Square(n) Sum

// Complete the square sum function so that it squares each number passed into it
// and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because

// Solution
// function squareSum(numbers){
//   let total = 0
// for (let i = 0; i < numbers.length; i++) {
// total += numbers[i] ** 2
// total += Math.pow(numbers[i],2)
// }
// return total
// }

// Another Solution
function squareSum(numbers) {
  return numbers.map((ele) => ele ** 2).reduce((acc, cur) => acc + cur, 0);
}

console.log(squareSum([0, 3, 4, 5])); //50
