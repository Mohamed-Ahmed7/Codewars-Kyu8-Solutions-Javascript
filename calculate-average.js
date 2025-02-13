//*Calculate average

// Description:
// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

// FundamentalsArrays

function findAverage(array) {
  return array.length > 0
    ? array.reduce((acc, cur) => acc + cur) / array.length
    : 0;
}

console.log(findAverage([41, 41, 68])); //! 2
