// Third Angle of a Triangle
// -----------------------------------
// https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
// -------------------------------------

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

// --------------------------------------

// Solution :

function otherAngle(a, b) {
  return 180 - (a + b);
}

console.log(otherAngle(43, 78)); //59
