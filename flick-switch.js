// Flick Switch

// https://www.codewars.com/kata/64fbfe2618692c2018ebbddb/train/javascript

// Task
// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.

// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
// Notes
// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.

function flickSwitch(arr) {
  let result = [];
  let currentState = true;
  for (let item of arr) {
    if (item == "flick") {
      currentState = !currentState;
    }
    result.push(currentState);
  }
  return result;
}

console.log(flickSwitch(["john, smith, susan", "flick"]));
console.log(flickSwitch(["john"]));
console.log(flickSwitch(["codewars", "flick", "code", "wars"]));
