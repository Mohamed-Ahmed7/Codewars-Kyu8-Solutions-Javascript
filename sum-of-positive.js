// Sum of positive

// Task
// You get an array of numbers, return the sum of all of the positives ones.

// Example
// [1, -4, 7, 12] => 
// 1
// +
// 7
// +
// 12
// =
// 20
// 1+7+12=20
// Note
// If there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
let total = 0
for (let i = 0; i < arr.length; i++) {
  if(arr[i] < 0 ) continue
  total += arr[i]
}  return total
}

;












