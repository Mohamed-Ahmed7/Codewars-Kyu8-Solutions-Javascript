//! Count of positives / sum of negatives

// Description:
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and
//  the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// function countPositivesSumNegatives(input) {
//   if (input.length ==  0 || input == undefined) return []
//   let positivesArray = [];
//   let sumNegatives =0
//   for (let i = 0; i < input.length; i++) {
//     input[i] > 0 ? positivesArray.push(input[i]) : sumNegatives += input[i];
//   }
//   return [positivesArray.length , sumNegatives];
// }
function countPositivesSumNegatives(input) {
  // if (input.length == 0 || !input) return [];
  let positives = []
  let negatives = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
    positives.push(input[i])
    console.log(positives);
    } else {
      negatives += input[i];
    }
  }
  return [positives.length, negatives];
}



console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 10, -11, -12, -13, -14, -15,
  ])
);

console.log(countPositivesSumNegatives([1, 0]));
console.log(countPositivesSumNegatives([]));
