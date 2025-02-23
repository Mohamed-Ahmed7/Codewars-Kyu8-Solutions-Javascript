//! Fake Binary

// Description:
// Given a string of digits,
//  you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
//   Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
  let nums = [];
  x.split("").map((e) => (e >= 5 ? nums.push(1) : nums.push(0)));
  return nums.join("");
}

console.log(fakeBin("45385593107843568")); //"01011110001100111"
